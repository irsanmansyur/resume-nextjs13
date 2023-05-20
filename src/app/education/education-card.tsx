"use client";
import { Icon } from "@iconify/react";
import React from "react";

type Props = {
  education: {
    years: string;
    title: string;
    university: string;
  };
};
export default function EducationCard({ education }: Props) {
  return (
    <div className="space-y-2 border rounded border-primary p-2 relative overflow-hidden group">
      <div className="absolute inset-0 bg-primary opacity-10 group-hover:-translate-x-full duration-300" />
      <div className="year flex items-center gap-2 text-primary text-sm">
        <span className="inline-block w-5 h-5 bg-primary rounded" /> {education.years}
      </div>
      <div className="title font-bold text-lg">{education.title}</div>
      <div className="location flex items-center gap-2">
        {education.university}
        <Icon icon="nimbus:university" className="text-primary bgpred-500" />
      </div>
    </div>
  );
}
