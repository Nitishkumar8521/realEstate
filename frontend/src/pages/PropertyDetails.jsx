import { useParams } from "react-router-dom";
import { useState } from "react";
import data from "../data/properties.json";
import Carousel from "../components/Carousel";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import EnquiryModal from '../components/EnquiryModal'

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const PropertyDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();
  const property = data.find((p) => p.id === parseInt(id));

  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  const isFavorite = favorites.some((p) => p.id === property?.id);

  const handleFavorite = () => {
    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = favorites.filter((p) => p.id !== property.id);
    } else {
      updatedFavorites = [...favorites, property];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (!property) {
    return <p className="text-center p-4">Property not found.</p>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Carousel */}
      {property.images && property.images.length > 0 && (
        <Carousel images={property.images} />
      )}

      {/* Title and Favorite */}
      <div className="flex justify-between items-center mt-4">
        <h1 className="text-2xl font-bold">{property.title}</h1>
        <button onClick={handleFavorite} className="text-red-500 text-2xl">
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <p className="text-gray-600">{property.location}</p>
      <p className="text-blue-600 font-semibold mt-2 text-lg">
        ₹{property.price.toLocaleString()}
      </p>

      <p className="mt-2">{property.description}</p>
      <p className="mt-2">BHK: {property.bhk}</p>
      <p className="mt-2">Area: {property.area}</p>
      <p className="mt-2">Type: {property.type}</p>

      {/* Amenities */}
      <div className="mt-4">
        <h3 className="font-semibold">Amenities:</h3>
        <ul className="list-disc ml-6">
          {property.amenities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Map */}
      {property.lat && property.lng && (
        <MapContainer
          center={[property.lat, property.lng]}
          zoom={13}
          scrollWheelZoom={false}
          className="h-64 w-full rounded mt-6"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          />
          <Marker position={[property.lat, property.lng]}>
            <Popup>{property.title}</Popup>
          </Marker>
        </MapContainer>
      )}

      {/* Enquiry Button */}
      <button
        onClick={() => setShowForm(true)}
        className="bg-green-600 text-white mt-4 px-4 py-2 rounded"
      >
        📨 Enquire
      </button>
      <EnquiryModal isOpen={showForm} onClose={() => setShowForm(false)} />
    </div>
  );
};

export default PropertyDetails;
