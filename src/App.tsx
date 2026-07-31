import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CurrencyExchangeSection } from './components/CurrencyExchangeSection';
import { CardsShowcaseSection } from './components/CardsShowcaseSection';
import { LoanCalculatorSection } from './components/LoanCalculatorSection';
import { MobileAppSection } from './components/MobileAppSection';
import { InfoSection } from './components/InfoSection';
import { BackedBySection } from './components/BackedBySection';
import { UseCasesSection } from './components/UseCasesSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F1F0F3] text-[#002650] font-sans antialiased selection:bg-[#D72426] selection:text-white">
      {/* 1. Header & Hero Section */}
      <div className="min-h-screen flex flex-col bg-[#F1F0F3]">
        <Navbar />
        <HeroSection />
      </div>

      {/* 2. Live Bank Exchange Rates Section */}
      <CurrencyExchangeSection />

      {/* 3. Cards Showcase Section with Interactive 3D Horizontal Cylinder Carousel */}
      <CardsShowcaseSection />

      {/* 4. Instant Online Loan Calculator Section */}
      <LoanCalculatorSection />

      {/* 5. Asia Online Mobile Application Features Section */}
      <MobileAppSection />

      {/* 6. General Information & Bank Strengths Section */}
      <InfoSection />

      {/* 7. Institutional Partners & Ecosystem Backers Section */}
      <BackedBySection />

      {/* 8. Use Cases & High Yield Savings Section */}
      <UseCasesSection />

      {/* 9. Frequently Asked Questions (FAQ) Section */}
      <FaqSection />

      {/* 10. Comprehensive Bank Footer */}
      <Footer />
    </div>
  );
}
