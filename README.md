# 🏠 Real Estate Property Listing UI
A responsive real estate frontend application built with React.js, styled using Tailwind CSS, and features filtering, detailed property views, favorites, and more.

# 🚀 Features
- 🏡 Property Listings (grid of 15+ properties)
- 🔍 Filtering by:
  - Budget Range (Min–Max)
  - Property Type (Apartment, Villa, Plot, etc.)
  - Bedrooms (1BHK, 2BHK, etc.)
- 📄 Property Details Page with:
  - Image carousel
  - Google Map/Leaflet map
  - Description, area, amenities, price
  - Enquiry popup form
- Favorites System
  - Click ♥ to add/remove from favorites
  - Favorites persist via localStorage
  - Context API used for global state
- 📱 Fully Responsive for mobile and desktop
- 🔀 Routing with React Router

# 📁 Folder Structure
```bash
|-- frontend
|     |-- public
|     |     |-- assets   # Images used in properties
|     |-- src             
|     |     ├── components/          # Reusable components (Header, Card, Modal, etc.)
|     |     |           |-- Carousel.jsx
│     |     |           ├── Header.jsx
|     |     |           |-- PropertyCard.jsx
│     |     |           ├── EnquiryModal.jsx
|     |     |           |-- FilterBar.jsx
|     |     |     
├     |     |── data/                # Static property data
│     |     |     └── properties.json
|     |     ├── pages/               # Route pages
│     |     |      ├── Home.jsx
│     |     |      ├── Favorites.jsx
|     |     |      |-- PropertyDetatils.jsx
│     |     |-- routes
|     |     |      |-- AppRoutes.jsx          # Routing setup
```
# 🧑‍💻 Tech Stack
| Technology   | Use                     |
|--------------|-------------------------|
| React.js     | Core frontend framework |
| Tailwind CSS | UI Styling              |
| React Router | Page navigation         |
| Leaflet.js   | Location map            |     
| LocalStorage | Persist favorites       |
# 📦 Installation & Setup
  1. Clone the repo:
```bash
git clone https://github.com/Nitishkumar8521/realEstate.git
cd frontend
```
 2. Install dependencies:
```bash
npm install
```
 3. Run the app:
```bash
npm run dev
```
 4. Open ```http://localhost:5173 ``` in your browser.
# 📷 UI Screenshots (Optional)
- 🏠 Homepage with grid
  
   ![App Screenshot](https://github.com/Nitishkumar8521/realEstate/blob/main/frontend/public/home.jpg?raw=true)
  
- 📄 Property Details with map
  
   ![App Screenshot](https://github.com/Nitishkumar8521/realEstate/blob/main/frontend/public/property%20detail%20with%20map.jpg?raw=true)
  
- ❤️ Favorites page
  
   ![App Screenshot](https://github.com/Nitishkumar8521/realEstate/blob/main/frontend/public/favorites%20page.jpg?raw=true)
  
- 📱 Responsive mobile UI
  
   ![App Screenshot](https://github.com/Nitishkumar8521/realEstate/blob/main/frontend/public/mobile%20ui.jpg?raw=true)

# 🌐Deployment

You can access the live project here:

[🔗Frontend Live](https://real-estate-frontend-ebon.vercel.app/)

# 👨‍💻 Author
  Made with ❤️ by Nitish Kumar Singh
