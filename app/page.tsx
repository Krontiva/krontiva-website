import Header from './components/layout/Header';
import Hero from './components/hero/Hero';
import Innovation from './components/sections/Innovation';
import TransformationServices from './components/sections/TransformationServices';
import LatestNews from './components/sections/LatestNews';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Innovation />
      <TransformationServices />
      <LatestNews />
    </main>
  );
}
