import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import Hero from "@/sections/hero";
import Languages from "@/sections/languages";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Languages />

      <Footer />
    </main>
  );
}