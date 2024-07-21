import { FilterDataParams } from "./types";

export const filterData = ({ 
  setCurrentIndex, 
  setImageList, 
  data, 
  currentIndex 
}: FilterDataParams)  => {
  const filterData = data.slice(currentIndex, currentIndex + 5);

  if (filterData.length > 0) {
    setImageList(prevList => {
      const existingIds = new Set(prevList.map(image => image.id));
      const newImages = filterData.filter(image => !existingIds.has(image.id));
      return [...prevList, ...newImages];
    });
    setCurrentIndex(currentIndex + 5);
  }
};