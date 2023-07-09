import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API Fortress | Home',
  description: 'Protected APIs',
};

export default function Home() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
