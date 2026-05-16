import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CourseList from "./components/CourseList";
import { getCourses } from "./services/courseService";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [selectedTeacher, setSelectedTeacher] = useState("all");
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useLocalStorage("favoriteCourses", []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  const loadCourses = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getCourses();
      setCourses(data);
    } catch (error) {
      setError(error.message || "Ocurrió un error inesperado.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

const filteredCourses = useMemo(() => {
  const normalizedSearch = searchTerm.toLowerCase().trim();
  return courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(normalizedSearch);
    const matchesTeacher = selectedTeacher === "all" || course.teacherId === Number(selectedTeacher);
    return matchesSearch && matchesTeacher;
  });
}, [courses, searchTerm, selectedTeacher]);

const teachers = useMemo(() => {
  const ids = [...new Set(courses.map((c) => c.teacherId))];
  return ids.sort((a, b) => a - b);
}, [courses]);

const handleToggleFavorite = (course) => {
    const exists = favorites.some((fav) => fav.id === course.id);
    if (exists) {
      setFavorites(favorites.filter((fav) => fav.id !== course.id));
      return;
    }
    setFavorites([...favorites, course]);
};


  return (
    <main className={darkMode ? "app dark" : "app"}>
      <Header darkMode={darkMode} onToggleDark={() => setDarkMode(!darkMode)} />
      <section className="summary">
        <p>Total de cursos: {courses.length}</p>
        <p>Favoritos: {favorites.length}</p>
      </section>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      {loading && <p className="message">Cargando cursos...</p>}
      {error && (
        <div className="error">
          <p>{error}</p>
          <button type="button" onClick={loadCourses}>
            Reintentar
          </button>
        </div>
      )}
      {!loading && !error && (
        <CourseList
          courses={filteredCourses}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          teachers={teachers}
          selectedTeacher={selectedTeacher}
          onTeacherChange={setSelectedTeacher}
/>
      )}
      
    </main>
  );
}

export default App;