import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Principles from '@/components/sections/Principles';
import Stages from '@/components/sections/Stages';
import Portfolio from '@/components/sections/Portfolio';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Principles />
        <Stages />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
