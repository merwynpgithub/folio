import './styles/main.css';

function Main() {
  return (
    <div className="main">
      <div className="main-left">
        <div className="main-left-wrapper">
          <h2 className="main-intro">Hello, my name is</h2>
          <h1 className="main-name">Merwyn Patrick</h1>
          <div className="main-title">
            <div className="title-wrapper">
            <div className="title-item">Web Developer</div>
            <div className="title-item">Mechanical Engineer</div>
            <div className="title-item">Stock Trader</div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-right">Right</div>
    </div>
  );
}

export default Main;