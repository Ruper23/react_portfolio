import './Courses.scss'
import '../AboutMe/AboutMe.scss'
import Course from './Course'

const Courses = () => {
  const courses = [
    { key: 0, img: 'img/courses/geek.png', title: 'Geekbrains HTML&CSS' },
    { key: 1, img: 'img/courses/wayup-js.png', title: 'WayUp : Javascript' },
    { key: 2, img: 'img/courses/wayup-figma.png', title: 'WayUp : Disigne in Figma' },
    { key: 3, img: 'img/courses/rs.school.png', title: 'Rolling Scopes School Pre-Shool' },
  ]
  return (
    <section className="courses">
      <div className="content">
        <h3 className="courses__title slide-title">Курсы</h3>
        <div className="course__wrap">
          {courses.map(course => {
            return <Course
              key={course.key}
              img={course.img}
              title={course.title} />
          })}

        </div>
        <h3 className="courses__title slide-title">Английский</h3>
        <p className="english p-text">Pre-Intermediate (CEFR A2+).</p>
      </div>
    </section>
  )
}
export default Courses