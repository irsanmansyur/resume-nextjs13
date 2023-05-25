'use client';
import NextNProgress from 'nextjs-progressbar';
export default function ProgressBar() {
  return (
    <div className="z-[999999]  fixed top-0 right-0 left-0">
      <NextNProgress />
    </div>
  );
}
