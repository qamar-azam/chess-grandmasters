import { useLoaderData } from 'react-router-dom';
import BackButton from '../components/backButton';
import RemainingTimer from '../components/timer';

export interface Profile {
  avatar?: string;
  player_id: number;
  '@id': string;
  url: string;
  name: string;
  username: string;
  title?: string;
  followers: number;
  country: string;
  last_online: number;
  joined: number;
  status: string;
  is_streamer: boolean;
  verified: boolean;
  league: string;
  streaming_platforms?: null[] | null;
}

type LoaderParams = {
  params: {
    id?: string;
  };
};
export async function loader({
  params
}: LoaderParams): Promise<{ profile: Profile }> {
  try {
    const res = await fetch(`https://api.chess.com/pub/player/${params.id}`);
    const profile = await res.json();
    return { profile };
  } catch (error) {
    throw Error('Failed to fetch');
  }
}

export default function ProfilePage() {
  const { profile } = useLoaderData() as { profile: Profile };

  return (
    <>
      <h1 className='text-3xl text-center font-bold mb-8'>Profile</h1>

      <BackButton />

      <div className='flex'>
        <img src={profile.avatar} alt={profile.name} className='rounded mr-8' />

        <div>
          <div>
            <span className='font-bold'>Name:</span> {profile.name}
          </div>
          <div>
            <span className='font-bold'>Status:</span> {profile.status}
          </div>
          <div>
            <span className='font-bold'>League:</span> {profile.league}
          </div>
          <div>
            <span className='font-bold'>Title:</span> {profile.title}
          </div>
          <div>
            <span className='font-bold'>Followers:</span> {profile.followers}
          </div>
          <div>
            <span className='font-bold'>Username:</span> {profile.username}
          </div>

          <div>
            <span className='font-bold'>Last Online:</span>{' '}
            <RemainingTimer time={profile.last_online} />
          </div>
        </div>
      </div>
    </>
  );
}
