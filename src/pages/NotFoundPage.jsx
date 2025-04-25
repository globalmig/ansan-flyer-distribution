import { ButtonDefault } from "../components/ButtonDefault";
import React from "react";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="flex flex-col text-center justify-center items-center h-screen max-h-[600px] ">
      <h1>404 - 페이지를 찾을 수 없습니다.</h1>
      <p>존재하지 않는 주소입니다.</p>

      <Link to="/">
        <ButtonDefault text="메인화면 이동" />
      </Link>
    </div>
  );
}
