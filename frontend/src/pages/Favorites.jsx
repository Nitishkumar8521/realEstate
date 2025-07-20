import { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";

const Favorites = () => {
  console.log(localStorage.getItem('favorites'))
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const removeFavorite = (property) => {
    setFavorites(favorites.filter((p) => p.id !== property.id));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">♥ Your Favorite Properties</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {favorites.length ? (
          favorites.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              isFavorite={true}
              onFavorite={removeFavorite}
            />
          ))
        ) : (
          <p>No favorites yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
