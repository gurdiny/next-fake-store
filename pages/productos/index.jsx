import { useEffect, useState } from "react";
import { getAllProducts } from "../api";
import { toast } from "sonner";

import useAuth from "../hooks/useAuth";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useAuth();
  useEffect(() => {
    getAllProducts()
      .then((prods) => {
        setProducts(prods);
      })
      .catch((error) => {
        toast.error("error al obtener los productos");
        console.error("[getAllProducts error]", error);
      });
  }, []);
  return (
    <main>
      <h1 className="text-4xl font-semibold text-center">Productos</h1>
      <section className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product, idx) => {
          return (
            <article
              key={`product-${idx}`}
              className="hover:bg-white/10 cursor-pointer rounded p-2 flex flex-col"
            >
              <img src={product.thumbnail} alt="" />
              <p className="text-center ">{product.title}</p>
              <a
                href={`/productos/${product.id}`}
                className="bg-white/50  p-2 rounded mt-2 text-center"
              >
                Ver más
              </a>
            </article>
          );
        })}
      </section>
    </main>
  );
}

// Este index repsonde a la pagina principal de la carpeta que contine
