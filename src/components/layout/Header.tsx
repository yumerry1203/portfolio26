import logoBlack from '@/assets/images/logo-black.svg'

const Header = () => {
  return (
    <>
      <header className="flex items-center gap-32 h-40">
        <img src={logoBlack} alt="" />
        <div className="flex-1 h-px bg-black"></div>
        <nav>
          <ul className="flex items-center gap-40 font-heading text-lg text-black">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#project-archive">Archive</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
};

export default Header;
