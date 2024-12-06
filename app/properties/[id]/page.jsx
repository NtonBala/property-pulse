const PropertyPage = ({ params, searchParams }) => {
  return (
    <>
      <div>Property Page {params.id}</div>
      <p>searchParams.name: {searchParams.name}</p>
    </>
  );
};

export default PropertyPage;
