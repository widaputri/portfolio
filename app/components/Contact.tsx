import { GithubIcon, LinkedInIcon, MailIcon, MediumIcon } from './svg-assets';

const socials = [
  ['Email', 'mailto:widapk2709@gmail.com', MailIcon],
  ['LinkedIn', 'https://linkedin.com/in/widaputri', LinkedInIcon],
  ['GitHub', 'https://github.com/widaputri', GithubIcon],
  ['Medium', 'https://medium.com/@widaputri', MediumIcon],
] as const;

export default function Contact() {
  return (
    <footer id="contact" className="mt-20 border-t border-[#363636] pt-10">
      <h2 className="mono-font text-4xl">Say hi 👋</h2>
      <p className="design-font mt-5 max-w-2xl text-xl leading-[1.2] text-[#8f8f8f]">Interested in collaborating, learning more about a project, or just saying hello? Find me here.</p>
      <div className="mt-10 grid grid-cols-2 gap-4 max-[520px]:grid-cols-1">
        {socials.map(([label, href, Icon]) => (
          <a key={label} href={href} target={label === 'Email' ? undefined : '_blank'} rel="noreferrer" className="flex items-center gap-3 border border-[#363636] p-4 transition-colors hover:bg-[#363636] hover:text-white">
            <span className="h-5 w-5"><Icon /></span><span className="mono-font text-xl">{label}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}
