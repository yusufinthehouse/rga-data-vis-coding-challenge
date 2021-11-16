import { useEffect } from "react";
import Head from "next/head";
import IntertwinedLineChart from "../component/IntertwinedLineChart";

export default function Home() {
  useEffect(() => {}, []);

  return (
    <div>
      <Head>
        <title>Yusuf - RGA Data Vis Coding Challenge</title>
        <meta name="description" content="RGA Data Vis Coding Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IntertwinedLineChart />
    </div>
  );
}
