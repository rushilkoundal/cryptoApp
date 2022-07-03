
# CrptoApp - Get info about CryptoCurrency
We know, A cryptocurrency is a digital currency, which is an alternative form of payment created using encryption algorithms. The use of encryption technologies means that cryptocurrencies function both as a currency and as a virtual accounting system.

Let just get updated about each and every Crypto-Currency.





## API Reference

#### Get all items

```http
https://coinranking1.p.rapidapi.com/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `limit`   | `value`  | customize your get output  |
| `coinId`  | `string` | get info of specific currency  |
| `timeperiod`  | `string` | get info at particular time stamp  |

#### API Requests

```http
/coins?limit=${value},
/coin/${coinId},
/coin/${coinId}/history/?timeperiod=${timePeriod}
```



## Acknowledgements

 - [React.Js](https://reactjs.org/docs/getting-started.html)
 - [Rapid Api](https://rapidapi.com/hub)


## Feedback

If you have any query or suggetions please reach me out at rushilkoundal1611@gmail.com.

