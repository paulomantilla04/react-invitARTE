import marmol from '../assets/mock-a.svg';
import floral from '../assets/mock-b.svg';
import classic from '../assets/mock-c.svg';

import Card from '../components/Card';

const Catalogo = () => (
  <>
      <section className='flex flex-col items-center justify-center mt-10 gap-20 mb-32' id='catalogo'>
        <div className="flex flex-col items-center justify-center text-[#2B2B2B]">
          <h1 className='text-4xl lg:text-5xl font-inter font-black text-center'>MODELOS</h1>
          <p className='font-inter font-semibold mt-3 px-8 text-xs w-72 lg:w-full lg:text-lg text-center'>PRÓXIMAMENTE</p>
          <p className='font-inter font-light mt-3 px-8 text-xs w-72 lg:w-full lg:text-sm text-center lg:text-justify'>Echa un vistazo a nuestra variedad de estilos de invitaciones para encontrar la perfecta. ¡Personaliza y celebra con elegancia!</p>
        </div>

        <div className="flex items-center justify-center gap-10 max-[768px]:flex-col">
            <Card image={marmol} text={"Mármol"} to={"https://www.google.com/"}/>
            <Card image={floral} text={"Floral"} to={"https://www.google.com/"}/>
            <Card image={classic} text={"Clásico"} to={"https://www.google.com/"}/>
        </div>
      </section>
  </>
);

export default Catalogo;