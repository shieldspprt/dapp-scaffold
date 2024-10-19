import type { NextPage } from "next";
import Head from "next/head";
import { BasicsView } from "../views";

const Basics: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Poolparty.finance</title>
        <meta
          name="description"
          content="Join the next generation of decentralized finance with our competitive platform on Solana. Deposit and vote for your favorite projects while earning exclusive token airdrops. A gamified experience for both new and established projects with a focus on community engagement and revenue sharing."
        />
      </Head>
      <BasicsView />
    </div>
  );
};

export default Basics;
