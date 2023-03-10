import type {NextPage} from "next";
import Head from 'next/head';
import { RandomFox } from "../components/RandomFox";

export default function Home() {
  return (
    <>
      <Head>
        <title>Practice</title>
        <meta name="description" content="Developing new skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 class="text-3xl font-bold underline">Hello, world!</h1>
        <RandomFox />
      </main>

      <footer>

      </footer>
    </>
  )
}
