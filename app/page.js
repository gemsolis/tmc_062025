"use client";
import { useState } from "react";
import Contacts from "@/components/sections/Homepage/Contacts";
import Hero from "@/components/sections/Homepage/Hero";
import Packages from "@/components/sections/Homepage/Packages";
import Services from "@/components/sections/Homepage/Services";
import Testimonials from "@/components/sections/Homepage/Testimonials";
import WhyChooseUs from "@/components/sections/Homepage/WhyChooseUs";
import FormModal from "@/components/modals/FormModal";

export default function Home() {
  const [inquireOpen, setInquireOpen] = useState(false);

  return (
    <div>
      <Hero inquireOpen={inquireOpen} setInquireOpen={setInquireOpen} />
      <WhyChooseUs inquireOpen={inquireOpen} setInquireOpen={setInquireOpen} />
      <Services inquireOpen={inquireOpen} setInquireOpen={setInquireOpen} />
      <Testimonials inquireOpen={inquireOpen} setInquireOpen={setInquireOpen} />
      <Contacts inquireOpen={inquireOpen} setInquireOpen={setInquireOpen} />
      <FormModal inquireOpen={inquireOpen} setInquireOpen={setInquireOpen} />
    </div>
  );
}
