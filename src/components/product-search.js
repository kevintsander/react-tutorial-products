export default function ProductSearch({
  search,
  onlyInStock,
  onSearch,
  onSetInStock,
}) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          value={onlyInStock}
          onChange={(e) => onSetInStock(e.target.checked)}
        />{" "}
        Only show in-stock products
      </label>
    </form>
  );
}
