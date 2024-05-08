import marmol from '../assets/mock-a.svg';
import floral from '../assets/mock-b.svg';
import classic from '../assets/mock-c.svg';
import classicb from '../assets/mock-d.svg';
import xv from '../assets/mock-e.svg';

import Card from '../components/Card';

const Catalogo = () => (
  <>
      <section className='flex flex-col items-center justify-center mt-10 gap-20 mb-32' id='catalogo'>
        <div className="flex flex-col items-center justify-center text-[#2B2B2B]">
          <h1 className='text-4xl lg:text-5xl font-inter font-black text-center'>MODELOS</h1>
          <p className='font-inter font-light mt-3 px-8 text-xs w-72 lg:w-full lg:text-sm text-center lg:text-justify'>Echa un vistazo a nuestra variedad de estilos de invitaciones para encontrar la perfecta. ¡Personaliza y celebra con elegancia!</p>
        </div>

        <div className="grid grid-cols-3 gap-10 max-[768px]:grid-cols-1">
            <Card disabled={false} image={marmol} text={"Mármol"} to={"https://invit-arte-marmol.vercel.app/paulo+mantilla"}/>
            <Card disabled={true} image={floral} text={"Floral"} to={"https://invit-arte-floral.vercel.app/paulo+mantilla"}/>
            <Card disabled={true} image={classic} text={"Clásico"} to={"https://invit-arte-clasico.vercel.app/paulo+mantilla"}/>
            <Card image={classicb} text={"Boda"} to={"https://invit-arte-clasico-b.vercel.app/fernando+miranda"}/>
            <Card image={xv} text={"XV Años"} to={"https://invit-arte-serena.vercel.app/alfredo+cerqueda"}/>
        </div>
      </section>
  </>
);

export default Catalogo;