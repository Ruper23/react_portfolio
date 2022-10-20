import './Skills.scss'
import Skill from './Skill'

const Skills = () => {
  const skills = [
    { key: 1, name: 'HTML', src: 'img/skills/html.png', skillPercent: 85 },
    { key: 2, name: 'CSS', src: 'img/skills/css.png', skillPercent: 85 },
    { key: 3, name: 'JS', src: 'img/skills/js.png', skillPercent: 50 },
    { key: 4, name: 'SASS', src: 'img/skills/sass.png', skillPercent: 70 },
    { key: 5, name: 'FIGMA', src: 'img/skills/figma.png', skillPercent: 85 },
    { key: 6, name: 'PS', src: 'img/skills/photoshop.png', skillPercent: 40 },
    { key: 7, name: 'BEM', src: 'img/skills/bem.png', skillPercent: 80 },
    { key: 8, name: 'GIT', src: 'img/skills/git.png', skillPercent: 50 },
  ]

  return (
    <section className="skills">
      <div className="wrapper">
        <div className="skills-title slide-title">Навыки</div>
        <div className="skills-wrap">
          {skills.map(skill => {
            return <Skill
              key={skill.key}
              src={skill.src}
              skillPercent={skill.skillPercent}
            />
          })}
        </div>
      </div >
    </section >

  )
}
export default Skills