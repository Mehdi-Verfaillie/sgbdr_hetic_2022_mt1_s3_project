export interface GetListResult<RecordType> {
  results: RecordType[];
  total: number;
  pageCount: number;
}

export interface Movie {
  id: number;
  title: string;
  category: string;
  rating: RATING;
  amount: number;
  rental: number; // count()
}

enum RATING {
  PG =  "PG",
  G = "G",
  NC17 = "NC-17",
  PG13 = "PG-13",
  R = "R",
}
