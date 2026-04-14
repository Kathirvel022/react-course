import tiger from '../assets/tiger_laying_hero_background.jpg'
import '/src/Day-01/App.css'

function App(){
    const image = tiger;
    const name = "tiger";
    const description = "This is a national animal";    
    const isLogin = true;
    const num = 50;
    return(
        <div>
        <h1>{isLogin ? "Welcome" : "Please login"}</h1>
        <img src={image} className="tiger" />
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{num % 2 === 0 ? "Even Number" : "Odd Number"}</p>
        </div>
    );
}
export default App