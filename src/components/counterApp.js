import React from 'react'


const appRoot = document.getElementById('app');


class CounterApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)




        this.state = {
            // appOwner: 'Jagaban',
            counter: 0
        }
    }

    handleAddOne() {
        // State Component

        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    handleMinusOne() {
        this.setState((prevState) => {
            if (this.state.counter >= 1) {
                return {
                    counter: prevState.counter - 1
                }
            }
        })
    }

    handleReset() {
        this.setState(() => {
            return {
                counter: 0
            }
        })
    }
    render() {
        return (<di>
            <div className='container'>
                {/* <h2>{this.state.appOwner}</h2> */}
                <h3 className='titleBtn'>counter: {this.state.counter}</h3>
                <button onClick={this.handleAddOne} className="addBtn">AddOne +1</button>
                <button onClick={this.handleMinusOne} className="minusBtn">MinusOne -1</button>
                <button onClick={this.handleReset} className="resetBtn">Reset</button>
            </div>


        </di>)
    }
}
export default CounterApp