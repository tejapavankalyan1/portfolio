import { useEffect, useRef } from 'react';

const Background = ({ mousePosition }) => {
  const canvasRef = useRef(null);
  const linesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Line {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 100 + 50;
        this.speed = Math.random() * 0.5 + 0.2;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.angle = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;

        // Mouse interaction
        const dx = this.x - mousePosition.x;
        const dy = this.y - mousePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          this.angle += 0.05;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x + Math.cos(this.angle) * this.length,
          this.y + Math.sin(this.angle) * this.length
        );
        ctx.strokeStyle = `rgba(100, 255, 218, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    const init = () => {
      resizeCanvas();
      linesRef.current = Array.from({ length: 50 }, () => new Line());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(10, 25, 47, 0.1)');
      gradient.addColorStop(1, 'rgba(10, 25, 47, 0.8)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw lines
      linesRef.current.forEach(line => {
        line.update();
        line.draw();
      });

      // Draw connections between close lines
      for (let i = 0; i < linesRef.current.length; i++) {
        for (let j = i + 1; j < linesRef.current.length; j++) {
          const line1 = linesRef.current[i];
          const line2 = linesRef.current[j];
          const dx = line1.x - line2.x;
          const dy = line1.y - line2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(line1.x, line1.y);
            ctx.lineTo(line2.x, line2.y);
            ctx.strokeStyle = `rgba(100, 255, 218, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw mouse interaction effect
      ctx.beginPath();
      ctx.arc(mousePosition.x, mousePosition.y, 150, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(100, 255, 218, 0.03)';
      ctx.fill();

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', init);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', init);
    };
  }, [mousePosition]);

  return (
    <>
      <canvas ref={canvasRef} className="background-canvas" />
      <div className="gradient-overlay"></div>
    </>
  );
};

export default Background;