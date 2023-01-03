import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import showStore from "../store/showStore";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Header from "../components/Header";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Detail() {
  const store = showStore();
  const params = useParams();
  useEffect(() => {
    store.fetchData(params.id);
  }, []);
  if (!store.dataRes) {
    return <>Loading</>;
  }
  const { data } = store.dataRes;
  return (
    <div>
      <Header back />
      {data && (
        <>
          <div className="show-header">
            <header>
              <img src={data.image.large} alt="" />
              <h2>
                {data.name}({data.symbol})
              </h2>
            </header>
          </div>
          <div className="width">
            <div className="show-graph">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={store.graphData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="Date" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="Price"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="width">
            <div className="show-details">
              <h2>Details</h2>
              <div className="show-details-row">
                <h3>Marcet Cap Rank</h3>
                <span>${data.market_cap_rank}</span>
              </div>
              <div className="show-details-row">
                <h3>24 Hour High</h3>
                <span>${data.market_data.high_24h.usd}</span>
              </div>
              <div className="show-details-row">
                <h3>24 Hour Low</h3>
                <span>${data.market_data.low_24h.usd}</span>
              </div>
              <div className="show-details-row">
                <h3>Circulating supply</h3>
                <span>${data.market_data.circulating_supply}</span>
              </div>
              <div className="show-details-row">
                <h3>Current Price</h3>
                <span>${data.market_data.current_price.usd}</span>
              </div>
              <div className="show-details-row">
                <h3>1 Year Change</h3>
                <span>
                  ${data.market_data.price_change_percentage_1y.toFixed(2)}%
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
