'use client';

import { FC } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error: FC<ErrorProps> = ({ error, reset }) => {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-2">
      <h2>Something went wrong!</h2>
      <p>{error && error.message}</p>
      <button className="text-blue-400" onClick={() => reset()}>
        Try again
      </button>
      <small className="mt-6 opacity-50">
        or contact with me{' '}
        <a href="mailto:metecan@duck.com" className="underline">
          metecan@duck.com
        </a>
      </small>
    </div>
  );
};

export default Error;
