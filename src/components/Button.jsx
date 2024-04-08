import { ChevronRight } from 'lucide-react';

const Button = ({href, text, target}) => (
    <a href={href} target={target} className='rounded-full relative w-36 h-10 mt-3 cursor-pointer flex items-center border border-[#2B2B2B] bg-[#2B2B2B] group hover:bg-[#2B2B2B] active:bg-[#2B2B2B] active:border-[#2B2B2B]'>
        <span className='text-white font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300'>{text}</span>
        <span className='absolute right-0 h-full w-10 rounded-full bg-[#2B2B2B] flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300'>
            <ChevronRight size={24} color='#fff'/>
        </span>
    </a>
);

export default Button;