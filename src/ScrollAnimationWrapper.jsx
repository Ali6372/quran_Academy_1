import React from 'react';
import { motion } from 'framer-motion';

const ScrollAnimationWrapper = ({ children, direction = 'bottom' }) => {
  const variants = {
    hidden: {
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'bottom' ? 100 : direction === 'top' ? -100 : 0,
      opacity: 0,
    },
    visible: { x: 0, y: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;
