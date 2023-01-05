// Pages
import Maintenance from "./pages/Maintenance";
import Home from "./pages/Home";

// Env
const { REACT_APP_MAINTENANCE } = process.env;

const App = () => {
  return REACT_APP_MAINTENANCE ? <Maintenance /> : <Home />;
};

export default App;
