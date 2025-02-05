import Header from './components/layout/Header';
import Hero from './components/hero/Hero';
import Innovation from './components/sections/Innovation';
import CustomerTransform from './components/sections/CustomerTransform';
import OperationalTransform from './components/sections/OperationalTransform';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Innovation />
      <CustomerTransform />
      <OperationalTransform />
    </main>
  );
}
