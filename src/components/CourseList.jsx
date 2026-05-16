import CourseCard from "./CourseCard.jsx";

const CourseList = ({ courses, favorites, onToggleFavorite, teachers, selectedTeacher, onTeacherChange }) => {
    return (
        <>
            <div className="filter-container">
                <label htmlFor="teacher-filter">Filtrar por docente:</label>
                <select
                    id="teacher-filter"
                    value={selectedTeacher}
                    onChange={(e) => onTeacherChange(e.target.value)}
                >
                    <option value="all">Todos los docentes</option>
                    {teachers.map((id) => (
                        <option key={id} value={id}>Docente {id}</option>
                    ))}
                </select>
            </div>

            {courses.length === 0 ? (
                <p className="message">No hay cursos disponibles</p>
            ) : (
                <section className="course-list">
                    {courses.map((course) => {
                        const isFavorite = favorites.some((fav) => fav.id === course.id);
                        return (
                            <CourseCard
                                key={course.id}
                                course={course}
                                isFavorite={isFavorite}
                                onToggleFavorite={onToggleFavorite}
                            />
                        );
                    })}
                </section>
            )}
        </>
    );
};

export default CourseList;