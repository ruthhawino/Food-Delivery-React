import './App.css';
import Navbar from './components/navbar';
import Page from './page';
import Categories from './categories';
import Images from './images';
import Menu from './menu';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Page/>
      <Categories/>
      <Images/>
      <Menu/>
      <Footer/>
   
    </div>
  );
}

export default App;
