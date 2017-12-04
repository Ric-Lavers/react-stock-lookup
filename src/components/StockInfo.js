import React from 'react';

function StockInfo({
        symbol,
        companyName,
        primaryExchange,
        latestPrice,
        latestSource,
        week52High,
        week52Low
    }) {
    return(
        <div>
            <h2> {symbol}: {companyName}</h2>
            <h3> <strong>{latestPrice} ({latestSource})</strong></h3>
            <dl>
                <dt>Week52 High </dt>
                <dd><strong>{week52High}</strong> </dd>

                <dt>Week52 Low </dt>
                <dd><strong>{week52Low}</strong></dd>

                <dt>Exchange </dt>
                <dd><strong>{primaryExchange}</strong> </dd>

            </dl>
        </div>
    )
}

export default StockInfo;
