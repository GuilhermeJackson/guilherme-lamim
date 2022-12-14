import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import './styles/components/app.scss'

function App() {
  return (
    <div id="portfolio">
      <h1>Guilherme Jackson Lamim</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App
