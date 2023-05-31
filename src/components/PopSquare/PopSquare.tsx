import { motion } from 'framer-motion';

interface PopSquareProps {
  duration?: number;
  delay?: number;
  children: React.ReactNode;
}

export default function PopSquare({
  duration = 2,
  delay = 0,
  children,
}: PopSquareProps) {
  return (
    <motion.div
      animate={{
        opacity: [0, 1, 1],
        scale: [0, 1.5, 1],
      }}
      transition={{ duration, delay }}
      initial={{ opacity: 0, scale: 0 }}
    >
      {children}
    </motion.div>
  );
}
