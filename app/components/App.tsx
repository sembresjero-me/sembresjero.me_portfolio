'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import { usePageTransition } from '@/app/hooks/usePageTransition';
import Container from '@/app/components/Container';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

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
          <Image
            src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/sembresjero-me-logo-typo-light.svg"
            alt="Jérôme Sembres Portfolio - Typo"
            width={30}
            height={123}
            className="fixed bottom-5 left-4 z-[51] hidden lg:block"
          />
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
              delay: 0.75,
            }}
          ></motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default App;
