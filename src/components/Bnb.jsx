import { Link } from "react-router-dom";

export function Bnb() {
  return (
    <div className="flex gap-10 mx-auto w-full max-w-[1200px] justify-center h-[198px] pt-5 mt-10 border-t-2">
      <div className="flex flex-col gap-[10px] text-sm mx-4">
        <span className="text-base font-semibold text-gray-900">안산전단지배포</span>

        <p className="flex flex-wrap text-gray-700">경기도 안산시 단원구 이삭2길 25, 103호(고잔동) 중앙역 로데오거리입구</p>
        <p className="flex flex-wrap text-gray-700">사업자등록번호: 783-09-02090</p>
        <a className="flex items-center gap-2 text-gray-700" href="tel:01045098153">
          010-4509-8153
        </a>
        <p className="flex flex-wrap text-gray-700">대표자: 김호중</p>
      </div>
      <div className="flex flex-col">
        <p className="text-base font-semibold text-gray-900">Social</p>
        <Link to={"https://blog.naver.com/PostList.naver?blogId=ruddls0920&categoryNo=30"} className="text-gray-700">
          Naver Blog
        </Link>
      </div>
    </div>
  );
}
