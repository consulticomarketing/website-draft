import { useEffect, useRef } from "react";

type Dot = {
  baseX: number;
  baseY: number;
};

const DOT_SPACING = 25;
const DOT_RADIUS = 1.5;
const INFLUENCE_RADIUS = 120;
const VERTICAL_RISE = 25;
const RADIAL_EXPAND = 8;

export function InteractiveDots() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dots: Dot[] = [];
    const mouse = {
      x: null as number | null,
      y: null as number | null,
    };

    let animationFrameId: number;

    function createDots() {
      dots.length = 0;
      const width = window.innerWidth;
      const height = window.innerHeight;

      for (let y = 0; y <= height; y += DOT_SPACING) {
        for (let x = 0; x <= width; x += DOT_SPACING) {
          dots.push({ baseX: x, baseY: y });
        }
      }
    }

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createDots();
    }

    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function handleMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    function animate() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (const dot of dots) {
        if (dot.baseY < 50) continue;

        let x = dot.baseX;
        let y = dot.baseY;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = dot.baseX - mouse.x;
          const dy = dot.baseY - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < INFLUENCE_RADIUS && distance > 0) {
            const force = (INFLUENCE_RADIUS - distance) / INFLUENCE_RADIUS;

            y -= force * VERTICAL_RISE;

            const radialDisplacement = force * RADIAL_EXPAND;
            x += (dx / distance) * radialDisplacement;
            y += (dy / distance) * radialDisplacement;
          }
        }

        ctx.beginPath();
        ctx.arc(x, y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(200, 200, 200, 0.4)";
        ctx.fill();
      }

      animationFrameId = window.requestAnimationFrame(animate);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none w-screen h-screen"
    />
  );
}
