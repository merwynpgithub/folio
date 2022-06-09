import './styles/folio.css';


function Folio({link, id, img}) {
  return (
    <div className="f">
      <div className="f-browse">
        <div className="f-circle"></div>
        <div className="f-circle"></div>
        <div className="f-circle"></div>
      </div>
      <a href={link} target="_blank">
        <img src={img} alt="scheduler" className="f-img"></img>
      </a>
    </div>
  );
}

export default Folio;