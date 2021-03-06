import type { NextPage } from "next";
import Head from "next/head";

import Header from "../../src/features/Header";
import styles from "../../styles/Home.module.css";

type Props = {
  ip: any;
};

const ServerIP: NextPage<Props> = ({ ip = "0.0.0.0" }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next JS - IP Address getStaticProps</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <hr />
      <main className={styles.main}>
        <h1 className={styles.title}>
          IP Adress with getServerSideProps and Middleware
        </h1>

        <p className={styles.description}>Show your network tab in Devtools</p>

        <h3>IP from ServerSideProps: {ip}</h3>
      </main>
    </div>
  );
};

export default ServerIP;

export async function getServerSideProps() {
  const response = await fetch("https://api.ipify.org/?format=json");
  const { ip } = await response.json();
  return {
    props: {
      ip,
    },
  };
}
