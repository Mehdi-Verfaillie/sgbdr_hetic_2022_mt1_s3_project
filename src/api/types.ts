export interface GetListResult<RecordType> {
  data: RecordType[];
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

enum RATING { }
