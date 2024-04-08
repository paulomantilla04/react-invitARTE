import { ChevronRight } from 'lucide-react';

const Button = ({ href, text, target, disabled }) => (
    <a
        href={href}
        target={target}
        className={`rounded-full relative w-36 h-10 mt-3 cursor-pointer flex items-center border ${
            disabled
                ? 'border-[#B2B2B2] bg-[#B2B2B2] text-gray-500 pointer-events-none'
                : 'border-[#2B2B2B] bg-[#2B2B2B] text-white'
        } group hover:bg-[#2B2B2B] active:bg-[#2B2B2B] active:border-[#2B2B2B]`}
    >
        <span className={`font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300 ${
            disabled ? 'text-gray-500' : 'text-white'
        }`}>
            {text}
        </span>
        <span
            className={`absolute right-0 h-full w-10 rounded-full ${
                disabled ? 'bg-[#B2B2B2]' : 'bg-[#2B2B2B]'
            } flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300`}
        >
            <ChevronRight size={24} color={disabled ? '#7F7F7F' : '#fff'} /> {/* Cambia el color aquí */}
        </span>
    </a>
);

export default Button;