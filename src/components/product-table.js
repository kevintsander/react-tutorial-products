function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const productCell = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{productCell}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default function ProductTable({ products }) {
  // group products by category
  const categories = products.reduce((groupedByCategory, product) => {
    if (!groupedByCategory[product.category]) {
      groupedByCategory[product.category] = [];
    }
    groupedByCategory[product.category].push(product);
    return groupedByCategory;
  }, {});

  // iterate through categories to create rows
  const rows = [];
  Object.entries(categories).forEach(([catName, catValue]) => {
    rows.push(<ProductCategoryRow key={catName} category={catName} />);
    catValue.forEach((product) => {
      rows.push(<ProductRow key={product.name} product={product} />);
    });
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
