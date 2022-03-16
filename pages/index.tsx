import type { NextPage, NextPageContext } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import Header from "../src/features/Header";
import ShowIP from "../src/features/ShowIP";
import styles from "../styles/Home.module.css";
// import { getClientIp } from "request-ip";

interface IProps {
  ip: any;
}

const DynamicIP = dynamic(() => import("../src/features/ShowIP"));

const Home: NextPage<IProps> = ({ ip = "0.0.0.0" }) => {
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
        <h1 className={styles.title}>IP Adress with getStaticProps</h1>

        <p className={styles.description}>
          Your IP is: <code className={styles.code}>{`${ip}`}</code>
        </p>

        <h4>Dynamic Import</h4>
        <DynamicIP />

        <h4>Default Import</h4>
        <ShowIP />
      </main>
    </div>
  );
};

export default Home;

Home.getInitialProps = async (ctx: NextPageContext) => {
  const ip = ctx?.req?.headers["x-real-ip"] || ctx?.req?.socket.remoteAddress;

  return {
    ip,
  };
};
