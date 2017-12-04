import React, { Component } from 'react';
import './App.css';
import StockInfo from './components/StockInfo'
import {loadQuoteForStock, StockInfoError} from './api/iex';


class App extends Component {
    state = {
        quote:null,
        error:null
    }

    componentWillMount(){
        // set default page before the API call is recieved.
        this.setState({
            quote:{
                symbol: "AAPL",
                companyName: "Apple Inc.",
                primaryExchange: "Nasdaq Global Select",
                latestPrice: 171.05,
                latestSource: "Close",
                week52High: 176.24,
                week52Low: 108.25
            },
            error:null
        })
    }

    componentDidMount(){
        this.loadQuote()
    }

    loadQuote(){
        loadQuoteForStock(this.state.symbol)
            .then((quote) => {
                console.log(quote)
                this.setState({quote: quote, error: null})
            })
            .catch((err) => {
                this.setState({ error: "not found" })
                console.log(this.state)
            })
    }

    handleSymbolChange = (event) => {
        const newSymbol = event.target.value
        this.setState( {symbol: newSymbol} );
    }

    handleButtonClick = (event) => {
        this.loadQuote()
    }

    render() {

        return (
            <div className="App">
                <h1>Wold of React</h1>
                <input
                    value={ this.state.symbol }
                    placeholder="Enter symbol"
                    onChange={this.handleSymbolChange }
                    style={{textTransform:'uppercase'}}
                />
                <button onClick={ this.handleButtonClick }>GetQuote</button>
                <StockInfoError error={this.state.error}/>
                <StockInfo {...this.state.quote}/>
            </div>
        );
    }
}

export default App;
