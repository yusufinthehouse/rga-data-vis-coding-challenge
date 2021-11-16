import { useState } from "react";
import Head from "next/head";
import IntertwinedLineChart from "../component/IntertwinedLineChart";

export default function Home() {
  const [data, setData] = useState([
    { label: "Q1 - 2020", percentageInDecimal: 0.3 },
    { label: "Q2 - 2020", percentageInDecimal: 0.2 },
    { label: "Q3 - 2020", percentageInDecimal: 0.15 },
    { label: "Q1 - 2021", percentageInDecimal: 0.35 },
    { label: "Q2 - 2021", percentageInDecimal: 0.6 },
  ]);

  return (
    <div>
      <Head>
        <title>Yusuf - RGA Data Vis Coding Challenge</title>
        <meta name="description" content="RGA Data Vis Coding Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IntertwinedLineChart data={data} />
    </div>
  );
}
