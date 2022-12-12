import Head from "next/head";
import { HomePage } from "../src/components/home/home-page";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>IT Global Pro</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage data={data} />
    </div>
  );
}

export async function getServerSideProps() {
  const { service_categories } = await import("/data/data.json");
  return {
    props: {
      data: service_categories,
    },
  };
}
