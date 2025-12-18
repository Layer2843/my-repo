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
      <b>total exercises {course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises+course.parts[3].exercises}</b>
    </div>
  )
}

export default Course