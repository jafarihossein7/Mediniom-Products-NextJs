"use client";
import React, { FC } from "react";
import { ProductType } from "types/productResponse";
import Link from "next/link";
import Image from "next/image";

type Props = {
  product: ProductType;
};
const Product: FC<Props> = ({ product }) => {
  return (
    <Link href={`/${product.itemCode}`} prefetch={false}>
      <div className="container border bg-white p-8 rounded-xl">
        <div className="top">
          <Image src={`${product.image}`} alt="img" width={250} height={250} />
        </div>
        <div className="bottom grid gap-y-4">
          <div className="title">{product.faName}</div>
          <div className="price">{product.price} تومان</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
