import logo from '../assets/logo.svg';
import menu from '../assets/logo.svg';

const Navbar = () => {
    return (
        <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <a className="flex items-center gap-2" href="/">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-11 h-11 object-contain"
                    />
                    <p className="text-white text-[18px] font-bold cursor-pointer flex">
                        Harvish Jariwala &nbsp;
                        <span className="sm:block hidden">
                            {' '}
                            | Software Engineer
                        </span>
                    </p>
                </a>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
                        <a href="#about">About</a>
                    </li>
                    <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
                        <a href="#work">Work</a>
                    </li>
                    <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain"
                    />
                    <div className="hidden p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl">
                        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                            <li className="font-poppins font-medium cursor-pointer text-[16px] text-secondary">
                                <a href="#about">About</a>
                            </li>
                            <li className="font-poppins font-medium cursor-pointer text-[16px] text-secondary">
                                <a href="#work">Work</a>
                            </li>
                            <li className="font-poppins font-medium cursor-pointer text-[16px] text-secondary">
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
