
import './App.css';
import Properties from './Components/Properties';
import Table from './Components/Table';
import Count1 from "./Components/Counter";
import Header from "./Components/Const";
import FavoriteColor from './Components/Usestatedemo';
import Timer from './Components/Useeffectdemo';
import Component1 from './Components/Usecontextdemo';
import Reff from './Userefdemo';
function App() {
  return (
    <>
    <Header/>,
    <Count1/>,
    <Table/>,
    <Properties name="Prajakta!!"/>,
   <FavoriteColor/>,
   <Timer/>,
   <Component1/>,
   <Reff/>
   </>
  );
}
export default App;
