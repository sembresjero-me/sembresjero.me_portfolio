'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from '@/app/components/ui/toaster';

import { usePageTransition } from '@/app/hooks/usePageTransition';
import Container from '@/app/components/various/Container';
import Footer from '@/app/components/header-footer/Footer';
import Header from '@/app/components/header-footer/Header';

import '@/app/globals.css';

interface AppProps {
  children: React.ReactNode;
  lng: string;
}

const App: React.FC<AppProps> = ({ children, lng }) => {
  const { count } = usePageTransition();

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={count}>
          <Header lng={lng} />
          <Container>{children}</Container>
          <Footer lng={lng} />
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
      <Toaster />
    </>
  );
};

export default App;
