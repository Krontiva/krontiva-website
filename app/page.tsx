import Header from './components/layout/Header';
import Innovation from './components/sections/Innovation';
import LatestNews from './components/sections/LatestNews';
import MainHero from './components/hero/MainHero';
import Services from './components/sections/Services';
import Stats from './components/sections/Stats';

export default function Home() {
  return (
    <main>
      <Header />
      <MainHero />
      <Innovation />
      <Services />
      <Stats />
      <LatestNews />
    </main>
  );
}
