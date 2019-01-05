import React, {Component} from 'react'
import {hot} from 'react-hot-loader'

/**********************************************************
 * Airbnb React/JSX Style Guide
 * https://github.com/apple77y/javascript/tree/master/react
 **********************************************************/

const propTypes = {
    
}

const defaultProps = {

}

export class App extends Component {
    constructor () {
        super()
        this.state = {
            name: ''
        }
    }

  render() {
    return (
        <div>
            <button onClick={() => {this.setState({name:'LEE DAE HO'})}}>Click</button>
            <h1>Hellow!!!! {this.state.name}</h1>
        </div>
    )
  }
}

App.propTypes = propTypes
App.defaultProps = defaultProps

export default hot(module)(App)
