import useImageData from './useImageData';
import { getImage } from 'gatsby-plugin-image';

export default function useImage(fileName) {
  const imageDataList = useImageData();
  const imageData = imageDataList.find(
    (data) => data.images.fallback.src.indexOf(fileName) > -1
  );
  return getImage(imageData);
}
