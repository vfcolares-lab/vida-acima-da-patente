import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ProblemBlock from '@/components/blocks/ProblemBlock';
import ScienceBlock from '@/components/blocks/ScienceBlock';
import TimelineBlock from '@/components/blocks/TimelineBlock';
import PLBlock from '@/components/blocks/PLBlock';
import SignatureBlock from '@/components/blocks/SignatureBlock';
import PressureBlock from '@/components/blocks/PressureBlock';
import NewsBlock from '@/components/blocks/NewsBlock';
import ShareBlock from '@/components/blocks/ShareBlock';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <ProblemBlock />
      <ScienceBlock />
      <TimelineBlock />
      <PLBlock />
      <SignatureBlock />
      <PressureBlock />
      <NewsBlock />
      <ShareBlock />
      <Footer />
    </main>
  );
}
