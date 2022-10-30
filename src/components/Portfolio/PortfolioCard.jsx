import './PortfolioCard.scss'

const PortfolioCard = (props) => {
  return (

    <a href={props.link} target="_blank" rel="noreferrer" className="card">
      <div className="card__img" style={{ background: `url('${props.src}')` }}></div>
      <div className="card__title">{props.name}</div>
    </a>
  )
}
export default PortfolioCard