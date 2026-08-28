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
              <a className="relative block py-4 transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-none after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100" href="#home">Home</a>
            </li>
            <li>
              <a className="relative block py-4 transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-none after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100" href="#about">About Me</a>
            </li>
            <li>
              <a className="relative block py-4 transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-none after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100" href="#projects">Projects</a>
            </li>
            <li>
              <a className="relative block py-4 transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-none after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100" href="#skills">Skills</a>
            </li>
            <li>
              <a className="relative block py-4 transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-none after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100" href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
};

export default Header;
