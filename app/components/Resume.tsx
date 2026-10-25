import Image from 'next/image';
import Link from 'next/link';

const experiences = [
  {
    logo: '/figma-assets/raw-19.png',
    logoHeight: 64,
    date: 'Feb-Sep 2026',
    title: 'Product Design Intern',
    company: 'Grab Indonesia',
    companyUrl: 'https://grab.com',
    points: [
      'Designed end-to-end user experiences for consumer-facing features within Grab’s Customer Experience ecosystem.',
      'Conducted competitive analysis, heuristic evaluations, and usability testing to identify user pain points and validate design directions.',
      'Collaborated closely with product managers, researchers, and engineers to translate product requirements into scalable design solutions.',
      'Leveraged AI tools such as Cursor, Claude Code, and Figma Make for UX writing, localization, and design ideation, as well as rapid prototyping for proof of concepts.',
    ],
  },
  {
    logo: '/figma-assets/raw-11.png',
    logoHeight: 54,
    date: 'Jan–Aug 2025; Dec 2025–Feb 2026',
    title: 'Product Design Intern',
    company: 'SPUN Global',
    companyUrl: 'https://spun.global',
    points: [
      'Contributed to the website revamp, directly contributing to a 3x growth in Monthly Active Users (MAU) from xxK to xxxK.',
      'Redesigned and simplified the user login and checkout flows, resulting in a 40% increase in the platform’s conversion rate (CVR).',
      'Led the design of internal tools, leading to a 30% month-over-month (MoM) decrease in operational turnaround time (TAT).',
    ],
  },
  {
    logo: '/figma-assets/globaldeal-logo.png',
    logoHeight: 34,
    date: 'Jan–Aug 2025; Dec 2025–Feb 2026',
    title: 'Design Intern',
    company: 'GlobalDeal',
    companyUrl: 'https://globaldeal.io',
    points: [
      'Designed the complete user interface and user experience for the globalhack.co website.',
      'Developed the comprehensive brand guidelines and all promotional materials (social media, proposals, posters) for GlobalHack, GlobalDeal’s competition.',
    ],
  },
];

export default function Resume() {
  return (
    <section id="resume" className="mt-20">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="mono-font flex items-center gap-4 text-5xl">My footprint <Image src="/figma-assets/paw.svg" alt="" width={30} height={30} /></h2>
        <Link href="https://ristek.link/ResumeWida" target="_blank" rel="noreferrer" className="mono-font text-xl underline">Full resume →</Link>
      </div>
      <div className="resume-list flex flex-col gap-[3px]">
        {experiences.map((experience, index) => (
          <article key={experience.company} className={`resume-entry ${index === 0 ? 'resume-entry--first' : ''}`}>
            <div className="resume-meta flex flex-col gap-5">
              <div className="relative flex w-[180px] items-center" style={{ height: experience.logoHeight }}>
                {experience.company === 'SPUN Global' ? (
                  <Image src="/figma-assets/spun-logo.svg" alt="SPUN logo" width={180} height={55} className="w-full" />
                ) : experience.company === 'GlobalDeal' ? (
                  <Image src={experience.logo} alt="GlobalDeal logo" width={180} height={35} className="w-full object-contain object-left" />
                ) : (
                  <Image src={experience.logo} alt={`${experience.company} logo`} fill sizes="180px" className="object-contain object-left" />
                )}
              </div>
              <p className="mono-font text-2xl leading-none">{experience.date}</p>
            </div>
            <div className="resume-copy flex flex-col gap-6">
              <h3 className="mono-font text-[32px] leading-none">{experience.title}</h3>
              <a href={experience.companyUrl} target="_blank" rel="noreferrer" className="mono-font text-xl text-[#8f8f8f] underline">{experience.company}</a>
              <ul className="flex flex-col gap-6">
                {experience.points.map((point) => <li key={point} className="design-font grid grid-cols-[24px_1fr] gap-6 text-2xl leading-[1.2]"><span>—</span><span>{point}</span></li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <div id="education" className="resume-section mt-16">
        <h2 className="mono-font flex items-center gap-4 text-5xl">Where I Learn <Image src="/figma-assets/graduation.svg" alt="" width={30} height={30} /></h2>
        <div className="resume-entry resume-entry--education mt-8">
          <div className="resume-meta relative flex flex-col gap-5">
            <Image src="/figma-assets/raw-17.png" alt="" width={180} height={78} className="h-[78px] w-[180px] object-contain object-left" />
            <p className="mono-font text-2xl">Aug 2023 – Jan 2027 (exp)</p>
          </div>
          <div className="resume-copy flex flex-col gap-6"><h3 className="mono-font text-[32px] leading-none">Bachelor’s Degree in Computer Science</h3><p className="mono-font text-xl text-[#8f8f8f] underline">Universitas Indonesia</p><p className="design-font text-2xl leading-[1.2]"><strong>Relevant Coursework</strong>: Human-Computer Interaction, Software Engineering, Digital Product Management, Data Science &amp; AI, Database Systems, Analysis of Algorithms, Technopreneurship, Digital Product Marketing, Research Methodology and Scientific Writing</p></div>
        </div>
      </div>
    </section>
  );
}
