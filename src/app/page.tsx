import { Hero } from "@/components/sections/Hero";
import { Differentials } from "@/components/sections/Differentials";
import { Products } from "@/components/sections/Products";
import { Process } from "@/components/sections/Process";
import { Structure } from "@/components/sections/Structure";
import { Regions } from "@/components/sections/Regions";
import { Numbers } from "@/components/sections/Numbers";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Differentials />
      <Products />
      <Process />
      <Structure />
      <Regions />
      <Numbers />
      <FAQ />
      <CTA />
    </>
  );
}
