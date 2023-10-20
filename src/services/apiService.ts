interface Product {
    id: number;
    image: string;
    description: string;
  }
  
  export const fetchProducts = async (): Promise<Product[]> => {

    return new Promise((resolve) => {
      setTimeout(() => {
        const products: Product[] = [
          {
            id: 1,
            image: "Product1.png",
            description: "Description for Product 1",
          },
          {
            id: 2,
            image: "Product2.png",
            description: "Description for Product 2",
          },
          {
            id: 3,
            image: "Product3.png",
            description: "Description for Product 3",
          },
          {
            id: 4,
            image: "Product4.png",
            description: "Description for Product 4",
          },
          {
            id: 5,
            image: "Product5.png",
            description: "Description for Product 5",
          },
          {
            id: 6,
            image: "Product6.png",
            description: "Description for Product 6",
          },
        ];
  
        resolve(products);
      }, 1000); 
    });
  };
  