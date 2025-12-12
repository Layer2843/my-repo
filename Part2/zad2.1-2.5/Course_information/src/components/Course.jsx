const Course = ({course}) =>
{
  return(
    <div>
      <h1>{course.name}</h1>
      {course.parts.map(content =>
        <p key={content.id}>
          {content.name} {content.exercises}
        </p>
      )}
    </div>
  )
}

export default Course