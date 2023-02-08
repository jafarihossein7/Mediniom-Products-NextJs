import { GetStaticProps, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ProductDetailsType } from "types/productDetails";
import { ProductGetStaticPathType } from "types/productGetStaticPaths";
import { get } from "../../../modules/httprequest";
import { NextPage } from "next";

type Props = {
  product: ProductDetailsType;
};

const ProductDetail: NextPage<Props> = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="container border bg-white p-8 rounded-xl w-96 m-10">
      <div className="top">
        <img
          src={product.imageList[0].image}
          alt="img"
          width={250}
          height={250}
        />
      </div>
      <div className="bottom grid gap-y-4">
        <div className="title">{product.faName}</div>
        <div className="price">{product.shopItemList[0].price}</div>
      </div>
    </div>
  );
};
export default ProductDetail;

// export async function getStaticPaths() {
//   const response = await get(
//     "https://api.mediniom.com/api/v2/general/index-items"
//   );
//   let lists: ProductGetStaticPathType[] = response.data;
//   let paths = lists.map((product) => {
//     return {
//       params: {
//         productId: `${product.itemCode}`,
//       },
//     };
//   });
//   paths = paths.slice(0, 10);
//   return {
//     paths,
//     fallback: true,
//   };
// }

// export const getStaticProps: GetStaticProps = async (context) => {
//   try {
//     const { productId } = context.params!;
//     const response = await get(
//       `https://api.mediniom.com/api/v2/item/${productId}`
//     );
//     const product = response.data;
//     return {
//       props: {
//         product,
//       },
//     };
//   } catch (error) {
//     return { notFound: true };
//   }
// };

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { productId } = context.params!;
  const response = await get(
    `https://api.mediniom.com/api/v2/item/${productId}`
  );
  const product = response.data;
  return {
    props: {
      product,
    },
  };
};
