import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div className="posts">
      <div className="productsNav">
        <Link to="/posts/search"> Search </Link>
        <Link to="/posts/list"> List </Link>
        <Link to="/posts/add"> Add </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Products;