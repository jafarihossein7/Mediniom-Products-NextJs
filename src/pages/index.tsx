import React, { useEffect, useState } from "react";
import Product from "Components/Product";
import { get } from "../../modules/httprequest";
import { ProductResponseType, ProductType } from "types/productResponse";
import { useRouter } from "next/router";
import { NextPage } from "next";

type Props = {
  productsResponse: ProductResponseType;
};

const Products: NextPage<Props> = ({ productsResponse }) => {
  const [products, setproducts] = useState<ProductType[]>(
    productsResponse.content
  );
  const [pageNumber, setpageNumber] = useState<number>(0);
  const [loading, setloading] = useState<boolean>(false);
  const totalPages = productsResponse.totalPages;

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      let page = router.query.page;
      if (page) {
        setpageNumber(Number(page));
        setloading(true);
        get(
          `https://api.mediniom.com/api/v2/item?&size=20&page=${Number(page)}`
        ).then((response) => {
          setproducts(response.data.content);
          setloading(false);
        });
      }
    }
  }, [router]);

  function handleNextClick() {
    router.push(`?page=${pageNumber + 1}`);
    setpageNumber(pageNumber + 1);
  }

  function handlePreviousClick() {
    setpageNumber(pageNumber - 1);
    router.push(`?page=${pageNumber - 1}`);
  }

  return (
    <div>
      {loading && (
        <p className="text-green-700 font-semibold text-8xl flex justify-center">
          Loading...
        </p>
      )}
      {!loading && (
        <div className="grid grid-cols-3 gap-8 m-8">
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      )}
      <div className="buttons m-8 flex gap-x-4">
        <button
          onClick={handlePreviousClick}
          disabled={pageNumber === 0 ? true : false}
          className={`${
            pageNumber === 0 ? "bg-slate-400" : "bg-green-700"
          } text-white px-4 py-2 rounded-lg`}
        >
          قبلی
        </button>
        <div className="flex items-center">
          {pageNumber} از {totalPages}
        </div>
        <button
          onClick={handleNextClick}
          disabled={totalPages == pageNumber ? true : false}
          className={`${
            totalPages == pageNumber ? "bg-slate-400" : "bg-green-700"
          } text-white px-4 py-2 rounded-lg`}
        >
          بعدی
        </button>
      </div>
    </div>
  );
};
export default Products;

export async function getStaticProps() {
  const response = await get("https://api.mediniom.com/api/v2/item?&size=20");
  return {
    props: {
      productsResponse: response.data,
    },
  };
}
