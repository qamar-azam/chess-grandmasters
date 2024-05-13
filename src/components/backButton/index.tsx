'use client';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      className='bg-black text-white mb-8 px-5 py-2  rounded'
      onClick={() => navigate(-1)}
    >
      Back
    </button>
  );
}

export default BackButton;
