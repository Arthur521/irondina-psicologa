import { Box } from "@chakra-ui/react";
import { type PropsWithChildren, useEffect, useRef, useState } from "react";

type RevealProps = PropsWithChildren<{
  delay?: number;
}>;

export function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      transform={visible ? "translateY(0)" : "translateY(24px)"}
      opacity={visible ? 1 : 0}
      transition="all 900ms ease-out"
    >
      {children}
    </Box>
  );
}
