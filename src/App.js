import './App.css';
import Contact from './components/Contact';
import FolioList from './components/FolioList';
import Main from './components/Main';
import Toggle from './components/Toggle';

function App() {
  return (
    <div>
      <Toggle />
      <Main />
      <FolioList />
      <Contact />
    </div>
  );
}

export default App;
