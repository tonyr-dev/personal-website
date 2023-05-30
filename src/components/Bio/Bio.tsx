import { motion } from 'framer-motion';

import TypingAnimation from '../TypingAnimation/TypingAnimation';

export default function Bio() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-sans w-60 self-center text-center text-slate-200">
        <TypingAnimation typingSpeed={30} delay={4000}>
          I&apos;m currently working on my portfolio but please feel free to
        </TypingAnimation>{' '}
        <a className="text-pink-400" href="mailto:contact@tonyroberts.dev">
          <TypingAnimation typingSpeed={70} delay={6000}>
            email me
          </TypingAnimation>
        </a>{' '}
        <TypingAnimation typingSpeed={30} delay={6500}>
          or reach out to me on
        </TypingAnimation>{' '}
        <a
          className="text-pink-400"
          href="https://www.linkedin.com/in/anthony-robertson-793b22139"
        >
          <TypingAnimation typingSpeed={70} delay={7000}>
            linkedin
          </TypingAnimation>
        </a>
      </p>
    </div>
  );
}
