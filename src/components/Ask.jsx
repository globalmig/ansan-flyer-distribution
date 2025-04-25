import { Link } from "react-router-dom";
import { ButtonDefault } from "./ButtonDefault";
import { copy } from "../hook/copy";

export function Ask() {
  return (
    <div className="flex flex-col justify-center items-center  py-10 w-full bg-[#F9F9FA] mt-20 mx-4">
      <div className="flex flex-col items-center justify-center text-subtitle mx-4">
        <p className="text-2xl font-semibold mb-4">도움이 필요하신가요?</p>
        <p className="font-light text-center">인쇄부터 배포까지 한 번에! 지금 문의하세요!</p>
      </div>
      {/* 숨겨진 input 필드 추가 */}
      <input type="text" id="copyNumber" value="010-4960-2002" readOnly className="absolute opacity-0" />

      <Link to="/call" onClick={copy} tabIndex="-1">
        <ButtonDefault text="문의하기" />
      </Link>
    </div>
  );
}
