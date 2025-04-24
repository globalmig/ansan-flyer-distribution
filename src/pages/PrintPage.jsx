import { Link } from "react-router-dom";
import { Ask } from "../components/Ask";
import { Gallery } from "../components/Gallery";

export function PrintPage() {
  const dataList = [
    { link: "https://blog.naver.com/ruddls0920/221505150796", image: "../images/print/item01.jpg", alt: "축구관련 전단지" },
    { link: "https://blog.naver.com/ruddls0920/221351319449", image: "../images/print/item02.jpg", alt: "이태리부대찌개 전단지" },
    { link: "https://blog.naver.com/ruddls0920/222421908304", image: "../images/print/item03.jpg", alt: "초밥집 전단지" },
    { link: "https://blog.naver.com/ruddls0920/221366175500", image: "../images/print/item04.jpg", alt: "떡국, 만두집 전단지" },
  ];
  return (
    <div className="mx-4 ">
      <div className="mb-14 mt-32">
        <h1 className="mt-24 text-center flex justify-center items-center text-2xl md:text-4xl font-semibold">다양한 업종, 다양한 스타일!</h1>
        <p className="flex text-center justify-center md:text-base text-sm mt-8 text-subtitle">맞춤 제작된 전단지를 한눈에 확인해보세요.</p>
      </div>

      {/* 갤러리 start*/}
      <div className="flex flex-wrap gap-6 justify-center items-center w-[320px] md:w-[760px] lg:w-[1200px] mx-auto ">
        {dataList.map(({ link, image, alt }, index) => (
          <div key={index} className="flex flex-wrap gap-6 justify-center items-center max-w-[1200px]" target="_blank">
            <Gallery link={link} image={image} alt={alt} />
          </div>
        ))}
      </div>
      {/* 갤러리 end*/}

      <Ask />
    </div>
  );
}
