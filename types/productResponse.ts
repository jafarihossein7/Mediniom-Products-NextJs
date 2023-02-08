import { RequestPagination } from "./requestPagination";
export interface ProductResponseType extends RequestPagination {
  content: ProductType[];
}
export type ProductType = {
  id: number;
  itemCode: string;
  faName: string;
  enName: string;
  image: string;
  price: number;
  priceCompare: null;
  itemGroup: ItemGroupType;
  categoryTitle: string;
  categorySlug: string;
  quantity: number;
  guaranty: ItemGroupType;
  selected: boolean;
};
export type ItemGroupType = {
  title: string;
  persianTitle: string;
};
export type GuarantyType = {
  title: string;
  persianTitle: string;
};


