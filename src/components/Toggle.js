import './styles/toggle.css';
import sun from '../images/sun.png';
import moon from '../images/moon.png';

function Toggle() {
  return (
    <div className="t">
      <img src={sun} alt="sun" className="t-icon" />
      <img src={moon} alt="moon" className="t-icon" />
      <div className="t-btn"></div>
    </div>
  );
}

export default Toggle;