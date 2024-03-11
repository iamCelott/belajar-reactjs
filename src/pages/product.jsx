import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
const product = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp. 1.000.000",
    image: "/public/image/shoes1.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
    possimus ut. Eaque mollitia dolorem aspernatur, eligendi autem nobis
    et, velit id possimus dignissimos maxime consequuntur veniam. Id
    debitis pariatur cum.`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp. 500.000",
    image: "/public/image/shoes1.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
    possimus ut. Eaque mollitia dolorem aspernatur, eligendi autem nobis
    et`,
  },
  {
    id: 3,
    name: "Sepatu Adadong",
    price: "Rp. 2.000.000",
    image: "/public/image/shoes1.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
    possimus ut.`,
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <Fragment>
      <div className="h-20 flex justify-end bg-blue-500 text-white items-center px-10">
        {email}
        <Button classname="ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {product.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name="Sepatu Baru">
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductPage;
