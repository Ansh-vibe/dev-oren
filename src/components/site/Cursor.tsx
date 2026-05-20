import { useEffect, useState } from "react";

export function Cursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      className="pointer-events-none fixed z-[100] h-[400px] w-[400px] rounded-full opacity-50 mix-blend-multiply transition-transform duration-150 ease-out hidden md:block"
      style={{
        transform: `translate(${pos.x - 200}px, ${pos.y - 200}px)`,
        background:
          "radial-gradient(circle, rgba(232,201,122,0.35), transparent 60%)",
      }}
    />
  );
}
