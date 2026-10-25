import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import Resume from './components/Resume';

export default function Home() {
  return (
    <div id="top" className="portfolio-shell">
      <Header />
      <main className="portfolio-content">
        <Hero />
        <Works />
        <Resume />
      </main>
    </div>
  );
}
