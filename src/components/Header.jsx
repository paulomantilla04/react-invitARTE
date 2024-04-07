import Logo from "../assets/logo.svg";
import { BookOpenText, CircleHelp} from 'lucide-react';
import { Link } from "react-router-dom";


const Header = () => (
  <>
    <header className='h-full flex flex-col justify-center sticky z-10 top-0  select-none backdrop-blur-2xl transition-all duration-300'>
        <div className="mx-0 max-w-full px-4 md:px-6">
            <nav className="flex items-center justify-between flex-wrap text-[#2B2B2B]">
                <Link to="/" className="flex items-center">
                    <img src={Logo} className='w-32 lg:w-36'/>
                </Link>
                <div className="flex flex-row items-center gap-10 font-roboto font-light">
                    <Link to="catalogo" href="" className='inline-flex font-bold hover:scale-90 hover:text-lighter transition-all duration-300'>
                        <span className='sm:mr-2 text-2xl lg:hidden'><BookOpenText/></span>  
                        <span className='hidden sm:block'>Catálogo</span>
                    </Link>
                    <Link to="faq" href="" className='inline-flex font-bold hover:scale-90 hover:text-lighter transition-all duration-300'>
                        <span className='sm:mr-2 text-2xl lg:hidden'><CircleHelp/></span>  
                        <span className='hidden sm:block'>FAQ</span>
                    </Link>
                </div>
            </nav>
        </div>
    </header>
  </>
);

export default Header;