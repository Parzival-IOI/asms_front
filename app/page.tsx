

import { Container } from "@/components/pub/Container";
import { Hero } from "@/components/pub/Hero";
import { SectionTitle } from "@/components/pub/SectionTitle";
import { Benefits } from "@/components/pub/Benefits";
import { Video } from "@/components/pub/Video";
import { Testimonials } from "@/components/pub/Testimonials";
import { Faq } from "@/components/pub/Faq";
import { Cta } from "@/components/pub/Cta";
import { Navbar } from "@/components/pub/Navbar";
import { Footer } from "@/components/pub/Footer";
import { PopupWidget }  from "@/components/pub/PopupWidget";

import { benefitOne, benefitTwo } from "@/components/pub/data";

export default function Home() {
  return (
    <div className="">
        <Navbar />
        <div>
          <Container>
            <Hero />
            <SectionTitle
              preTitle="Nextly Benefits"
              title=" Why should you use this landing page"
            >
              Nextly is a free landing page & marketing website template for startups
              and indie projects. Its built with Next.js & TailwindCSS. And its
              completely open-source.
            </SectionTitle>

            <Benefits data={benefitOne} />
            <Benefits imgPos="right" data={benefitTwo} />

            <SectionTitle
              preTitle="Watch a video"
              title="Learn how to fullfil your needs"
            >
              This section is to highlight a promo or demo video of your product.
              Analysts says a landing page with video has 3% more conversion rate. So,
              don&apos;t forget to add one. Just like this.
            </SectionTitle>

            <Video videoId="fZ0D0cnR88E" />

            <SectionTitle
              preTitle="Testimonials"
              title="Here's what our customers said"
            >
              Testimonials is a great way to increase the brand trust and awareness.
              Use this section to highlight your popular customers.
            </SectionTitle>

            <Testimonials />

            <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
              Answer your customers possible questions here, it will increase the
              conversion rate as well as support or chat requests.
            </SectionTitle>

            <Faq />
            <Cta />
          </Container>              
        </div>
        <Footer />
        <PopupWidget />
    </div>
    
  );
}
