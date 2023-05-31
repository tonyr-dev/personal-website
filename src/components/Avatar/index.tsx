import { motion } from 'framer-motion';

export default function Avatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 3.3 }}
      style={{
        borderRadius: '50%',
        width: '350px',
        height: '350px',
        backgroundImage: 'url(../../../public/images/profile.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
}
