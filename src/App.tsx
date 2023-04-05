import './App.scss';
import { TabPanel } from './components';
import { AppRouter } from './router';

function App() {
  return (
    <div className="app-wrapper">
      <TabPanel />
      <div className="container">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
