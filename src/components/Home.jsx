import SideBar from "./SideBar"
import { useEffect, useState } from "react"
import axios from "axios"
import "../home.css"
import SpendingChart from "./charts/Spending"
import { EarningChart } from "./charts/EarningChart"

const Home = () => {
  const [coins, setCoins] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://coinranking1.p.rapidapi.com/coins",
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          timePeriod: "24h",
          "tiers[0]": "1",
          orderBy: "marketCap",
          orderDirection: "desc",
          limit: "50",
          offset: "0",
        },
        headers: {
          "X-RapidAPI-Key":
            "24080131f0mshd4e253177503a88p166a93jsn6a5de11e6d52",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      }

      try {
        const response = await axios.request(options)
        setCoins(response)
        console.table(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])
  return (
    <div className="main">
      <SideBar> </SideBar>
      <div className="Home">
        <h1>Overview & currency news</h1>
        <div className="expenses-spending">
          <div className="expenses">
            <EarningChart />
          </div>
          <div className="spending">
            <SpendingChart />
          </div>
        </div>
        <div className="table-container">
          <table className="coins-table">
            <thead>
              <th>Rank</th>
              <th>Name</th>
              <th>Price</th>
              <th>Market Cap</th>
              <th>Change</th>
              <th>Icon</th>
            </thead>
            <tbody>
              {coins.data &&
                coins.data.data.coins.map((coin) => (
                  <tr>
                    <td>{coin.rank}</td>
                    <td>{coin.name}</td>
                    <td>
                      {new Intl.NumberFormat("en-US", {
                        minimumFractionDigits: 5,
                        maximumFractionDigits: 5,
                      }).format(coin.price)}{" "}
                      $
                    </td>
                    <td>{coin.marketCap}</td>
                    <td>{coin.change} %</td>
                    <td>
                      <img
                        src={coin.iconUrl}
                        alt="coin icon"
                        className="icon-table"
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home
