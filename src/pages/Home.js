import Navbar from './Navbar';
import Header from './Header';
import Hero from './Hero';
import Informasi from './Informasi';
import Contact from './Contact';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Header />
      <Hero />
      <Informasi />
      <Contact />
    </div>
  );
}

export default Home;
