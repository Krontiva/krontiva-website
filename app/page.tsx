import Header from './components/layout/Header';
import Hero from './components/hero/Hero';
import Innovation from './components/sections/Innovation';
import CustomerTransform from './components/sections/CustomerTransform';
import OperationalTransform from './components/sections/OperationalTransform';
import FinancialTransform from './components/sections/FinancialTransform';
import WorkforceTransform from './components/sections/WorkforceTransform';
import LatestNews from './components/sections/LatestNews';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Innovation />
      <CustomerTransform />
      <OperationalTransform />
      <FinancialTransform />
      <WorkforceTransform />
      <LatestNews />
    </main>
  );
}
