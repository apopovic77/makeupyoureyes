import { Hero } from "../components/Hero";
import { NFL } from "../components/NFL";
import { Marion } from "../components/Marion";
import { Catalogue } from "../components/Catalogue";
import { Testimonials } from "../components/Testimonials";
import { CV } from "../components/CV";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <div id="top">
      <Hero />
      <NFL />
      <Marion />
      <Catalogue />
      <Testimonials />
      <CV />
      <Contact />
    </div>
  );
}
