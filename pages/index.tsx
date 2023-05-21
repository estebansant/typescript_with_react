import {useState} from 'react';
import type { MouseEventHandler } from 'react';
import type {NextPage} from "next";
import Head from 'next/head';
import { LazyImage } from "../components/RandomFox";
import { random } from "lodash";

const myRandom = () => random(1, 123);

// generate random id
const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

export default function Home() {

  const [images, setImages] = useState<Array<IImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newImageItem: IImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${myRandom()}.jpg`
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
            <LazyImage
              src={url}
              className="rounded bg-gray-300"
              width={320}
              height="auto"
              onClick={() => console.log('hey!')}
            />
          </div>
        ))}
        
      </main>

      <footer>

      </footer>
    </>
  )
}
