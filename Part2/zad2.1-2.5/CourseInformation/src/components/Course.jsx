const Course = ({ course }) => {

  const total = course.parts.reduce((s, p) => {
    return s + p.exercises
  }, 0)

  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map(content =>
        <p key={content.id}>
          {content.name} {content.exercises}
        </p>
      )}
      <b>total exercises {total}</b>
    </div>
  )
}

export default Course
