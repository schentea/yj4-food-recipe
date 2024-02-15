const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = "https://openapi.foodsafetykorea.go.kr";

// fetch(`https://openapi.foodsafetykorea.go.kr/api/${apiKey}/COOKRCP01/json/1/5`)
//   .then((res) => res.json())
//   .then((json) => {
//     console.log(json.COOKRCP01.row);
//   });

export async function defaultApi() {
  try {
    return await fetch(`${baseUrl}/api/${apiKey}/COOKRCP01/json/1/5`).then(
      (res) => res.json()
    );
  } catch (error) {
    console.log(error);
  }
}
