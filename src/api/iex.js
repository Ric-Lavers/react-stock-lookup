import axios from 'axios';
import React from 'react';

const api = axios.create({
    baseURL: 'https://api.iextrading.com/1.0'
});

export function loadQuoteForStock(symbol) {
    return api.get(`stock/${symbol}/quote`)
        .then(res => res.data);
}

export function StockInfoError({error}) {
    console.log("cat",{error});
    if (error!==null) {
        return (<h1> error: { error } </h1>)
    }else{
        return <h1></h1>
    }
}

// add another
