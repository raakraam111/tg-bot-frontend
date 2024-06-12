import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from 'react-router-dom';
import MinePage from "./pages/MinePage";
import TaskPage from "./pages/TaskPage";
import TapPage from "./pages/TapPage";
import BoostPage from "./pages/BoostPage";
import StatsPage from "./pages/StatsPage";
import TgDownload from './components/TgDownload';
import "./App.css";


function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // console.log({isMobile})
  return (
    <Router>
       {isMobile ? (
          < >
            <Switch>
              <Route path="/mine" element={<MinePage />} />
              <Route path="/task" element={<TaskPage />} />
              <Route path="/tap" element={<TapPage />} />
              <Route path="/boosters" element={<BoostPage />} />
              <Route path="/stats" element={<StatsPage />} />
              <Route path="/" element={<TapPage />} />
            </Switch>
            
          </>
       ) : (
          <div className="content">
            <TgDownload />
          </div>
        )}
    </Router>
  );
}

export default App;
