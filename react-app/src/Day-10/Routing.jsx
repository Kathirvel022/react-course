import Card from '../Day-02/Card'
import Form from '../Day-06/Form'
import Fetch from '../Day-09/Fetch'

import '../App.css'
import { Routes, Route } from 'react-router-dom';

function Routing(){
    return(
        
    <div className='bg-color'>
        <Routes>
            
            <Route path="/" element={<Card />} />
            <Route path="/form" element={<Form />} />
            <Route path="/form/fetch" element={<Fetch />} />
            
        </Routes>
    </div>
        
    );
}
export default Routing;