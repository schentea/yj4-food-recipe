import { useQuery } from "react-query";
import { defaultApi } from "../api";
import { useEffect, useState } from "react";

export default function Section1() {
  const [foodImg1, setFoodImg1] = useState("");
  const [foodImg2, setFoodImg2] = useState("");
  const [index1, setIndex1] = useState(parseInt(Math.random() * 100));
  const [index2, setIndex2] = useState(parseInt(Math.random() * 100));

  console.log(index1);
  console.log(index2);

  const { data, isLoading, refetch } = useQuery("test", defaultApi);

  useEffect(() => {
    const findRiceImage = () => {
      let newIndex1 = parseInt(Math.random() * 100);
      let newIndex2 = parseInt(Math.random() * 100);

      while (!isLoading) {
        if (
          data?.COOKRCP01.row[newIndex1].RCP_PAT2 === "밥" &&
          data?.COOKRCP01.row[newIndex2].RCP_PAT2 === "밥"
        ) {
          setFoodImg1(data?.COOKRCP01.row[newIndex1].ATT_FILE_NO_MK);
          setFoodImg2(data?.COOKRCP01.row[newIndex2].ATT_FILE_NO_MK);
          setIndex1(newIndex1);
          setIndex2(newIndex2);
          break;
        } else {
          newIndex1 = parseInt(Math.random() * 100);
          newIndex2 = parseInt(Math.random() * 100);
          refetch(); // API 데이터 다시 불러오기
        }
      }
    };

    if (!isLoading) {
      findRiceImage();
    }
  }, [data, isLoading, refetch]);

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="max-w-7xl h-[700px] w-full flex flex-col justify-center">
        <div className="w-full h-[13%] flex bg-blue-100 border border-gray-300 text-2xl">
          <div className="w-[25%] h-full flex items-center justify-center border-r border-gray-300">
            <h3>밥</h3>
          </div>
          <div className="w-[25%] h-full flex items-center justify-center border-r border-gray-300">
            <h3>국</h3>
          </div>
          <div className="w-[25%] h-full flex items-center justify-center border-r border-gray-300">
            <h3>반찬</h3>
          </div>
          <div className="w-[25%] h-full flex items-center justify-center">
            <h3>후식</h3>
          </div>
        </div>
        <div className="w-full h-[87%] bg-red-500 flex justify-cente">
          <div className="w-full h-full flex justify-center space-x-8 mt-10">
            <div className="w-[500px] h-[90%] flex justify-center">
              <img
                className="w-[500px] h-[350px] object-cover"
                src={foodImg1}
                alt=""
              />
            </div>
            <div className="w-[500px] h-[90%] flex justify-center">
              <img
                className="w-[500px] h-[350px] object-cover"
                src={foodImg2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
