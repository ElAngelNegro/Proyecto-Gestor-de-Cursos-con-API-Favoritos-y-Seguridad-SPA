const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="search-container">
            <label htmlFor="search">Buscar curso:</label>
            <input
                id="search"
                type="text"
                value={searchTerm}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="Ejemplo: Programación, seguridad, React..."
                maxLength="50"
            />
        </div>
    );
};

export default SearchBar;