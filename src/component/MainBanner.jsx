import { useQuery } from "react-query";
import { defaultApi } from "../api";
import Banner1 from "../Img/Banner1.jpg";

export default function MainBanner() {
  let testImage;
  const { data, isLoading } = useQuery("test", defaultApi);

  if (!isLoading) {
    testImage = data?.COOKRCP01.row[0].ATT_FILE_NO_MK;
  }
  console.log(data);

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center">
      <div className="w-full h-full">
        <img className="w-full h-full" src={Banner1} alt="" />
      </div>
    </div>
  );
}
