import Folio from './Folio';
import './styles/folio.css';

function FolioList() {
  return (
    <>
    <div className="fl">
      <h1 className="fl-title">Learn and create</h1>
      <p className="fl-text">Tiny App is a url shortener project created using Express and React</p>
      <div className="fl-list">
        <Folio />
        <Folio />
        <Folio />
        <Folio />
      </div>
    </div>
    </>
  );
}

export default FolioList;