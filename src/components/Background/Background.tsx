import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatches = () => {
      setMatches(mediaQuery.matches);
    };

    updateMatches();
    mediaQuery.addEventListener('change', updateMatches);

    return () => {
      mediaQuery.removeEventListener('change', updateMatches);
    };
  }, [query]);

  return matches;
};

interface BackgroundProps {
  children: React.ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <div className="flex justify-center items-center w-screen h-screen backdrop-blur-lg">
      <motion.div
        initial={{ height: isSmallScreen ? '40%' : '18%' }}
        animate={{ height: isSmallScreen ? '98%' : '60%' }}
        transition={{ duration: 2, delay: 3 }}
      >
        <main className=" sm:w-[22rem] lg:w-[34rem] h-5/6 bg-slate-800 rounded-xl drop-shadow-lg bg-gradient-to-tr from-slate-950 to-slate-800 border-solid border-2 border-pink-400">
          {children}
        </main>
      </motion.div>
    </div>
  );
}
