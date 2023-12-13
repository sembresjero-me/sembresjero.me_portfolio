'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ContactItemProps {
  id: number;
  type?: string;
  name: string;
  title: string;
  link: string;
  imageLink: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ id, type, name, title, link, imageLink }) => {
  const router = useRouter();
  let marginClass = '';
  if (id === 1) {
    marginClass = 'mb-1';
  } else if (id === 4) {
    marginClass = 'mt-1';
  } else {
    marginClass = 'my-1';
  }

  return (
    <>
      <div
        className={`${marginClass} flex w-full items-center ${
          type === 'mobile' ? 'justify-start' : 'justify-center'
        } `}
        onClick={() => {
          router.push(`${link}`);
        }}
      >
        <p className="me-2">{title}</p>
        <Image
          src={imageLink}
          alt={`Jérôme Sembres Portfolio | ${name} Logo`}
          width={20}
          height={20}
        />
      </div>
    </>
  );
};

export default ContactItem;
