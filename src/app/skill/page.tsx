import Scroll from '@/components/layout/scroll';

export default function Skill() {
  const skills = [
    { name: 'Codeigniter v3 || PHP', level: 95 },
    { name: 'Laravel v7 - (latest) || PHP', level: 90 },
    { name: 'Reactjs (latest) || javascript,typescript', level: 87 },
    { name: 'Nextjs (latest) || typescript', level: 87 },
    { name: 'Goland (latest) || typescript', level: 30 },
    { name: 'Nestjs (latest) || typescript', level: 93 },
    { name: 'Express (latest) || typescript', level: 82 },
    { name: 'Flask (latest) || python', level: 70 },
    { name: 'fastapi (latest) || python', level: 75 },
    { name: 'Bootstarp v4 - (latest) || css framework', level: 94 },
    { name: 'TailwindCss v2 - (latest) || css framework', level: 99 },
    { name: 'Docker Devloyment', level: 87 },
    { name: 'Setup Server, etc', level: 90 },
    { name: 'Solving Skill', level: 88 },
  ];
  return (
    <section className="py-20 space-y-10 min-h-screen container">
      <h1 className="title text-5xl font-semibold text-center pt-10">
        My <span className="text-primary"> Skill</span>
      </h1>
      <div className="program-framework py-10">
        <h3 className="text-xl md:text-3xl text-center font-bold mb-4">Programin Language / Framework</h3>
        <div className="body">
          <div className="rounded border-2 border-primary p-3 flex flex-wrap">
            {skills.map((skill, i) => {
              return (
                <div key={i} className="w-full md:w-1/2 p-4 group">
                  <div className="title flex justify-between items-center pb-2 group-hover:text-primary group-hover:font-bold duration-300">
                    <span className="text-xs sm:text-base">{skill.name}</span>
                    {/* <span className="text-sm">{skill.level}%</span> */}
                  </div>
                  <div className="bar rounded border border-primary p-[4px]">
                    <div className={`bg-primary rounded-full h-[3px] group-hover:h-[4px]`} style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Scroll next="/contact" back="/education" />
    </section>
  );
}
