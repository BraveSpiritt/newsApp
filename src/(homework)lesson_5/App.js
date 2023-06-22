import React, { useState } from 'react';
import './App.css'




function App() {
    const [value, setValue] = useState('Yes')
    const [value1, setValue1] = useState('No')

    function handler() {
        if (value === 'Yes' && value1 === 'No') {
            setValue('No')
            setValue1('Yes')
        } else if (value === 'No' && value1 === 'Yes') {
            setValue1('No')
            setValue('Yes')
        }
    }

    return (
        <div>
            <button onClick={handler}>{value}</button>
            <button onClick={handler}>{value1}</button>
        </div >
    )
}



export default App;