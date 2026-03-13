import { Hero } from "@/components/sections/Hero";
import { StudioIntro } from "@/components/sections/StudioIntro";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StudioIntro />
      <FeaturedProjects />
      <ServicesOverview />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
