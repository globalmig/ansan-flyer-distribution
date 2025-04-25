import { Link } from "react-router-dom";
import { ButtonDefault } from "../components/ButtonDefault";
import { useEffect, useState } from "react";

export function CallRedirect() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 모바일 여부 판별
    const checkMobile = () => {
      setIsMobile(/Mobile|Android|iPhone/i.test(navigator.userAgent));
    };

    checkMobile();

    if (isMobile) {
      // 전환 추적 이벤트 실행
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "conversion", action: "call_button_click" });

      // 1초 후 전화 앱 실행
      setTimeout(() => {
        window.location.href = "tel:010-4509-8153";
      }, 1000);
    }
  }, [isMobile]);

  if (!isMobile) {
    // 데스크톱일 경우 전화번호를 안내
    return (
      <div className="flex flex-col items-center p-6 bg-white rounded-lg  max-w-sm mx-auto mt-20">
        <p className="text-lg font-semibold text-center">전화 연결은 모바일에서 가능합니다.</p>
        <p className="mt-2 text-gray-600 text-sm text-center">아래 번호로 직접 연락해주세요.</p>
        <p className="mt-3 text-xl font-bold text-blue-600">010-4509-8153</p>
        <Link to="/" className="mt-4">
          <ButtonDefault text="홈으로" />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg max-w-sm mx-auto mt-20">
      <p className="text-lg text-center">전화 연결 중입니다...</p>
      <Link to="/" className="mt-4">
        <ButtonDefault text="홈으로" />
      </Link>
    </div>
  );
}
