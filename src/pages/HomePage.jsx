import { Link } from "react-router-dom";

import { ButtonDefault } from "../components/ButtonDefault";
import { copy } from "../hook/copy";
import { Gallery } from "../components/Gallery";

export function HomePage() {
  const contentData = [
    { link: "https://blog.naver.com/ruddls0920/223105499331", image: "../images/ansan/ansan01.jpg", alt: "안산 종합광고 배포된 아파트 우편함", text: "전단지 배포 전문 >" },
    { link: "https://blog.naver.com/ruddls0920/223087719414", image: "../images/ansan/ansan02.jpg", alt: "안산 종합광고 배포된 아파트 우편함", text: "전단지 배포 전문 >" },
    { link: "https://blog.naver.com/ruddls0920/223044937549", image: "../images/ansan/ansan03.jpg", alt: "안산 종합광고 배포된 아파트 대문", text: "전단지 배포 전문 >" },
    { link: "https://blog.naver.com/ruddls0920/223040289834", image: "../images/ansan/ansan04.jpg", alt: "안산 종합광고 배포된 아파트 대문", text: "전단지 배포 전문 >" },
    { link: "https://blog.naver.com/ruddls0920/221505150796", image: "../images/print/item01.jpg", alt: "축구관련 전단지", text: "다양한 전단지 인쇄 >" },
    { link: "https://blog.naver.com/ruddls0920/221351319449", image: "../images/print/item02.jpg", alt: "이태리부대찌개 전단지", text: "인쇄 전문업체 >" },
    { link: "https://blog.naver.com/ruddls0920/222421908304", image: "../images/print/item03.jpg", alt: "이태리부대찌개 전단지", text: "인쇄 전문업체 >" },
    { link: "https://blog.naver.com/ruddls0920/221366175500", image: "../images/print/item04.jpg", alt: "이태리부대찌개 전단지", text: "인쇄 전문업체 >" },
  ];

  return (
    <div className="mx-4 mt-4">
      <main id="main-content" role="main" className="flex flex-col items-start  justify-center w-full max-w-[1200px] mx-auto">
        <section className="content-section w-full mt-[110px] mb-14 flex flex-row md:flex-col mx-0 ">
          <figure className="flex flex-col justify-between items-center  md:items-start  mx-auto  md:flex-row md:justify-between sm:justify-center gap-2 md:gap-10">
            <img className="bg-black w-full  sm:max-w-[586px] h-auto rounded-xl" src="/images/main_banner2.png" alt="안산전단지배포" />

            <figcaption className="flex flex-col justify-center text-center md:text-start items-center  md:items-start w-full  mt-6 sm:mt-0">
              <h2 className="section-title text-5xl md:text-7xl font-semibold ">안산 전단지 배포</h2>
              <br />
              <p className=" text-subtitle text-2xl sm:text-4xl mb-2">고객 만족도 우수!</p>
              <p className=" text-subtitle text-2xl sm:text-4xl mb-8">제작 / 배포 전문 업체</p>
              <p className=" text-subtitle text-sm  sm:text-base font-normal leading-6">
                안산 전지역은 물론, <strong className="text-[#0000FE] text-xl">목감·배곧·시화·화성</strong>까지 지역 기반으로 전단지 디자인부터 인쇄, 배포까지 모든 과정을 직접 정성껏 진행하고
                있습니다.
              </p>
              <p className=" text-subtitle text-sm sm:text-base font-normal leading-6 mt-4">
                성실히! 고객 한 분 한 분의 만족을 최우선으로 생각하며 <strong className="text-[#0000FE] text-xl">오랜 경험과 노하우</strong>를 바탕으로 정확하고 신속한 서비스를 제공합니다.
              </p>
              <p className=" text-subtitle text-sm sm:text-base font-normal leading-6 mt-4 ">믿고 맡길 수 있는 전단지 파트너, 안산전단지배포입니다.</p>

              {/* 숨겨진 input 필드 추가 */}
              <input type="text" id="copyNumber" value="010-4509-8153" readOnly className="absolute opacity-0" />
              <Link to="/call" onClick={copy} tabIndex="-1">
                <p className="text-xl md:text-2xl mt-10">전화문의: 010-4509-8153</p>
              </Link>
              {/* 숨겨진 input 필드 추가 */}
              <input type="text" id="copyNumber" value="010-4509-8153" readOnly className="absolute opacity-0" />
              <Link to="/call" onClick={copy} tabIndex="-1">
                <ButtonDefault text="전단지 제작/ 배포 문의하기" />
              </Link>
            </figcaption>
          </figure>
        </section>

        <section className="content-section flex flex-wrap gap-6 mx-auto w-full max-w-[1200px] justify-center border-t-2 pt-16">
          {contentData.map((item, index) => (
            <div key={index} className="flex flex-wrap gap-6 justify-center items-center max-w-[1200px]" target="_blank">
              <Gallery link={item.link} image={item.image} alt={item.alt} />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
