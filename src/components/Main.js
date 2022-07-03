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
            </div>
          </div>
          <div className="desc">
            I develop web applications using the PERN stack (PostgreSQL, Express, React and Node.js). I am looking to transition my career to Web development full time. I am currently learning AWS, Python and TypeScript.
          </div>
          <div className="desc">
            I like the stock market and have a passion for trading and investing. Before transitioning to Web Development, I was an Auto Design Engineer and I designed some of the parts in the Acura RDX 2018-2020 models.
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