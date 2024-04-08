import Home from './Home';
import Catalogo from './Catalogo';
import Preguntas from './Preguntas';
import Footer from '../components/Footer';

const Page = () => (
  <>
    <main>
        <Home />
        <Catalogo />
        <Preguntas />
        <Footer/>
    </main>
  </>
);

export default Page;