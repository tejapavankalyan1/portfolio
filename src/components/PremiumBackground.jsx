import { useEffect, useRef } from "react";

const NODE_COUNT = 42;

const PremiumBackground = ({ mousePosition }) => {
  const canvasRef = useRef(null);
  const nodesRef = useRef([]);
  const mouseRef = useRef(mousePosition);

  useEffect(() => {
    mouseRef.current = mousePosition;
  }, [mousePosition]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    let animationFrame = 0;

    const createNodes = () =>
      Array.from({ length: NODE_COUNT }, (_, index) => ({
        x: ((index * 97) % window.innerWidth) + 10,
        y: ((index * 67) % window.innerHeight) + 10,
        vx: ((index % 5) - 2) * 0.12,
        vy: (((index + 2) % 5) - 2) * 0.12,
        radius: 1.2 + (index % 3) * 0.6,
      }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      nodesRef.current = createNodes();
    };

    const draw = () => {
      const { width, height } = canvas;

      context.clearRect(0, 0, width, height);

      const fill = context.createLinearGradient(0, 0, width, height);
      fill.addColorStop(0, "rgba(4, 7, 18, 0.92)");
      fill.addColorStop(0.45, "rgba(14, 18, 42, 0.96)");
      fill.addColorStop(1, "rgba(3, 8, 16, 0.99)");
      context.fillStyle = fill;
      context.fillRect(0, 0, width, height);

      context.save();
      context.strokeStyle = "rgba(103, 184, 255, 0.06)";
      context.lineWidth = 1;
      for (let x = 0; x < width; x += 72) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }
      for (let y = 0; y < height; y += 72) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }
      context.restore();

      const mouse = mouseRef.current;
      const nodes = nodesRef.current;

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const glow = Math.max(0, 1 - distance / 180);

        context.beginPath();
        context.arc(node.x, node.y, node.radius + glow * 1.8, 0, Math.PI * 2);
        context.fillStyle = `rgba(116, 179, 255, ${0.28 + glow * 0.4})`;
        context.fill();
      });

      for (let index = 0; index < nodes.length; index += 1) {
        for (let inner = index + 1; inner < nodes.length; inner += 1) {
          const first = nodes[index];
          const second = nodes[inner];
          const dx = first.x - second.x;
          const dy = first.y - second.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 125) {
            context.beginPath();
            context.moveTo(first.x, first.y);
            context.lineTo(second.x, second.y);
            context.strokeStyle = `rgba(114, 89, 255, ${0.12 * (1 - distance / 125)})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }
      }

      const halo = context.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        180,
      );
      halo.addColorStop(0, "rgba(64, 184, 255, 0.18)");
      halo.addColorStop(1, "rgba(64, 184, 255, 0)");
      context.fillStyle = halo;
      context.fillRect(mouse.x - 180, mouse.y - 180, 360, 360);

      for (let stream = 0; stream < 5; stream += 1) {
        const offset = ((Date.now() * 0.05 + stream * 140) % (width + 260)) - 130;
        const gradient = context.createLinearGradient(offset, 0, offset + 180, 0);
        gradient.addColorStop(0, "rgba(115, 240, 255, 0)");
        gradient.addColorStop(0.5, "rgba(115, 240, 255, 0.12)");
        gradient.addColorStop(1, "rgba(115, 240, 255, 0)");
        context.fillStyle = gradient;
        context.fillRect(offset, stream * (height / 5), 180, 1.5);
      }

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="background-canvas" />
      <div className="gradient-overlay" />
    </>
  );
};

export default PremiumBackground;
