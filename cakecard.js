import CakeCard from 

 CakeCatalog = ({ cakes }) => {
  return (
    <div className="cake-grid">
      {cakes.map(cake => (
        <CakeCard key={cake.id} cake={cake} />
      ))}
    </div>
  );
};
