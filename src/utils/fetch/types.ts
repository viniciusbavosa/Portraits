import { ImageProps } from "../../layout/Photos/PhotosContainer/types";

export interface FetchDataParams {
  currentIndex: number;
  setImageList: React.Dispatch<React.SetStateAction<ImageProps[]>>;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}