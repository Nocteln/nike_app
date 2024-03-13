import { useState } from "react";
import Nav from "./Components/Nav";
import {
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Suscribe,
  Footer,
  Hero,
} from "./sections";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className="relative dark:bg-slate-900">
      <Nav darkMode={darkMode} onDarkMode={setDarkMode} />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts darkMode={darkMode} />
      </section>
      <section className="padding">
        <SuperQuality darkMode={darkMode} />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer darkMode={darkMode} />
      </section>
      <section className="bg-pale-blue padding dark:bg-slate-800">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Suscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
