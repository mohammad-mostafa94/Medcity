import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Slider1 from './components/Slider/Slider';
import Cards from './components/Card/Cards';

function App() {
  return (
    <>
      <div><Nav /></div>
      <div className="w-full h-screen" style={{"marginTop":"75px"}}>
        <Slider1/>
        <Cards/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
