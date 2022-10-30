import './CourseModal.scss'
import React from 'react'
const CourseModal = ({ active, setActive, children }) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={() => setActive(false)}>
        {children}
      </div>
    </div>
  )
}
export default CourseModal