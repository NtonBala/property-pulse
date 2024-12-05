'use client';

import { useRouter, useParams, useSearchParams, usePathname } from 'next/navigation';

const PropertyPage = () => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  return (
    <div>
      <h1 className="text-3xl">Property Page</h1>
      <p>params.id: {params.id}</p>
      <p>searchParams.name: {searchParams.get('name')}</p>
      <p>pathname: {pathname}</p>
      <button onClick={() => router.replace('/')}>Go Home</button>
    </div>
  );
};

export default PropertyPage;
