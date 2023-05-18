import {useState} from 'react';
import type { MouseEventHandler } from 'react';
import type {NextPage} from "next";
import Head from 'next/head';
import { RandomFox } from "../components/RandomFox";

const random = () => Math.floor(Math.random() *123) +1;

type ImageItem = { id: string; url: string}

// generate random id
const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

export default function Home() {

  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newImageItem: ImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`
    };

    setImages([
      ...images,
      newImageItem
    ])
  }

  return (
    <>
      <Head>
        <title>Practice</title>
        <meta name="description" content="Developing new skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hello, world!</h1>
        <button onClick={addNewFox}>
          Add new Fox
        </button>
        {images.map(({id, url}) => (
          <div key={id}className="p-4">
            <RandomFox image={url} />
          </div>
        ))}
        
      </main>

      <footer>

      </footer>
    </>
  )
}
