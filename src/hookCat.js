import React, { useState, useEffect } from 'react'
import happyCat from './happy.jpg'
import sadCat from './sad.jpg'

function HookCat () {
    const [ happiness, setCatHappiness ] = useState(true)
    useEffect(() => {
        document.title = `Gato está ${happiness ? 'feliz' : 'triste'}`
    })
    return (
        <div className='container'>
            <img src={happiness ? happyCat : sadCat} />
            <div className='actions'>                
                <button onClick={() => setCatHappiness(true)}>
                    Fazer carinho
                </button>
                <button onClick={() => setCatHappiness(false)}>
                    Dar banho
                </button>
            </div>
        </div>
    )
}

export default HookCat