"use client";
import { Icon } from "@iconify/react";

type Props = {};
export const SocialMedia = ({ ...props }: Props) => {
  return (
    <div className="social-media flex items-center gap-6">
      <button
        type="button"
        className="tracking-widest bg-transparent relative border-2 border-primary p-2  font-bold z-[1] overflow-hidden before:transition before:duration-500 before:w-full before:-translate-x-full before:hover:translate-x-0 before:z-[-1] before:absolute  before:top-0 before:left-0 before:h-full before:bg-primary rounded-full group"
      >
        <Icon icon="gg:facebook" className="w-10 h-10 text-primary group-hover:text-white duration-300" />
      </button>
      <button
        type="button"
        className="tracking-widest bg-transparent relative border-2 border-primary p-2  font-bold z-[1] overflow-hidden before:transition before:duration-500 before:w-full before:-translate-x-full before:hover:translate-x-0 before:z-[-1] before:absolute  before:top-0 before:left-0 before:h-full before:bg-primary rounded-full group"
      >
        <Icon icon="ri:linkedin-fill" className="w-10 h-10 text-primary group-hover:text-white duration-300" />
      </button>
      <button
        type="button"
        className="tracking-widest bg-transparent relative border-2 border-primary p-2  font-bold z-[1] overflow-hidden before:transition before:duration-500 before:w-full before:-translate-x-full before:hover:translate-x-0 before:z-[-1] before:absolute  before:top-0 before:left-0 before:h-full before:bg-primary rounded-full group"
      >
        <Icon icon="teenyicons:github-solid" className="w-10 h-10 text-primary group-hover:text-white duration-300" />
      </button>
    </div>
  );
};
export default SocialMedia;
