// AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PropertyDetails from '../pages/PropertyDetails';
import Favorites from '../pages/Favorites';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}
