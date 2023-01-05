// Pages
import Maintenance from "./pages/Maintenance";
import Home from "./pages/Home";

// Env
const { REACT_APP_MAINTENANCE } = process.env;

const App = () => {
  const maintenance = REACT_APP_MAINTENANCE ? JSON.parse(REACT_APP_MAINTENANCE) : false;
  return maintenance ? <Maintenance /> : <Home />;
};

export default App;
