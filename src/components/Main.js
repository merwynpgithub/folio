import './styles/main.css';
import personal from '../images/personal2.png'

function Main() {
  return (
    <div className="main">
      <div className="main-left">
        <div className="main-left-wrapper">
          <h2 className="main-intro">Hello, my name is</h2>
          <h1 className="main-name">Merwyn Patrick</h1>
          <div className="main-title">
            <div className="title-wrapper">
            <div className="title-item">Full Stack Developer</div>
            <div className="title-item">Mechanical Engineer</div>
            <div className="title-item">Stock Trader</div>
            </div>
          </div>
          <div className="desc">
            I develop web applications using the PERN stack (PostgreSQL, Express, React and Node.js). I am looking to transition my career to Web development full time.
          </div>
        </div>
      </div>
      <div className="main-right">
        <div className="img-bg"></div>
        <img src={personal} className="personal-image" alt="Personal Image" />
      </div>
    </div>
  );
}

export default Main;