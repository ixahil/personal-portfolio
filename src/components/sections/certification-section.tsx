import { data } from "@/config/site";
import SectionLayout from "../layouts/section-layout";

const CertificationSection = async () => {
  return (
    <SectionLayout id="certifications" title="Certifications">
      <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
        {data.certifications.map((ed) => (
          <div key={ed.id} className="grid gap-1 relative">
            <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

            <h4 className="text-xl font-medium">{ed.degree}</h4>
            <h5 className="font-medium">{ed.institution}</h5>
            <div className="text-gray-500 dark:text-gray-400">
              {ed.completedDate}
            </div>
            <div className="flex gap-2">
              {ed.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block bg-gray-200 dark:bg-gray-500 dark:text-white rounded-full px-3 py-1 text-xs font-light text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default CertificationSection;
