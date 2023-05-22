import { UserType } from "@/interfaces";
import { Skill } from "./skill";
import SocialMedia from "@/components/social-media";
import Image from "next/image";
import Scroll from "@/components/layout/scroll";

export default function Home() {
  const user: UserType = {
    name: "Irsan",
    about:
      "I am someone who deals in the field of web programming, I am a disciplined person, hard worker, able to work on a project on time and consistently to a job that is assigned to me",
  };

  return (
    <section className="container">
      <div className="flex md:items-center md:justify-between gap-4 min-h-screen py-20 relative">
        <div className="space-y-4 w-full md:w-2/3 pb-10">
          <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
            <div>
              <h1 className="text-3xl md:text-6xl font-extrabold">
                Hi!, <br /> call me `{user.name}`
              </h1>
              <Skill />
              <p className="md:text-2xl">{user.about}</p>
              <div className="flex gap-6 items-center mt-10">
                <button className="delay-500 tracking-widest bg-primary relative border-2 border-primary rounded p-2  font-bold z-[1] overflow-hidden before:transition before:duration-500 before:w-full before:-translate-x-full before:hover:translate-x-0 before:z-[-1] before:absolute  before:top-0 before:left-0 before:h-full before:bg-slate-800 ">
                  Hire Me
                </button>
                <button className="tracking-widest bg-transparent relative border-2 border-primary rounded p-2  font-bold z-[1] overflow-hidden before:transition before:duration-500 before:w-full before:-translate-x-full before:hover:translate-x-0 before:z-[-1] before:absolute  before:top-0 before:left-0 before:h-full before:bg-primary">
                  Let&apos;s Talk
                </button>
              </div>
            </div>
            <div className="flex items-center flex-col md:mt-20 gap-3">
              <Image src="/images/irsan-home1-crop.png" width={2000} height={2000} alt="Picture of the author" className=" md:hidden w-full max-w-[70%]" />
              <SocialMedia />
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-end w-1/2 -mx-4 overflow-hidden justify-center">
          <div className="h-full flex items-center">
            <div className="relative">
              <Image src="/images/irsan-home1-crop.png" width={2000} height={2000} alt="Picture of the author" className="w-full max-w-[70%]" />
              <div className="hidden md:block absolute top-0 right-0 h-full bg-default image-cover" />
              <div className="hidden md:block absolute left:0 top-0 h-full w-full bg-default image-back"></div>
            </div>
          </div>
        </div>
      </div>
      <Scroll next="/about" />
    </section>
  );
}
