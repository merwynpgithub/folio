import Folio from './Folio';
import './styles/folio.css';
import data from '../data';

function FolioList() {
  return (
    <>
    <div className="fl">
      <div className="fl-para">
      <h1 className="fl-title">Learn and create</h1>
      <p className="fl-text">Full stack web developer transitioning my career from Mechanical/Automotive Engineering and Manufacturing</p>
      <div className="fl-list">
        {data.map(data => {
          return (
            <Folio link={data.link} key={data.id} img={data.img} />
          );
        })}
      </div>
      </div>
    </div>
    </>
  );
}

export default FolioList;