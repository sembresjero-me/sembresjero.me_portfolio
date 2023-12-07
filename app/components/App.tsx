'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

import Container from './Container';
import Footer from './Footer';
import Header from './Header';

import '@/app/globals.css';

interface AppProps {
  children: React.ReactNode;
  lng: string;
}

const App: React.FC<AppProps> = ({ children, lng }) => {
  const [transitionCount, setTransitionCount] = useState<number>(0);

  function pageTransitionHandler() {
    setTransitionCount(transitionCount + 1);
  }

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={transitionCount}>
          <Header lng={lng} counter={pageTransitionHandler} />
          <Image
            src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/sembresjero-me-typo.svg"
            alt="Jérôme Sembres Portfolio - Typo"
            width={30}
            height={123}
            className="fixed bottom-8 left-8"
          />
          <Container>{children}</Container>
          <Footer lng={lng} counter={pageTransitionHandler} />
          <motion.div
            className="slide-in"
            animate={{ height: '0vh' }}
            exit={{ height: '100vh' }}
            transition={{ duration: 0.5, ease: [0.4, 0.8, 0.4, 0.8] }}
          ></motion.div>
          <motion.div
            className="slide-out"
            initial={{ height: '100vh' }}
            animate={{ height: '0vh' }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.8, 0.4, 0.8],
              delay: 0.5,
            }}
          ></motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default App;
