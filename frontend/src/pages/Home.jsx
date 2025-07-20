import { useState, useEffect } from "react";
import data from "../data/properties.json";
import PropertyCard from "../components/PropertyCard";
import FilterBar from "../components/FilterBar";

const Home = () => {
  // Store favorite properties from localStorage (if available)
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Store filter values (like budget, type, BHK)
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    type: "",
    bhk: "",
  });

  // Save updated favorites in localStorage every time it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Add or remove a property from favorites list
  const handleFavorite = (property) => {
    const isAlreadyFavorite = favorites.some((p) => p.id === property.id);

    if (isAlreadyFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter((p) => p.id !== property.id);
      setFavorites(updatedFavorites);
    } else {
      // Add to favorites
      setFavorites([...favorites, property]);
    }
  };

  // Filter properties based on selected filter values
  const filteredProperties = data.filter((property) => {
    const matchesMinPrice = filters.minPrice
      ? Number(filters.minPrice) <= property.price
      : true;

    const matchesMaxPrice = filters.maxPrice
      ? Number(filters.maxPrice) >= property.price
      : true;

    const matchesType = filters.type
      ? filters.type === property.type
      : true;

    const matchesBHK = filters.bhk
      ? filters.bhk === property.bhk
      : true;

    return matchesMinPrice && matchesMaxPrice && matchesType && matchesBHK;
  });

  // Render the filtered list of properties
  return (
    <div className="p-4">
      {/* Filter section to select price, type, BHK */}
      <FilterBar filters={filters} setFilters={setFilters} />

      {/* Show all property cards in a grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            isFavorite={favorites.some((p) => p.id === property.id)}
            onFavorite={handleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
