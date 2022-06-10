import { useContext } from 'react';
import './App.css';
import Contact from './components/Contact';
import FolioList from './components/FolioList';
import Main from './components/Main';
import Toggle from './components/Toggle';
import { ThemeContext } from './context';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white", transition: "0.3s"}}>
      <Toggle />
      <Main />
      <FolioList />
      <Contact />
    </div>
  );
}

export default App;
