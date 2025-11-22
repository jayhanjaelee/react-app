import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log('Fetching Products.');
    setProducts(['Clothing', 'HouseHold']);
  }, []);

  return <div>ProductList</div>;
};

export default ProductList;
