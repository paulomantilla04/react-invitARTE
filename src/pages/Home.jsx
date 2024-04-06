import mockup from '../assets/mockup.svg';


const Home = () => (
  <>
    <main>
        <section className='h-screen flex max-[768px]:flex-col items-center justify-center mt-10 gap-20 mb-32 bg-gradient-to-t from-homeSection'>
                <div className="flex flex-col items-center justify-center">
                    <h1 className='text-3xl lg:text-7xl font-ibm text-[#D9F8F7] min-w-max'>Invitaciones</h1>
                    <h1 className='text-3xl lg:text-7xl font-inter text-[#D9F8F7] min-w-max'>DIGITALES</h1>
                </div>
                <img src={mockup} className='w-4/12'></img>
        </section>       
    </main>
  </>
);

export default Home;