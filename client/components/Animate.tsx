import React, { useEffect, useRef, useState } from "react";

interface AnimateProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
  delay?: number; // ms
}

export default function Animate({
  children,
  once = true,
  threshold = 0.15,
  rootMargin = "0px",
  delay = 0,
  className,
  ...props
}: AnimateProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay) {
              setTimeout(() => setVisible(true), delay);
            } else {
              setVisible(true);
            }
            if (once) observer.unobserve(el);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, once, threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`${className ?? ""} ${
        visible ? "animate-fade-up" : "opacity-0 translate-y-6"
      }`}
      {...props}
    >
      {children}
    </div>
  );
}
