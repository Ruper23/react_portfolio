import './PortfolioCard.scss'

const PortfolioCard = (props) => {
  return (

    <a href={props.link} target="_blank" rel="noreferrer" className="portfolio-cards__card">
      <div className="card-img" style={{ background: `url('${props.src}')` }}></div>
      <div className="card-title">{props.name}</div>
    </a>
  )
}
export default PortfolioCard