import React, { useEffect, useRef } from 'react';

interface Bubble {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  baseRadius: number;
  pulseSpeed: number;
  pulsePhase: number;
  opacity: number;
  highlightOffset: { x: number; y: number };
}

export const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    targetX: window.innerWidth / 2,
    targetY: window.innerHeight / 2
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Generate 3D emerald glass bubbles
    const bubbleCount = Math.min(22, Math.floor((width * height) / 45000));
    const bubbles: Bubble[] = [];

    for (let i = 0; i < bubbleCount; i++) {
      const radius = Math.random() * 45 + 18;
      bubbles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        baseRadius: radius,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -0.2 - Math.random() * 0.5, // float upward
        pulseSpeed: 0.02 + Math.random() * 0.02,
        pulsePhase: Math.random() * Math.PI * 2,
        opacity: 0.55 + Math.random() * 0.35,
        highlightOffset: {
          x: -radius * 0.35,
          y: -radius * 0.35
        }
      });
    }

    // Floating particles (dust)
    const particleCount = 40;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speedY: -0.15 - Math.random() * 0.3,
      speedX: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.6 + 0.2
    }));

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Draw faint floating particles
      ctx.save();
      for (const p of particles) {
        p.y += p.speedY;
        p.x += p.speedX;
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.fillStyle = `rgba(52, 211, 153, ${p.alpha * 0.4})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // Render 3D Glass Bubbles
      for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i];
        b.pulsePhase += b.pulseSpeed;
        const currentRadius = b.baseRadius + Math.sin(b.pulsePhase) * 3;

        // Mouse gentle repulsion/interaction
        const dx = b.x - mouseRef.current.x;
        const dy = b.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          const force = (180 - dist) / 180;
          b.x += (dx / dist) * force * 2.5;
          b.y += (dy / dist) * force * 2.5;
        }

        // Float movement
        b.x += b.vx + Math.sin(time + i) * 0.3;
        b.y += b.vy;

        // Wrap around bounds
        if (b.y < -currentRadius * 2) {
          b.y = height + currentRadius * 2;
          b.x = Math.random() * width;
        }
        if (b.x < -currentRadius * 2) b.x = width + currentRadius * 2;
        if (b.x > width + currentRadius * 2) b.x = -currentRadius * 2;

        ctx.save();

        // 1. Outer ambient glow
        const glowGrad = ctx.createRadialGradient(b.x, b.y, currentRadius * 0.7, b.x, b.y, currentRadius * 2);
        glowGrad.addColorStop(0, 'rgba(16, 185, 129, 0.18)');
        glowGrad.addColorStop(0.5, 'rgba(5, 241, 144, 0.06)');
        glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, currentRadius * 2, 0, Math.PI * 2);
        ctx.fill();

        // 2. Glass Body Gradient (Emerald 3D sphere)
        const sphereGrad = ctx.createRadialGradient(
          b.x - currentRadius * 0.35,
          b.y - currentRadius * 0.35,
          currentRadius * 0.1,
          b.x,
          b.y,
          currentRadius
        );
        sphereGrad.addColorStop(0, `rgba(220, 252, 231, ${0.85 * b.opacity})`);
        sphereGrad.addColorStop(0.2, `rgba(52, 211, 153, ${0.65 * b.opacity})`);
        sphereGrad.addColorStop(0.55, `rgba(5, 150, 105, ${0.45 * b.opacity})`);
        sphereGrad.addColorStop(0.85, `rgba(4, 120, 87, ${0.3 * b.opacity})`);
        sphereGrad.addColorStop(1, `rgba(2, 44, 34, ${0.6 * b.opacity})`);

        ctx.fillStyle = sphereGrad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();

        // 3. Glowing Rim Edge (Glass refraction border)
        ctx.strokeStyle = `rgba(167, 243, 208, ${0.5 * b.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // 4. Inner bottom reflection ring (Glass bottom bounce)
        const bottomGlow = ctx.createRadialGradient(
          b.x,
          b.y + currentRadius * 0.6,
          currentRadius * 0.1,
          b.x,
          b.y + currentRadius * 0.6,
          currentRadius * 0.6
        );
        bottomGlow.addColorStop(0, `rgba(16, 185, 129, ${0.6 * b.opacity})`);
        bottomGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = bottomGlow;
        ctx.beginPath();
        ctx.arc(b.x, b.y, currentRadius * 0.9, 0, Math.PI * 2);
        ctx.fill();

        // 5. Crisp Primary Specular Glint (Top-left shiny highlight)
        ctx.save();
        ctx.translate(b.x - currentRadius * 0.35, b.y - currentRadius * 0.35);
        ctx.rotate(-Math.PI / 4);
        const specGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, currentRadius * 0.45);
        specGrad.addColorStop(0, `rgba(255, 255, 255, ${0.95 * b.opacity})`);
        specGrad.addColorStop(0.4, `rgba(240, 253, 244, ${0.5 * b.opacity})`);
        specGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = specGrad;
        ctx.beginPath();
        ctx.ellipse(0, 0, currentRadius * 0.4, currentRadius * 0.2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // 6. Secondary tiny glint
        ctx.fillStyle = `rgba(255, 255, 255, ${0.8 * b.opacity})`;
        ctx.beginPath();
        ctx.arc(b.x - currentRadius * 0.5, b.y - currentRadius * 0.15, currentRadius * 0.08, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Deep Obsidian Background with emerald radial glow accents */}
      <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-emerald-600/10 blur-[130px] animate-pulse-glow" />
      <div className="absolute top-[30%] right-[-15%] w-[60vw] h-[60vw] rounded-full bg-teal-600/10 blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-emerald-500/10 blur-[140px]" />
      
      {/* 2. Cyber Grid Matrix */}
      <div className="absolute inset-0 cyber-grid opacity-60" />

      {/* 3. Interactive 3D Glass Bubbles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
