import { SiCodeigniter, SiReact, SiGo, SiExpress, SiFastapi, SiTailwindcss, SiLaravel, SiNextdotjs, SiNestjs, SiFlask, SiBootstrap, SiDocker } from 'react-icons/si';
import { IconType } from 'react-icons';

type Tech = {
  name: string;
  color: string;
  icon: IconType;
};

const techStack: Tech[] = [
  { name: 'CodeIgniter', color: '#ee4623', icon: SiCodeigniter },
  { name: 'Reactjs', color: '#61dafb', icon: SiReact },
  { name: 'Goland', color: '#00ADD8', icon: SiGo },
  { name: 'Express TS', color: '#007acc', icon: SiExpress },
  { name: 'FastAPI', color: '#05998B', icon: SiFastapi },
  { name: 'Tailwindcss', color: '#38bdf8', icon: SiTailwindcss },
  { name: 'Laravel', color: '#f9322c', icon: SiLaravel },
  { name: 'Nextjs', color: '#000000', icon: SiNextdotjs },
  { name: 'Nestjs', color: '#e0234e', icon: SiNestjs },
  { name: 'Flask', color: '#000000', icon: SiFlask },
  { name: 'Bootsrap', color: '#7952b3', icon: SiBootstrap },
  { name: 'Docker', color: '#2496ed', icon: SiDocker },
];

export default function TechStackWithIcons() {
  return (
    <div className="py-6 px-4 text-center">
      <h2 className="text-2xl font-bold italic mb-4 text-white">Tehnologi Yang Di Pakai</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {techStack.map(({ name, color, icon: Icon }) => {
          const IconComponent = Icon as React.ComponentType<{ className?: string }>;
          return (
            <div key={name} className="flex items-center gap-2 px-3 py-1 rounded-full border font-medium text-sm shadow text-white" style={{ backgroundColor: color }}>
              <IconComponent className="text-lg" />
              <span>{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
