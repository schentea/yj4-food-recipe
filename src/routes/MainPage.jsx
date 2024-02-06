export default function MainPage() {
  fetch(
    "https://openapi.foodsafetykorea.go.kr/api/3b3433ab775d49de81f9/COOKRCP01/json/1/5"
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(json.COOKRCP01.row);
    });
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="max-w-7xl w-full h-full flex justify-center items-center bg-red-500"></div>
    </div>
  );
}
