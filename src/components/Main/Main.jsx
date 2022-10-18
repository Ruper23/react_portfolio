import './Main.scss'
import React from 'react'

const Main = (props) => {
  let showContentSection = props.section

  const setNewSection = () => {
    showContentSection = props.section
  }
  setNewSection(showContentSection)

  return (
    <main className="main">
      <div className="main-wrap">
        {props.content[showContentSection].section}
      </div>
    </main>
  )
}
export default Main