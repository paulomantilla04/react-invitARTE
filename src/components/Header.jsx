import Logo from "../assets/logo.svg";
import { HomeIcon, BookOpenText, CircleHelp} from 'lucide-react';
import { Link } from "react-router-dom";


const Header = () => (
  <>
    <header className='h-16 flex flex-col justify-center border-white border-b-white sticky z-10 top-0 select-none backdrop-blur-md bg-[#F8E9D9]/50 transition-all duration-300'>
        <div className="mx-0 max-w-full px-4 md:px-6">
            <nav className="flex items-center justify-between flex-wrap text-[#A38F8B]">
                <div className="flex items-center">
                    <img src={Logo} className='w-32 lg:w-40 mt-3'/>
                </div>
                <div className="flex flex-row items-center gap-10 font-andika mt-3">
                    <Link to="/" href="" className='inline-flex font-bold'>
                        <span className='sm:mr-2 text-2xl'><HomeIcon/></span>                     
                        <span className='hidden sm:block'>INICIO</span>
                    </Link>
                    <Link to="catalogo" href="" className='inline-flex font-bold'>
                        <span className='sm:mr-2 text-2xl'><BookOpenText/></span>  
                        <span className='hidden sm:block'>CATALOGO</span>
                    </Link>
                    <Link to="faq" href="" className='inline-flex font-bold'>
                        <span className='sm:mr-2 text-2xl'><CircleHelp/></span>  
                        <span className='hidden sm:block'>FAQ</span>
                    </Link>
                </div>
            </nav>
        </div>
    </header>
  </>
);

export default Header;