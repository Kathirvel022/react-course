import tiger from './assets/tiger.jpg'
import hero from './assets/hero.png'
import './App.css'
import App0 from './Day-01/App'
import Card from './Day-02/Card'
import Product from './Day-03/Product'
import Events from './Day-04/Events'
function App() {

  return (
    <>
    <App0/> 
    <Card />
    <Card />
    <App0 />
    <Product image={tiger} name="Laptop" price={200000} />
    <Product image={hero} name="Mobile" price={30000}/>
    <Events />
    </>
  );
  
}

export default App
