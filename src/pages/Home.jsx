import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import FeatureCard from "../components/FeatureCard";
import CTA from "../components/CTA";
import SearchBar from "../components/SearchBar";
import FeaturedProperties from "../components/FeaturedProperties";

const Home = () => {
  return (
    <>
      <Hero />
      

      <section className="max-w-7xl mx-auto py-20 px-6">

        <SectionTitle
          title="Why Choose Habitect?"
          subtitle="Helping people find, book and manage properties with confidence."
        />

        <div className="grid md:grid-cols-4 gap-6">

          <FeatureCard title="Properties" value="1200+" />

          <FeatureCard title="Happy Clients" value="850+" />

          <FeatureCard title="Locations" value="120+" />

          <FeatureCard title="Reviews" value="4.9/5" />


        </div>

      </section>
      <SearchBar />
      <FeaturedProperties />

      <CTA />
    </>
  );
};

export default Home;