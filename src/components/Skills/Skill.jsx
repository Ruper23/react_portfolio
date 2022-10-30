import './Skill.scss'



const Skill = props => {
  let skillBarHeight = props.skillPercent + '%'

  return (
    <div className="skill">
      <img src={props.src} alt="icon" className="skill__img" />
      <div className="skill__bar" style={{ height: skillBarHeight }}></div>
    </div>
  )
}
export default Skill