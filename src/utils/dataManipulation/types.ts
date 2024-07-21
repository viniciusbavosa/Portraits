import { ImageProps } from "../../layout/Photos/PhotosContainer/types";

export interface FilterDataParams {
  setImageList: React.Dispatch<React.SetStateAction<ImageProps[]>>;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  data: ImageProps[];
  currentIndex: number;
}