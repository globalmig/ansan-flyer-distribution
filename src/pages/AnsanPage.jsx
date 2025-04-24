import { Ask } from "../components/Ask";
import { Gallery } from "../components/Gallery";

export function AnsanPage() {
  const dataList = [
    { link: "https://blog.naver.com/ruddls0920/223105499331", image: "../images/ansan/ansan01.jpg", alt: "안산 종합광고 배포된 아파트 우편함" },
    { link: "https://blog.naver.com/ruddls0920/223087719414", image: "../images/ansan/ansan02.jpg", alt: "안산 종합광고 배포된 아파트 우편함" },
    { link: "https://blog.naver.com/ruddls0920/223044937549", image: "../images/ansan/ansan03.jpg", alt: "안산 종합광고 배포된 아파트 대문" },
    { link: "https://blog.naver.com/ruddls0920/223040289834", image: "../images/ansan/ansan04.jpg", alt: "안산 종합광고 배포된 아파트 대문" },
  ];
  return (
    <div className="mx-4 ">
      <div className="mb-14 mt-32">
        <h1 className="mt-24 text-center flex justify-center items-center text-2xl md:text-4xl font-semibold">실제 사례를 확인하세요!</h1>
        <p className="flex text-center justify-center md:text-base text-sm mt-8 text-subtitle">효과적인 전단지 배포 사례를 확인해보세요. </p>
      </div>

      {/* 갤러리 start*/}
      <div className="flex flex-wrap gap-6 justify-center items-center w-[320px] md:w-[760px] lg:w-[1200px] mx-auto ">
        {dataList.map(({ link, image, alt }, index) => (
          <div key={index} className="flex flex-wrap gap-6 justify-center items-center max-w-[1200px]">
            <Gallery link={link} image={image} alt={alt} />
          </div>
        ))}
      </div>
      {/* 갤러리 end*/}

      <Ask />
    </div>
  );
}
