import { useQuery } from "react-query";
import { defaultApi } from "../api";

export default function MainBanner() {
  let testImage;
  const { data, isLoading } = useQuery("test", defaultApi);
  console.log(data);
  if (!isLoading) {
    testImage = data?.COOKRCP01.row[0].ATT_FILE_NO_MK;
  }
  console.log(testImage);
  return (
    <div className="w-full h-[100vh] flex justify-center">
      <div className="max-w-7xl w-full h-full">
        <img className="w-full h-full" src={`${testImage}`} alt="" />
      </div>
    </div>
  );
}
