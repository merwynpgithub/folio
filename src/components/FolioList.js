import Folio from './Folio';
import './styles/folio.css';
import data from '../data';

function FolioList() {
  return (
    <>
    <div className="fl">
      <div className="fl-para">
      <h1 className="fl-title">My Projects</h1>
      <p className="fl-text">Following are some of my completed and hosted projects</p>
      <div className="fl-list">
        {data.map(data => {
          return (
            <Folio link={data.link} key={data.id} img={data.img} name={data.name} />
          );
        })}
      </div>
      </div>
    </div>
    </>
  );
}

export default FolioList;