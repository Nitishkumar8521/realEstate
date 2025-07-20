const FilterBar = ({ filters, setFilters }) => {
  return (
    <div className="flex flex-wrap gap-4 my-4">
      <input
        type="number"
        placeholder="Min Budget"
        className="border p-2 rounded"
        value={filters.minPrice}
        onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
      />
      <input
        type="number"
        placeholder="Max Budget"
        className="border p-2 rounded"
        value={filters.maxPrice}
        onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
      />
      <select
        className="border p-2 rounded"
        value={filters.type}
        onChange={(e) => setFilters({ ...filters, type: e.target.value })}
      >
        <option value="">All Types</option>
        <option value="Apartment">Apartment</option>
        <option value="Villa">Villa</option>
      </select>
      <select
        className="border p-2 rounded"
        value={filters.bhk}
        onChange={(e) => setFilters({ ...filters, bhk: e.target.value })}
      >
        <option value="">All BHK</option>
        <option value="1BHK">1BHK</option>
        <option value="2BHK">2BHK</option>
        <option value="3BHK">3BHK</option>
      </select>
    </div>
  );
};

export default FilterBar;
