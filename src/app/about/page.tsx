import Image from 'next/image';
import Scroll from '@/components/layout/scroll';
import { Metadata } from 'next';
import { userProvider } from '@/utils/providers';

export const metadata: Metadata = {
  title: 'Page About',
  description: 'Welcome to the resume of irsan mansyur',
};

export default async function About() {
  const user = await userProvider().getUser();
  return (
    <section className="py-20 space-y-4 min-h-screen container">
      <h1 className="title text-5xl font-semibold text-center pt-10">
        About <span className="text-primary"> Me</span>
      </h1>
      <div className="flex items-center justify-center py-10">
        <div className="relative p-3">
          <Image
            src="/images/irsan-home2-crop.png"
            width={500}
            height={500}
            alt="Picture of the Irsan Mansyur"
            style={{ width: 'auto', height: 'auto' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !w-[200px] !h-[200px] rounded-full border-primary border-2"
          />
          <div className="circle-img  w-[230px] h-[230px] rounded-full border-4 border-x-primary border-y-transparent"></div>
        </div>
      </div>
      <h2 className="text-xl md:text-4xl font-bold text-center space-y-2 flex justify-center items-center flex-col">
        <span className="font-extrabold text-2xl md:text-4xl text-primary">Develover</span>
        <span className="whitespace-nowrap">`Frontend` || `Backend `</span>
      </h2>
      <div className="content space-y-6 max-w-xl mx-auto">
        <p className="text-center font-monolisa text-justify">{user.about}</p>
        <center>
          <button className="tracking-widest bg-transparent relative border-2 border-primary rounded p-2  font-bold z-[1] overflow-hidden before:transition before:duration-500 before:w-full before:-translate-x-full before:hover:translate-x-0 before:z-[-1] before:absolute  before:top-0 before:left-0 before:h-full before:bg-primary">
            Read more
          </button>
        </center>
      </div>
      <Scroll next="/education" back="/" />
    </section>
  );
}
