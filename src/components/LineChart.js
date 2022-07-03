import React from 'react'
import { Line } from 'react-chartjs-2'

function LineChart({ coinHistory, currentPrice, coinName }) {
    const coinPrice = [];
    const coinTimeStamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimeStamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
    }

    const data = {
        labels: coinTimeStamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <div className="line_chart">
            <h1>{coinName} Price Chart</h1>
            <div className="price-container">
                <h1>{coinHistory?.data?.change} %</h1>
                <h1>Current {coinName} Price: $ {currentPrice}</h1>
            </div>
            <Line data={data} options={options} />
        </div>
    )
}

export default LineChart