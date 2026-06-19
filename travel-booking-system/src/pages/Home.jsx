import HeroSection from "../components/HeroSection";
import DashboardStats from "../components/DashboardStats";
import DestinationCard from "../components/DestinationCard";
import destinations from "../data/destinations";

export default function Home() {
  return (
    <div className="home-page">

      <HeroSection />

      <DashboardStats />

      <section className="popular-section">

        <h2>
          Popular Tour Packages
        </h2>

        <div className="card-grid">
          {destinations.map((place) => (
            <DestinationCard
                key={place.id}
                id={place.id}
                title={place.name}
                image={place.image}
                price={place.price}
                rating={place.rating}
            />
          ))}
        </div>

      </section>

    </div>
  );
}