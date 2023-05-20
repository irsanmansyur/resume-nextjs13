type Props = {
  experience: {
    years: string;
    title: string;
    catatan: string;
  };
};
export default function ExperienceCard({ experience }: Props) {
  return (
    <div className="space-y-2 border rounded border-primary p-2 relative overflow-hidden group">
      <div className="absolute inset-0 bg-primary opacity-10 group-hover:-translate-x-full duration-300" />
      <div className="year flex items-center gap-2 text-primary text-sm">
        <span className="inline-block w-5 h-5 bg-primary rounded" /> {experience.years}
      </div>
      <div className="title font-bold text-lg">{experience.title}</div>
      <div className="text-sm leading-loose" dangerouslySetInnerHTML={{ __html: experience.catatan }} />
    </div>
  );
}
