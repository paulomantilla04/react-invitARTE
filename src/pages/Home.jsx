
import Button from '../components/Button';
import img from '../assets/img.png';


const Home = () => (
  <>
      <section className='flex max-[768px]:flex-col items-center justify-center mt-10 gap-20 mb-32' id='home'>
        <div className="flex flex-col items-center justify-center text-[#2B2B2B]">
          <h1 className='text-5xl lg:text-6xl font-inter font-thin'>Invitaciones</h1>
          <h1 className='text-5xl lg:text-6xl font-inter font-black'>DIGITALES</h1>
          <p className='w-96 font-inter font-light mt-3 px-8 text-xs lg:text-sm text-center lg:text-justify'>Bienvenido a InvitARTE, tu destino para crear y enviar invitaciones digitales únicas y personalizadas para cualquier ocasión. Cualquier tipo de evento familiar, te ofrecemos una amplia variedad de diseños  y herramientas de personalización para que tus invitaciones sean verdaderamente memorables.</p>
          <Button href="#catalogo" text="Explorar" disabled={false}/>
        </div>
        <img src={img} className='w-[70%] lg:w-[30%] rounded-lg'></img>

      </section>     
  </>
);

export default Home;