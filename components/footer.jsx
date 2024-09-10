import Image from "next/image";
import RadicalLogo from "@/public/images/radical_logo.svg";
import MotulLogo from "@/public/images/motul_logo.jpg";
import HankookLogo from "@/public/images/hankook_logo.svg";
import RPELogo from "@/public/images/RPE_logo.svg";

export const Footer = () => {
  return (
    <footer className="relative border-t border-white border-opacity-20 z-30 flex flex-col justify-center text-white bg-gradient-to-b from-[#121212] to-black">
      <div className="container">
        <div className="flex flex-col w-full gap-y-6 py-12">
          <h1 className="font-futura_pt_heavy text-2xl">OUR GLOBAL PARTNERS</h1>
          <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <div className="flex flex-wrap gap-10">
            <Image
              src={MotulLogo}
              className="w-auto cursor-pointer justify-center"
              alt="MOTUL logo"
            />
            <Image
              src={HankookLogo}
              className="w-auto cursor-pointer justify-center"
              alt="Hankook logo"
            />
            <Image
              src={MotulLogo}
              className="w-auto cursor-pointer justify-center"
              alt="MOTUL logo"
            />
            <Image
              src={RPELogo}
              className="w-auto cursor-pointer justify-center"
              alt="RPE logo"
            />
            <Image
              src={HankookLogo}
              className="w-auto cursor-pointer justify-center"
              alt="Hankook logo"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-y-8 border-t border-white border-opacity-10 py-12">
          <div>
            <h1 className="mb-2 font-futura_pt_heavy text-2xl">
              JOIN OUR NEWSLETTER
            </h1>
            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          </div>
          <div>
            <form className="flex w-full font-futura_pt_light">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="px-4 py-2 min-w-56 focus:ring-2 focus:ring-white/30 bg-black border rounded-l-md border-[#8C8C8C] focus:border-white focus:text-white max-lg:w-full"
              />
              <button
                type="submit"
                className="flex items-center justify-center px-4 py-2 transition-all bg-black border border-l-0 rounded-r-md border-[#8C8C8C] hover:text-black hover:bg-white gap-x-2 ease-in-out duration-300"
              >
                <span>Submit</span>
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-16 border-t border-white border-opacity-10 py-16">
          <div className="flex items-start flex-col gap-y-6 w-[30%]">
            <Image src={RadicalLogo} className="h-10" alt="Radical logo" />
            <p className="text-white">
              Donec ullamcorper nulla non metus auctor fringilla. Sed posuere
              consectetur est at.
            </p>
            <div>
              <p className="text-white">24 Ivatt Way Business Park</p>
              <p className="text-white">Westwood</p>
              <p className="text-white">Peterborough</p>
              <p className="text-white">PE3 7PG</p>
              <p className="text-white">Tel: +44 (0) 1733 331 616</p>
            </div>
          </div>
          <div className=" grid grid-cols-5 gap-x-8">
            <div className="flex flex-col gap-y-4">
              <p className="text-[#B1B3B3]">Cars</p>
              <ul className="flex flex-col gap-y-2 text-lg font-futura_pt_book">
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  All cars
                </li>
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  SR1
                </li>
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  SR3
                </li>
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  SR10
                </li>
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  RXC SPYDER
                </li>
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  RXC 600R
                </li>
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  RXC GT3
                </li>
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  PROJECT 25
                </li>
              </ul>
            </div>
            <ul className="flex flex-col gap-y-4">
              <p className="text-[#B1B3B3]">Company</p>
              <ul className="flex flex-col gap-y-2 text-lg font-futura_pt_book">
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  News
                </li>
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  Careers
                </li>
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  Dealers
                </li>
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  Dealer Parts
                </li>
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  Contact
                </li>
              </ul>
            </ul>
            <div className="flex flex-col gap-y-4">
              <p className="text-[#B1B3B3]">Resources</p>
              <ul className="flex flex-col gap-y-2 text-lg font-futura_pt_book">
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  Newsletter
                </li>
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  Downloads
                </li>
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  Media
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <p className="text-[#B1B3B3]">Legal</p>
              <ul className="flex flex-col gap-y-2 text-lg font-futura_pt_book">
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  Terms & Conditions
                </li>
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  Privacy
                </li>
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  Cookie Policy
                </li>
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  Payment terms & conditions
                </li>
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  Credits
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <p className="text-[#B1B3B3]">Social</p>
              <ul className="flex flex-col gap-y-2 text-lg font-futura_pt_book">
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  LinkedIn
                </li>
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  Facebook
                </li>
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  Youtube
                </li>
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  Twitter
                </li>
                <li className="hover:text-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300">
                  Instagram
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between border-t border-white border-opacity-10 pt-8 pb-12 text-[#B1B3B3]">
          <span className="text-base font_futura_light">
            © 2023 Radical Motorsport
          </span>
          <span className="flex gap-x-4">
            <svg
              className="w-6 h-6 fill-[#B1B3B3] hover:fill-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300"
              viewBox="0 0 24 25"
            >
              <path d="M0 1.7793C0 0.829803 0.789 0.0603027 1.7625 0.0603027H22.2375C23.211 0.0603027 24 0.829803 24 1.7793V22.3413C24 23.2908 23.211 24.0603 22.2375 24.0603H1.7625C0.789 24.0603 0 23.2908 0 22.3413V1.7793ZM7.4145 20.1513V9.3138H3.813V20.1513H7.4145ZM5.6145 7.8333C6.87 7.8333 7.6515 7.0023 7.6515 5.9613C7.629 4.8978 6.8715 4.0893 5.6385 4.0893C4.4055 4.0893 3.6 4.8993 3.6 5.9613C3.6 7.0023 4.3815 7.8333 5.5905 7.8333H5.6145ZM12.9765 20.1513V14.0988C12.9765 13.7748 13.0005 13.4508 13.0965 13.2198C13.356 12.5733 13.9485 11.9028 14.9445 11.9028C16.248 11.9028 16.7685 12.8958 16.7685 14.3538V20.1513H20.37V13.9353C20.37 10.6053 18.594 9.0573 16.224 9.0573C14.313 9.0573 13.4565 10.1073 12.9765 10.8468V10.8843H12.9525C12.9605 10.8718 12.9685 10.8593 12.9765 10.8468V9.3138H9.3765C9.4215 10.3308 9.3765 20.1513 9.3765 20.1513H12.9765Z" />
            </svg>
            <svg
              className="w-6 h-6 fill-[#B1B3B3] hover:fill-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300"
              viewBox="0 0 20 21"
            >
              <path d="M20 10.0603C20 4.5403 15.52 0.0603027 10 0.0603027C4.48 0.0603027 0 4.5403 0 10.0603C0 14.9003 3.44 18.9303 8 19.8603V13.0603H6V10.0603H8V7.5603C8 5.6303 9.57 4.0603 11.5 4.0603H14V7.0603H12C11.45 7.0603 11 7.5103 11 8.0603V10.0603H14V13.0603H11V20.0103C16.05 19.5103 20 15.2503 20 10.0603Z" />
            </svg>
            <svg
              className="w-6 h-6 fill-[#B1B3B3] hover:fill-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300"
              viewBox="0 0 24 17"
            >
              <path d="M12.0765 0.0588379H12.21C13.443 0.0633379 19.6905 0.108338 21.375 0.561338C21.8842 0.699591 22.3483 0.969072 22.7207 1.34285C23.0932 1.71663 23.361 2.18161 23.4975 2.69134C23.649 3.26134 23.7555 4.01584 23.8275 4.79434L23.8425 4.95034L23.8755 5.34034L23.8875 5.49634C23.985 6.86734 23.997 8.15134 23.9985 8.43184V8.54434C23.997 8.83534 23.9835 10.2063 23.8755 11.6343L23.8635 11.7918L23.85 11.9478C23.775 12.8058 23.664 13.6578 23.4975 14.2848C23.3615 14.7948 23.0938 15.26 22.7212 15.6338C22.3487 16.0077 21.8844 16.277 21.375 16.4148C19.635 16.8828 13.0215 16.9158 12.105 16.9173H11.892C11.4285 16.9173 9.5115 16.9083 7.5015 16.8393L7.2465 16.8303L7.116 16.8243L6.8595 16.8138L6.603 16.8033C4.938 16.7298 3.3525 16.6113 2.622 16.4133C2.11273 16.2756 1.6486 16.0065 1.27609 15.633C0.903575 15.2594 0.63577 14.7945 0.4995 14.2848C0.333 13.6593 0.222 12.8058 0.147 11.9478L0.135 11.7903L0.123 11.6343C0.0489714 10.6179 0.0079498 9.5994 0 8.58034L0 8.39584C0.003 8.07334 0.015 6.95884 0.096 5.72884L0.1065 5.57434L0.111 5.49634L0.123 5.34034L0.156 4.95034L0.171 4.79434C0.243 4.01584 0.3495 3.25984 0.501 2.69134C0.63704 2.18141 0.904743 1.7162 1.27727 1.34236C1.6498 0.968519 2.11405 0.699176 2.6235 0.561338C3.354 0.366338 4.9395 0.246338 6.6045 0.171338L6.8595 0.160838L7.1175 0.151838L7.2465 0.147338L7.503 0.136838C8.93056 0.0909 10.3587 0.0653972 11.787 0.060338H12.0765V0.0588379ZM9.6 4.87384V12.1008L15.8355 8.48884L9.6 4.87384Z" />
            </svg>
            <svg
              className="w-6 h-6 fill-[#B1B3B3] hover:fill-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300"
              viewBox="0 0 22 18"
            >
              <path d="M21.46 2.0603C20.69 2.4103 19.86 2.6403 19 2.7503C19.88 2.2203 20.56 1.3803 20.88 0.370303C20.05 0.870303 19.13 1.2203 18.16 1.4203C17.37 0.560303 16.26 0.0603027 15 0.0603027C12.65 0.0603027 10.73 1.9803 10.73 4.3503C10.73 4.6903 10.77 5.0203 10.84 5.3303C7.27998 5.1503 4.10998 3.4403 1.99998 0.850303C1.62998 1.4803 1.41998 2.2203 1.41998 3.0003C1.41998 4.4903 2.16998 5.8103 3.32998 6.5603C2.61998 6.5603 1.95998 6.3603 1.37998 6.0603V6.0903C1.37998 8.1703 2.85998 9.9103 4.81998 10.3003C4.19071 10.4725 3.53007 10.4965 2.88998 10.3703C3.16158 11.2228 3.69352 11.9687 4.41099 12.5032C5.12847 13.0378 5.99543 13.334 6.88998 13.3503C5.37361 14.5507 3.49397 15.1996 1.55998 15.1903C1.21998 15.1903 0.879978 15.1703 0.539978 15.1303C2.43998 16.3503 4.69998 17.0603 7.11998 17.0603C15 17.0603 19.33 10.5203 19.33 4.8503C19.33 4.6603 19.33 4.4803 19.32 4.2903C20.16 3.6903 20.88 2.9303 21.46 2.0603V2.0603Z" />
            </svg>
            <svg
              className="w-6 h-6 fill-[#B1B3B3] hover:fill-[#F2CB13] cursor-pointer ease-in-out transition-all duration-300"
              viewBox="0 0 20 21"
            >
              <path d="M5.8 0.0603027H14.2C17.4 0.0603027 20 2.6603 20 5.8603V14.2603C20 15.7986 19.3889 17.2738 18.3012 18.3615C17.2135 19.4492 15.7383 20.0603 14.2 20.0603H5.8C2.6 20.0603 0 17.4603 0 14.2603V5.8603C0 4.32205 0.61107 2.84679 1.69878 1.75908C2.78649 0.671373 4.26174 0.0603027 5.8 0.0603027M5.6 2.0603C4.64522 2.0603 3.72955 2.43959 3.05442 3.11472C2.37928 3.78985 2 4.70552 2 5.6603V14.4603C2 16.4503 3.61 18.0603 5.6 18.0603H14.4C15.3548 18.0603 16.2705 17.681 16.9456 17.0059C17.6207 16.3308 18 15.4151 18 14.4603V5.6603C18 3.6703 16.39 2.0603 14.4 2.0603H5.6ZM15.25 3.5603C15.5815 3.5603 15.8995 3.692 16.1339 3.92642C16.3683 4.16084 16.5 4.47878 16.5 4.8103C16.5 5.14182 16.3683 5.45977 16.1339 5.69419C15.8995 5.92861 15.5815 6.0603 15.25 6.0603C14.9185 6.0603 14.6005 5.92861 14.3661 5.69419C14.1317 5.45977 14 5.14182 14 4.8103C14 4.47878 14.1317 4.16084 14.3661 3.92642C14.6005 3.692 14.9185 3.5603 15.25 3.5603ZM10 5.0603C11.3261 5.0603 12.5979 5.58709 13.5355 6.52477C14.4732 7.46245 15 8.73422 15 10.0603C15 11.3864 14.4732 12.6582 13.5355 13.5958C12.5979 14.5335 11.3261 15.0603 10 15.0603C8.67392 15.0603 7.40215 14.5335 6.46447 13.5958C5.52678 12.6582 5 11.3864 5 10.0603C5 8.73422 5.52678 7.46245 6.46447 6.52477C7.40215 5.58709 8.67392 5.0603 10 5.0603M10 7.0603C9.20435 7.0603 8.44129 7.37637 7.87868 7.93898C7.31607 8.50159 7 9.26465 7 10.0603C7 10.856 7.31607 11.619 7.87868 12.1816C8.44129 12.7442 9.20435 13.0603 10 13.0603C10.7956 13.0603 11.5587 12.7442 12.1213 12.1816C12.6839 11.619 13 10.856 13 10.0603C13 9.26465 12.6839 8.50159 12.1213 7.93898C11.5587 7.37637 10.7956 7.0603 10 7.0603Z" />
            </svg>
          </span>
        </div>
      </div>
    </footer>
  );
};
