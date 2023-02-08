export type ProductDetailsType = {
  itemCode: string;
  faName: string;
  enName: string;
  itemGroup: Item;
  itemCategory: ItemCategory;
  model: null;
  brand: string;
  irc: null;
  representationCompany: null;
  representationCompanyCode: null;
  creatorCompany: null;
  creatorCountry: string;
  expertDescription: null;
  attributes: string;
  properties: string[];
  imageList: ImageList[];
  shopItemList: ShopItemList[];
  hasActiveShop: boolean;
  dynamicFilters: any[];
  selected: boolean;
  umdnscode: null;
};

export type ImageList = {
  id: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  main: boolean;
};

export type ItemCategory = {
  id: number;
  title: string;
  slug: string;
  metaTitle: null | string;
  metaDescription: string;
  footerTitle: string;
  footerDescription: string;
  iconSvg: null | string;
  parentItemCategory: ItemCategory | null;
};

export type Item = {
  title: string;
  persianTitle: string;
};

export type ShopItemList = {
  id: number;
  price: number;
  priceCompare: null;
  quantity: number;
  itemGuaranty: Item;
  itemAfterSaleService: Item;
  itemShippingMethod: Item;
  shop: Shop;
  createdAt: Date;
  updatedAt: Date;
};

export type Shop = {
  id: number;
  image: null;
  name: string;
  description: string;
  city: City;
  telephoneNumber: string;
  postalCode: string;
  address: string;
  status: string;
  itemsCount: number;
  createdAt: Date;
  updatedAt: Date;
  open: boolean;
  shopCode: string;
};

export type City = {
  id: number;
  name: string;
  province: Province;
};

export type Province = {
  id: number;
  name: string;
};
