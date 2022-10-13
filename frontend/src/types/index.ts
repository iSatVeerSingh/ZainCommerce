export interface PageView {
  pageType?: string;
  view?: 'grid' | 'list';
}

export interface ProductType {
  id: string;
  title: string;
  imgUrl: string;
  actualPrice?: string | number;
  discount?: string | number;
  sellingPrice: string | number;
  inStock?: boolean;
  rating?: number;
  ratingCount?: string | number;
}
