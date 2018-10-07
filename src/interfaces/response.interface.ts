export interface Response<T> {
  data: T;
  status: number,
  message: string,
  timeStamp: number
}