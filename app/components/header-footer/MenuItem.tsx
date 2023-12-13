'use client';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { usePageTransition } from '@/app/hooks/usePageTransition';
import { useIsMobileMenuOpen } from '@/app/hooks/useIsMobileMenuOpen';

interface MenuItemProps {
  type?: string;
  path: string;
  title: string;
  activeTitle: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ type, path, title, activeTitle }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { count, setCount } = usePageTransition();
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useIsMobileMenuOpen();

  return (
    <>
      <a
        className={type === 'mobile' ? 'mb-4 text-4xl text-primary sm:text-5xl' : ''}
        onClick={() => {
          if (pathname === path) {
            router.push('#');
          } else {
            setCount(count + 1);
            isMobileMenuOpen && setIsMobileMenuOpen(false);
            router.push(path);
          }
        }}
      >
        {pathname === path ? activeTitle : title}
      </a>
    </>
  );
};

export default MenuItem;
