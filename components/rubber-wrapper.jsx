"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
} from "framer-motion";

export default function RubberWrapper({ children, className }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // 1. Damping dibikin lebih kecil (20) & stiffness lebih kenyal (200) biar efek rubber-nya makin membal
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 20,
    stiffness: 200,
  });

  // 2. Range velocity diturunin ke [-1200, 0, 1200] & scaleY dinaikkan ke 1.25 (melar hingga 25%)
  const scaleY = useTransform(
    smoothVelocity,
    [-1200, 0, 1200],
    [1.05, 1, 1.05],
  );

  // 3. Arah tarikan (pivot point)
  const transformOrigin = useTransform(smoothVelocity, (v) => {
    if (v > 0) return "bottom"; // Scroll ke bawah -> card ketarik dari atas
    if (v < 0) return "top"; // Scroll ke atas -> card ketarik dari bawah
    return "center";
  });

  return (
    <motion.div
      style={{
        scaleY: isMounted ? scaleY : 1,
        transformOrigin: isMounted ? transformOrigin : "center",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
