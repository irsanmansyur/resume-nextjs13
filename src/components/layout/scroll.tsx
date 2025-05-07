'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type Props = {
  next?: string;
  back?: string;
};
export default function Scroll({ back, next }: Props) {
  const [client, setClient] = useState(false);
  useEffect(() => {
    if (client === false) {
      setClient(true);
      return () => {};
    }
    return () => {};
  }, [client]);
  if (client === false) return <></>;

  return <ScrollClient back={back} next={next} />;
}
function ScrollClient({ back, next }: Props) {
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== 'undefined' && document?.documentElement) {
      const handleScroll = (event: any) => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (event.deltaY < 0) {
          if (scrollTop === 0) {
            console.log('Anda telah mencapai bagian paling atas');
            if (back) router.push(back);
          }
        } else if (event.deltaY > 0) {
          console.log('Anda melakukan scroll ke bawah');
          if (scrollTop + clientHeight >= scrollHeight) {
            console.log('Anda telah mencapai bagian paling bawah');
            if (next) router.push(next);
          }
          // Lakukan sesuatu ketika scroll ke bawah terdeteksi
        }
      };

      document.addEventListener('wheel', handleScroll);
      return () => {
        document.removeEventListener('wheel', handleScroll);
      };
    }
    return () => {};
  }, [back, next, router]);

  return (
    <div className="absolute bottom-0 right-0 w-full">
      <div className="container flex justify-end py-2">
        <div className="flex items-center rounded border gap-1 shadow-sm border-primary text-primary text-lg tracking-wide  px-3">
          {back && (
            <Link href={back} replace>
              Back
            </Link>
          )}
          {back && next && <span>|</span>}
          {next && (
            <Link href={next} replace>
              Next
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
