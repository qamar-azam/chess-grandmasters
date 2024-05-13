import { useLoaderData } from 'react-router-dom';
import GrandMastersList from '../components/list';

export async function loader() {
  try {
    const res = await fetch('https://api.chess.com/pub/titled/GM');
    const data = await res.json();
    return { ...data };
  } catch (error) {
    console.log(error);
    throw Error('Failed to fetch');
  }
}

export default function Home() {
  const { players } = useLoaderData();

  return (
    <div>
      <h1 className='text-3xl text-center font-bold mb-8'>Grand Masters</h1>
      <GrandMastersList list={players} />
    </div>
  );
}
