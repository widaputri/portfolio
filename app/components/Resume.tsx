import Image from 'next/image';
import Link from 'next/link';

const experiences = [
  {
    logo: '/icon.svg',
    date: 'Feb-Sep 2026',
    title: 'Product Design Intern',
    company: 'Grab Indonesia',
    points: [
      'Designed end-to-end user experiences for consumer-facing features within Grab’s Customer Experience ecosystem.',
      'Conducted competitive analysis, heuristic evaluations, and usability testing to identify user pain points and validate design directions.',
      'Collaborated closely with product managers, researchers, and engineers to translate product requirements into scalable design solutions.',
      'Leveraged AI tools such as Cursor, Claude Code, and Figma Make for UX writing, localization, and design ideation, as well as rapid prototyping for proof of concepts.',
    ],
  },
  {
    logo: '/spun_smart.png',
    date: 'Jan–Aug 2025; Dec 2025–Feb 2026',
    title: 'Product Design Intern',
    company: 'SPUN Global',
    points: [
      'Contributed to the website revamp, directly contributing to a 3x growth in Monthly Active Users.',
      'Redesigned and simplified user login and checkout flows, resulting in a 40% increase in conversion rate.',
      'Led the design of internal tools, leading to a 30% month-over-month decrease in operational turnaround time.',
    ],
  },
  {
    logo: '/icon.svg',
    date: 'June–Sept 2024',
    title: 'Design Intern',
    company: 'GlobalDeel',
    points: [
      'Designed the complete user interface and user experience for the GlobalHack website.',
      'Developed comprehensive brand guidelines and promotional materials for GlobalHack.',
    ],
  },
];

export default function Resume() {
  return (
    <section id="resume" className="mt-20">
      <div className="mb-10 flex items-center justify-between border-b border-[#363636] pb-3">
        <h2 className="mono-font text-4xl">My footprint 🐾</h2>
        <Link href="https://ristek.link/ResumeWida" target="_blank" rel="noreferrer" className="mono-font text-xl underline">Full resume →</Link>
      </div>
      <div className="flex flex-col">
        {experiences.map((experience) => (
          <article key={experience.company} className="grid grid-cols-[200px_1fr] gap-12 border-b-[3px] border-[#363636] py-10 max-[700px]:grid-cols-1 max-[700px]:gap-6">
            <div>
              <div className="relative h-16 w-[180px]">
                <Image src={experience.logo} alt="" fill className="object-contain object-left" />
              </div>
              <p className="design-font mt-5 text-xl">{experience.date}</p>
            </div>
            <div>
              <h3 className="mono-font text-[32px] leading-none">{experience.title}</h3>
              <p className="mono-font mt-5 text-xl text-[#8f8f8f]">{experience.company}</p>
              <ul className="mt-8 flex flex-col gap-5">
                {experience.points.map((point) => <li key={point} className="design-font grid grid-cols-[24px_1fr] gap-6 text-xl leading-[1.2]"><span>—</span><span>{point}</span></li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-16 border-b border-[#363636] pb-3">
        <h2 className="mono-font text-4xl">Where I learn 🎓</h2>
        <div className="mt-8 grid grid-cols-[200px_1fr] gap-12 max-[700px]:grid-cols-1 max-[700px]:gap-4">
          <p className="design-font text-xl text-[#8f8f8f]">Aug 2022–2026</p>
          <div><h3 className="mono-font text-[32px] leading-none">Bachelor&apos;s Degree in Computer Science</h3><p className="mono-font mt-4 text-xl text-[#8f8f8f]">Universitas Indonesia</p></div>
        </div>
      </div>
    </section>
  );
}
