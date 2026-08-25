import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

const spring = { damping: 26, stiffness: 240, mass: 1 };

/**
 * Inclina cualquier contenido con el puntero, con un brillo que lo sigue.
 * Es como TiltedCard de React Bits pero acepta hijos arbitrarios en vez de
 * una imagen, que es lo que necesita la tarjeta de contacto.
 */
const TiltCard = ({ children, amplitude = 9, hoverScale = 1.025, className = '' }) => {
  const ref = useRef(null);

  const rotateX = useSpring(useMotionValue(0), spring);
  const rotateY = useSpring(useMotionValue(0), spring);
  const scale = useSpring(1, spring);
  const glareX = useSpring(useMotionValue(50), spring);
  const glareY = useSpring(useMotionValue(50), spring);
  const glareOpacity = useSpring(useMotionValue(0), spring);

  const glare = useTransform(
    [glareX, glareY, glareOpacity],
    ([gx, gy, go]) =>
      `radial-gradient(46% 46% at ${gx}% ${gy}%, rgba(255,255,255,${0.13 * go}), transparent 72%)`
  );

  const handleMove = e => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    rotateX.set((py - 0.5) * -2 * amplitude);
    rotateY.set((px - 0.5) * 2 * amplitude);
    glareX.set(px * 100);
    glareY.set(py * 100);
  };

  const handleEnter = () => {
    scale.set(hoverScale);
    glareOpacity.set(1);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    glareOpacity.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`tilt ${className}`}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, scale, transformStyle: 'preserve-3d' }}
    >
      {children}
      <motion.span className="tilt__glare" style={{ backgroundImage: glare }} aria-hidden="true" />
    </motion.div>
  );
};

export default TiltCard;
