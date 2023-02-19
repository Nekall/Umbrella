// Pages
import Maintenance from "./pages/Maintenance";
import Home from "./pages/Home";

// Env
const { REACT_APP_MAINTENANCE } = process.env;

const App = () => {
  console.clear();
  console.log(`%c
1 1 001 00010 1 00 10 1
 0 11 1 0011 0 10 1 0
1 101 01010 1 01 10 1 0
  0 110 1__.|.__ 0 0 11
0  1.-"'..':'..'"-. 0 1
  .' .' .  :  . '. '.
1/ .   .   :   .   . \\0
/_ _._ _.._:_.._ _._ _\\
  '   '    |    '   '
           |
           | Umbrella
           |
           |  Sécurité
           |  & Prévention
         '=' 

`, 'color: #808080')
  const maintenance = REACT_APP_MAINTENANCE ? JSON.parse(REACT_APP_MAINTENANCE) : false;
  return maintenance ? <Maintenance /> : <Home />;
};

export default App;
