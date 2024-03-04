import CardProduct from "../components/Fragments/CardProduct";
const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/public/image/shoes1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
          possimus ut. Eaque mollitia dolorem aspernatur, eligendi autem nobis
          et, velit id possimus dignissimos maxime consequuntur veniam. Id
          debitis pariatur cum.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.000.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/public/image/shoes1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
          possimus ut. Eaque mollitia dolorem aspernatur, eligendi autem nobis
          et, velit id possimus dignissimos maxime consequuntur veniam. Id
          debitis pariatur cum.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.000.000" />
      </CardProduct>
    </div>
  );
};

export default ProductPage;
