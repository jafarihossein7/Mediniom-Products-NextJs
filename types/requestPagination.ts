export interface RequestPagination {
  pageable: PageableType;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: SortType;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}
type PageableType = {
  sort: SortType;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
};
type SortType = {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};
