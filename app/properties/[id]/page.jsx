'use client';

import { useRouter, useParams, useSearchParams } from 'next/navigation';

const PropertyPage = () => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  return (
    <div>
      <h1 className="text-3xl">Property Page</h1>
      <p>params.id: {params.id}</p>
      <p>searchParams.name: {searchParams.get('name')}</p>
      <button onClick={() => router.replace('/')}>Go Home</button>
    </div>
  );
};

export default PropertyPage;
