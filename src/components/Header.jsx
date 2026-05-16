const Header = ({ darkMode, onToggleDark }) => {
    return (
        <header className="header">
            <div className="header-content">
                <div>
                    <h1>Gestor de Cursos React</h1>
                    <p>SPA con API, LocalStorage, componentes y buenas prácticas de seguridad</p>
                </div>
                <button type="button" className="dark-toggle" onClick={onToggleDark}>
                    {darkMode ? "☀️ Modo claro" : "🌙 Modo oscuro"}
                </button>
            </div>
        </header>
    );
};

export default Header;