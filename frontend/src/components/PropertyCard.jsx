import { Link } from "react-router-dom";

const PropertyCard = ({ property, onFavorite, isFavorite }) => {
  
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={property?.images[0]} alt="Property" className="h-48 w-full object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{property.title}</h2>
      <p className="text-sm">{property.location}</p>
      <p className="text-blue-600 font-bold mt-1">₹{property.price.toLocaleString()}</p>
      <div className="flex justify-between mt-2">
        <Link to={`/property/${property.id}`}>
          <button className="bg-blue-600 text-white px-3 py-1 rounded">View Details</button>
        </Link>
        <button onClick={() => onFavorite(property)} className="text-red-500 text-xl">
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
