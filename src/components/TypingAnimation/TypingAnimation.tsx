import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  typingSpeed: number;
  delay?: number;
  children: string;
}

function TypingAnimation({
  typingSpeed,
  delay = 0,
  children,
}: TypingAnimationProps) {
  const [text, setText] = useState('');
  const sentence = children;

  useEffect(() => {
    let counter = 0;
    const startTyping = () => {
      const typingInterval = setInterval(() => {
        if (counter === sentence.length) {
          clearInterval(typingInterval);
        } else {
          setText(sentence.slice(0, counter + 1));
          counter += 1;
        }
      }, typingSpeed);
    };

    const delayTimeout = setTimeout(startTyping, delay); // Delay before starting the typing animation

    return () => {
      clearTimeout(delayTimeout);
    };
  }, [sentence, typingSpeed, delay]);

  return <motion.h1>{text}</motion.h1>;
}

export default TypingAnimation;
