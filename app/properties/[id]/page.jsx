'use client';
import { useRouter } from 'next/navigation';

const PropertyPage = () => {
  const router = useRouter();
  console.log(router);

  return <div>Property Page</div>;
};

export default PropertyPage;
