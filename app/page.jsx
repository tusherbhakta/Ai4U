import { Button } from "@/components/ui/button";
import Faq from "@/components/ui/faq";
import Feature from "@/components/ui/feature";
import HeroSection from "@/components/ui/hero";
import HowItWorks from "@/components/ui/howItWorks";
import Ready from "@/components/ui/ready";
import Stat from "@/components/ui/stat";
import Testimonial from "@/components/ui/testimonial";

import { Divide } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="grid-background">
      </div>
      <HeroSection></HeroSection>
      <Feature></Feature>
      <Stat></Stat>
      <HowItWorks></HowItWorks>
      <Testimonial></Testimonial>
      <Faq></Faq>
      <Ready></Ready>
    </div>
    
  );
}
