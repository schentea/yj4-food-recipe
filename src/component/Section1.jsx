export default function Section1() {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="max-w-7xl h-[700px] w-full flex flex-col justify-center">
        <div className="w-full h-[13%] flex bg-blue-100 text-center">
          <div className="w-[25%] h-full border-blue-400 items-center justify-center">
            <h3>밥</h3>
          </div>
          <div className="w-[25%] h-full items-center justify-center">
            <h3>국</h3>
          </div>
          <div className="w-[25%] h-full items-center justify-center">
            <h3>반찬</h3>
          </div>
          <div className="w-[25%] h-full items-center justify-center">
            <h3>후식</h3>
          </div>
        </div>
        <div className="w-full h-[87%] bg-red-500"></div>
      </div>
    </div>
  );
}
