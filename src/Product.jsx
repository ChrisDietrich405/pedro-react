import React, {useRouter} from "react";

const Product = ({ product }) => {
  // const router = useRouter()
  return (
    <>
      {" "}
      <div>
        <h2>{product.title}</h2>
        <img src={product.image} style={{ width: "100px" }} alt="" />
        <button onClick={() => router.push(`/product/${product.id}`)}>details</button>
      </div>
    </>
  );
};

export default Product;
