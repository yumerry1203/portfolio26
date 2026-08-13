import DotLabel from "@/components/common/DotLabel";
import phoneIcon from "@/assets/images/ico-phone.svg";
import mailIcon from "@/assets/images/ico-mail.svg";

interface ContactInfoProps {
  icon: string;
  label: string;
  value: string;
  href: string;
}

const ContactInfo = ({ icon, label, value, href }: ContactInfoProps) => (
  <a
    href={href}
    className="group block w-fit transition-transform duration-200 hover:translate-x-4"
  >
    <div className="flex items-center gap-8 text-sm tracking-[0.08em] text-white/55">
      <img src={icon} alt="" className="h-16 w-16 opacity-70" />
      <span>{label}</span>
    </div>
    <p className="mt-4 text-base font-bold tracking-[0.03em] text-white transition-colors group-hover:text-primary">
      {value}
    </p>
  </a>
);

const ContactFooter = () => (
  <footer className="bg-black text-white">
    <div className="content-container relative min-h-500 px-20 pb-70 pt-90 sm:px-30">
      <address className="not-italic">
        <div className="flex items-center gap-8 font-heading text-base text-accent">
          <DotLabel variant="red" />
          <span>Contact</span>
        </div>

        <div className="mt-28 space-y-22">
          <ContactInfo
            icon={phoneIcon}
            label="PHONE"
            value="+82 10.6341.3324"
            href="tel:+821063413324"
          />
          <ContactInfo
            icon={mailIcon}
            label="EMAIL"
            value="moa3627@naver.com"
            href="mailto:moa3627@naver.com"
          />
        </div>
      </address>

      <nav className="absolute right-20 top-90 text-right sm:right-30" aria-label="Footer navigation">
        <p className="font-heading text-lg text-primary">MENU</p>
        <ul className="mt-16 space-y-8 text-lg leading-none text-white/55">
          <li><a className="transition-colors hover:text-white" href="#home">Intro</a></li>
          <li><a className="transition-colors hover:text-white" href="#about">Profile</a></li>
          <li><a className="transition-colors hover:text-white" href="#projects">Project</a></li>
          <li><a className="transition-colors hover:text-white" href="#skills">Skills</a></li>
          <li><a className="transition-colors hover:text-white" href="#contact">Contact</a></li>
        </ul>
      </nav>

      <p className="absolute bottom-20 left-1/2 -translate-x-1/2 text-xs text-white/45">
        © Copyright 2026. NAYUHYEONG All rights reserved.
      </p>
    </div>
  </footer>
);

export default ContactFooter;
