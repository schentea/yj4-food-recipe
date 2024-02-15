export default function Header() {
  return (
    <div className="w-full h-12 flex justify-center items-center bg-slate-700">
      <div className="max-w-7xl w-full flex">
        {/* logo */}
        <div className="w-[30%] flex justify-center">
          <h2>Logo</h2>
        </div>
        {/* menu */}
        <div className="w-[70%] flex justify-center space-x-5 text-white">
          <div className="pt-2 pb-2 pr-20 pl-20 border border-black-1">
            <h3>공지사항</h3>
          </div>
          <div className="pt-2 pb-2 pr-20 pl-20 border border-black-1">
            <h3>게시판</h3>
          </div>
          <div className="pt-2 pb-2 pr-20 pl-20 border border-black-1">
            <h3>레시피</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
