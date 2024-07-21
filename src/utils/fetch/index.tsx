import { filterData } from "../dataManipulation";
import { FetchDataParams } from "./types";

export const fetchData = ({
  currentIndex, 
  setImageList,
  setCurrentIndex, 
  setError 
}: FetchDataParams) => {
  
  try {
    fetch('/assets/MyPictures/data.json')
      .then(response => response.json())
      .then(data => filterData({ setCurrentIndex, setImageList, data, currentIndex }));
  } catch (err) {
    setError(true);
  }
};