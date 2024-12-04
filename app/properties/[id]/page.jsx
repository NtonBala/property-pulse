'use client';

import { useRouter, useParams } from 'next/navigation';

const PropertyPage = () => {
  const router = useRouter();
  const params = useParams();

  return (
    <div>
      <h1 className="text-3xl">Property Page</h1>
      <p>params.id: {params.id}</p>
      <button onClick={() => router.replace('/')}>Go Home</button>
    </div>
  );
};

export default PropertyPage;
