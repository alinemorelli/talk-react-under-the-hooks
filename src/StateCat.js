import React from 'react'
import happyCat from './happy.jpg'
import sadCat from './sad.jpg'

class StateCat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            happiness: true
        }
        this.handleCatHappiness = this.handleCatHappiness.bind(this)
    }

    componentDidMount () {
        document.title = `Gato está ${this.state.happiness ? 'feliz' : 'triste'}`
    }

    componentDidUpdate () {
        document.title = `Gato está ${this.state.happiness ? 'feliz' : 'triste'}`
    }

    handleCatHappiness (e) {
        this.setState({ happiness: e })
    }

    render() {
        return (
            <div className='container'>
                <img src={this.state.happiness ? happyCat : sadCat } />
                <div className='actions'>    
                    <button onClick={() => this.handleCatHappiness(true)}>
                        Fazer carinho
                    </button>
                    <button onClick={() => this.handleCatHappiness(false)}>
                        Dar banho
                    </button>
                </div>
            </div>
        )
    }
}

export default StateCat