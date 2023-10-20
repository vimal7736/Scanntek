import React, { useState, useEffect } from "react";
import "./Products.css";
import { fetchProducts } from "../services/apiService";

//  local images
import Product1Image from "../images/Product1.png";
import Product2Image from "../images/Product2.png";
import Product3Image from "../images/Product3.png";
import Product4Image from "../images/Product4.png";
import Product5Image from "../images/Product5.png";
import Product6Image from "../images/Product6.png";

interface Product {
  id: number;
  image: string;
  description: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const localProducts = [
    {
      id: 1,
      image: Product1Image,
      description:
        "Froza ERP is a tax enabled nterprise resource planning solution developed with  organizations business....",
    },
    {
      id: 2,
      image: Product2Image,
      description:
        "ForzaRetail offers retail businesses an end-to-end retail management solution to improve overall business....",
    },
    {
      id: 3,
      image: Product3Image,
      description:
        "iChef Restaurant Management System is a Touch screen based speedy and reliable POS solution for Restaurant....",
    },
    {
      id: 4,
      image: Product4Image,
      description:
        "Albergo is a global ERP software solution designed for hospitality organizations. The solution goes....",
    },
    {
      id: 5,
      image: Product5Image,
      description:
        "iRoute™ provides a comprehensive, easy-to-use route accounting solution for Direct Store Delivery ....",
    },
    {
      id: 6,
      image: Product6Image,
      description:
        "A system for a hospital would require being very precise and must result in operational cost reduction....",
    },
    {
      id: 6,
      image: Product6Image,
      description:
        "A system for a hospital would require being very precise and must result in operational cost reduction....",
    },
    {
      id: 6,
      image: Product6Image,
      description:
        "A system for a hospital would require being very precise and must result in operational cost reduction....",
    },
    {
      id: 6,
      image: Product6Image,
      description:
        "A system for a hospital would require being very precise and must result in operational cost reduction....",
    },
    {
      id: 6,
      image: Product6Image,
      description:
        "A system for a hospital would require being very precise and must result in operational cost reduction....",
    },
    {
      id: 6,
      image: Product6Image,
      description:
        "A system for a hospital would require being very precise and must result in operational cost reduction....",
    },
    {
      id: 6,
      image: Product6Image,
      description:
        "A system for a hospital would require being very precise and must result in operational cost reduction....",
    },
    {
      id: 6,
      image: Product6Image,
      description:
        "A system for a hospital would require being very precise and must result in operational cost reduction....",
    },
  ];

  return (
    <div>
      <div className="about-heading">
        <h1>OUR PRODUCTS</h1>
      </div>
      <div className="products-container">
        {localProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={`Product ${product.id}`} />
            <div className="custom-products">
              <div className="product-description">{product.description}</div>
              <button className="view-button">View more</button>
            </div>
          </div>
        ))}

        {/* check here with data which import from service page annd updated in a state and mapped the array of 
        object from response data  */}

        {/* {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={`Product ${product.id}`} />
            <div className="custom-products">
              <div className="product-description">{product.description}
              <button className="view-button">View more</button>
              </div>
              
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Products;
