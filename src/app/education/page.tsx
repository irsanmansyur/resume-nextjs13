import { UserType } from "@/interfaces";
import EducationCard from "./education-card";
import ExperienceCard from "./experience-card";
import Scroll from "@/components/layout/scroll";

export default function Home() {
  const user: UserType = {
    name: "Irsan",
    about:
      "I am someone who deals in the field of web programming, I am a disciplined person, hard worker, able to work on a project on time and consistently to a job that is assigned to me",
  };
  return (
    <section className="py-20 space-y-10 min-h-screen container">
      <h1 className="title text-5xl font-semibold text-center pt-10">
        My <span className="text-primary"> Journey</span>
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-10 pt-10 ">
        <div className="education w-full">
          <div className="header font-bold text-3xl">Education</div>
          <div className="body py-5">
            <ul className="space-y-8 border-l border-primary pl-4">
              <li className="relative">
                <div className="w-5 h-5 rounded-full bg-primary absolute -left-[26px] top-0" />
                <EducationCard education={{ years: "2014 - 2020", title: "Sistem Informasi (SI)", university: "Stmik Dipanegara Makassar" }} />
              </li>
              <li className="relative">
                <div className="w-5 h-5 rounded-full bg-primary absolute -left-[26px] top-0" />
                <EducationCard education={{ years: "2011 - 2014", title: "Akuntansi", university: "SMK Neg.1 Bantaeng" }} />
              </li>
            </ul>
          </div>
        </div>
        <div className="experience w-full">
          <div className="header font-bold text-3xl">Experience</div>
          <div className="body py-5">
            <ul className="space-y-8 border-l border-primary pl-4">
              <li className="relative">
                <div className="w-5 h-5 rounded-full bg-primary absolute -left-[26px] top-0" />
                <ExperienceCard
                  experience={{
                    years: "2022 - Now",
                    title: "PT. AZ Solusindo Technology",
                    catatan: "As a backend developer, using nodejs (nestjs,express js), python (flask, fastapi)",
                  }}
                />
              </li>
              <li className="relative">
                <div className="w-5 h-5 rounded-full bg-primary absolute -left-[26px] top-0" />
                <ExperienceCard
                  experience={{
                    years: "2021 - 2022",
                    title: "PT. Alidata Technology",
                    catatan:
                      "<b>work on government applications (Employee Performance) using php (Laravel Framework)</b> <br/>Alidata Technology is a Web and Mobile-based System and Application Development Company with high professionalism. Specializing in creating and designing web and mobile apps with an emphasis on user-friendliness and quality systems.<br/> Headquartered in Aceh, we assist all levels of agencies and industries in utilizing a reliable and integrated information system.",
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Scroll next="/skill" back="/about" />
    </section>
  );
}
