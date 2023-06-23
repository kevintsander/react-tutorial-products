import { useState } from "react";

import ProductSearch from "./product-search";
import ProductTable from "./product-table";

export default function FilterableProducts({ products }) {
  const [search, setSearch] = useState("");
  const [onlyInStock, setOnlyInStock] = useState(false);

  let filteredProducts = products
    .filter((product) => (onlyInStock ? product.stocked === true : true))
    .filter((product) =>
      search.trim() !== ""
        ? product.name.toLowerCase().includes(search.toLowerCase())
        : true
    );

  return (
    <>
      <ProductSearch
        search={search}
        onlyInStock={onlyInStock}
        onSearch={setSearch}
        onSetInStock={setOnlyInStock}
      />
      <ProductTable products={filteredProducts} />
    </>
  );
}
