import { Instagram } from 'lucide-react';


const Footer = () => (
  <>
    <footer className='flex items-center justify-center h-14 bg-[#2B2B2B] text-white max-[768px]:flex-col'>
        <div className='flex items-center justify-center gap-5'>
            <p className='font-roboto font-light text-xs lg:text-sm'>©2024 Invitarte. Todos los derechos reservados</p>
            <a href='https://www.instagram.com/' target='blank' className='hover:scale-90 transiton-all duration-300'>
                <Instagram/>
            </a>
        </div>
    </footer>
  </>
);

export default Footer;