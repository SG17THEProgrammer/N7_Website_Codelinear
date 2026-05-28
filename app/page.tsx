import {
  Articles,
  BlueBanner,
  CaseStudies,
  CoreBanking,
  CTAFooter,
  Efficiency,
  Header,
  Hero,
  Marquee,
  MobileBanking,
  Solutions
} from "@/components/sections/index";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Solutions />
      <CoreBanking />
      <Efficiency />
      <BlueBanner />
      <Marquee />
      <MobileBanking />
      <BlueBanner light />
      <Articles />
      <CaseStudies />
      <CTAFooter />
    </main>
  );
}
