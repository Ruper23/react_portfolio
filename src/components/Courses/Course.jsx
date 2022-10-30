import './Course.scss'
import React, { useState } from 'react'
import CourseModal from './CourseModal'
const Course = (props) => {
  const [modalActive, setModalActive] = useState(false)
  return (

    <div className="course">
      <img className="course__img" src={props.img} alt={props.title} onClick={() => setModalActive(true)} />
      <div className="course__title">{props.title}</div>
      <CourseModal
        active={modalActive}
        setActive={setModalActive} >
        <img className="course__img-modal" src={props.img} alt={props.title} onClick={() => setModalActive(true)} />
      </CourseModal>
    </div>

  )
}
export default Course