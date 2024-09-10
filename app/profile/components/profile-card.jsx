import Image from "next/image";
import UserProfile from "@/public/images/user_profile.jpg";

export const ProfileCard = () => (
  <div className="relative bg-[#161616] px-8 pb-8 pt-32 flex flex-col items-center gap-y-10 text-white border border-1 rounded-lg border-[#8C8C8C] border-opacity-10">
    <div className="w-48 overflow-hidden absolute -top-24">
      <div className="relative flex justify-center">
        <Image
          className="rounded-full border border-3 border-[#8C8C8C]"
          src={UserProfile}
          alt="User avatar"
        />
        <div className="border border-1 border-[#8C8C8C] z-30 absolute bottom-2 rounded-full bg-black p-2 hover:opacity-80 cursor-pointer transition-all ease-in-out duration-300">
          <svg className="fill-[#F2CB13] w-3 h-3" viewBox="0 0 10 11">
            <path d="M9.71813 2.49019L7.57016 0.341749C7.48088 0.252425 7.37486 0.181567 7.25818 0.133224C7.14151 0.0848801 7.01645 0.0599976 6.89015 0.0599976C6.76385 0.0599976 6.63879 0.0848801 6.52211 0.133224C6.40544 0.181567 6.29942 0.252425 6.21014 0.341749L0.282079 6.27029C0.192469 6.35931 0.121424 6.46524 0.0730652 6.58193C0.0247058 6.69862 -5.97045e-06 6.82375 0.000362645 6.95006V9.09851C0.000362645 9.35351 0.101662 9.59807 0.281976 9.77838C0.46229 9.95869 0.706849 10.06 0.961851 10.06H3.1103C3.23661 10.0603 3.36173 10.0356 3.47841 9.98726C3.5951 9.9389 3.70103 9.86787 3.79007 9.77828L9.71813 3.84974C9.89838 3.66943 9.99964 3.42492 9.99964 3.16997C9.99964 2.91501 9.89838 2.6705 9.71813 2.49019ZM3.02905 8.90621H1.15415V7.03131L5.1924 2.99305L7.0673 4.86796L3.02905 8.90621ZM7.88457 4.05069L6.00967 2.17579L6.89135 1.2941L8.76625 3.16901L7.88457 4.05069Z" />
          </svg>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-y-2 items-center">
      <h3 className="bg-clip-text bg-gradient-to-r from-[#F2CB13] to-[#E77003] text-3xl font-futura_pt_bold text-transparent">
        JOSEPHINE ROBINSON
      </h3>
      <p className="text-white font-futura_pt_light">Radical since 2020</p>
      <div className="font-futura_pt_light text-[#F2CB13] text-base flex items-center gap-x-1 cursor-pointer border-b border-[#F2CB13] hover:opacity-70 transition-all duration-300 ease-in-out">
        <svg className="h-[10px] w-[10px] fill-current" viewBox="0 0 10 11">
          <path d="M9.71813 2.99019L7.57016 0.841749C7.48088 0.752425 7.37486 0.681567 7.25818 0.633224C7.14151 0.58488 7.01645 0.559998 6.89015 0.559998C6.76385 0.559998 6.63879 0.58488 6.52211 0.633224C6.40544 0.681567 6.29942 0.752425 6.21014 0.841749L0.282079 6.77029C0.192469 6.85931 0.121424 6.96524 0.0730652 7.08193C0.0247058 7.19862 -5.97045e-06 7.32375 0.000362645 7.45006V9.59851C0.000362645 9.85351 0.101662 10.0981 0.281976 10.2784C0.46229 10.4587 0.706849 10.56 0.961851 10.56H3.1103C3.23661 10.5603 3.36173 10.5356 3.47841 10.4873C3.5951 10.4389 3.70103 10.3679 3.79007 10.2783L9.71813 4.34974C9.89838 4.16943 9.99964 3.92492 9.99964 3.66997C9.99964 3.41501 9.89838 3.1705 9.71813 2.99019ZM3.02905 9.40621H1.15415V7.53131L5.1924 3.49305L7.0673 5.36796L3.02905 9.40621ZM7.88457 4.55069L6.00967 2.67579L6.89135 1.7941L8.76625 3.66901L7.88457 4.55069Z" />
        </svg>
        Edit profile
      </div>
    </div>
    <div className="flex flex-col gap-y-3 font-futura_pt_bold w-full transition-all ease-in-out duration-300">
      <button className="button button-colored">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
          <path d="M15.4798 14.3256C14.5158 12.6337 13.0105 11.3154 11.2062 10.5829C12.1035 9.90996 12.7663 8.97177 13.1007 7.90123C13.4351 6.83068 13.4242 5.68205 13.0695 4.61805C12.7149 3.55405 12.0344 2.6286 11.1245 1.97282C10.2147 1.31703 9.12156 0.964142 8 0.964142C6.87844 0.964142 5.78531 1.31703 4.87545 1.97282C3.9656 2.6286 3.28514 3.55405 2.93047 4.61805C2.57581 5.68205 2.56491 6.83068 2.89932 7.90123C3.23373 8.97177 3.8965 9.90996 4.79375 10.5829C2.98948 11.3154 1.48417 12.6337 0.520157 14.3256C0.460423 14.4217 0.420611 14.5288 0.403087 14.6405C0.385563 14.7522 0.390685 14.8664 0.418148 14.9761C0.445612 15.0858 0.494857 15.1889 0.562954 15.2792C0.631052 15.3695 0.716613 15.4452 0.814551 15.5018C0.912489 15.5584 1.0208 15.5947 1.13306 15.6086C1.24531 15.6225 1.35921 15.6137 1.46798 15.5826C1.57676 15.5516 1.67819 15.4991 1.76624 15.4281C1.85429 15.3571 1.92717 15.2691 1.98055 15.1694C3.25461 12.9672 5.50461 11.6538 8 11.6538C10.4954 11.6538 12.7454 12.9679 14.0195 15.1694C14.1351 15.3554 14.3186 15.4891 14.5311 15.5423C14.7436 15.5955 14.9684 15.5639 15.158 15.4544C15.3477 15.3448 15.4873 15.1658 15.5474 14.9551C15.6074 14.7445 15.5832 14.5187 15.4798 14.3256ZM4.34375 6.31C4.34375 5.58686 4.55819 4.87997 4.95994 4.2787C5.36169 3.67743 5.93272 3.2088 6.60081 2.93207C7.26891 2.65533 8.00406 2.58293 8.7133 2.72401C9.42254 2.86508 10.074 3.21331 10.5854 3.72464C11.0967 4.23598 11.4449 4.88746 11.586 5.5967C11.7271 6.30595 11.6547 7.0411 11.3779 7.70919C11.1012 8.37728 10.6326 8.94831 10.0313 9.35006C9.43003 9.75182 8.72314 9.96625 8 9.96625C7.03064 9.96514 6.10131 9.57957 5.41587 8.89413C4.73044 8.20869 4.34487 7.27936 4.34375 6.31Z" />
        </svg>
        <div className="w-full text-left">MY PROFILE</div>
        <svg
          className="w-2 h-3 stroke-current stroke-2 fill-none"
          viewBox="0 0 8 13"
        >
          <path d="M1.05026 1.61025L6.00001 6.56L1.05026 11.5097" />
        </svg>
      </button>
      <button className="button">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 19 15">
          <path d="M17.1469 5.81625H16.5511L14.6097 1.44816C14.4956 1.19122 14.3093 0.972908 14.0736 0.8197C13.8378 0.666492 13.5627 0.584963 13.2816 0.584999H4.73719C4.45603 0.584963 4.1809 0.666492 3.94516 0.8197C3.70942 0.972908 3.52318 1.19122 3.40903 1.44816L1.46766 5.81625H0.871875C0.640639 5.81625 0.418874 5.90811 0.255366 6.07162C0.091858 6.23512 0 6.45689 0 6.68812C0 6.91936 0.091858 7.14112 0.255366 7.30463C0.418874 7.46814 0.640639 7.56 0.871875 7.56H1.1625V13.0819C1.1625 13.4673 1.3156 13.8369 1.58811 14.1094C1.86062 14.3819 2.23023 14.535 2.61562 14.535H4.65C5.03539 14.535 5.405 14.3819 5.67751 14.1094C5.95003 13.8369 6.10312 13.4673 6.10312 13.0819V11.6287H11.9156V13.0819C11.9156 13.4673 12.0687 13.8369 12.3412 14.1094C12.6137 14.3819 12.9834 14.535 13.3687 14.535H15.4031C15.7885 14.535 16.1581 14.3819 16.4306 14.1094C16.7031 13.8369 16.8562 13.4673 16.8562 13.0819V7.56H17.1469C17.3781 7.56 17.5999 7.46814 17.7634 7.30463C17.9269 7.14112 18.0187 6.91936 18.0187 6.68812C18.0187 6.45689 17.9269 6.23512 17.7634 6.07162C17.5999 5.90811 17.3781 5.81625 17.1469 5.81625ZM4.92609 2.32875H13.0927L14.6424 5.81625H3.37634L4.92609 2.32875ZM4.35937 12.7912H2.90625V11.6287H4.35937V12.7912ZM13.6594 12.7912V11.6287H15.1125V12.7912H13.6594ZM15.1125 9.885H2.90625V7.56H15.1125V9.885Z" />
        </svg>
        <div className="w-full text-left">MY RADICAL GARAGE</div>
        <svg
          className="w-2 h-3 stroke-current stroke-2 fill-none"
          viewBox="0 0 8 13"
        >
          <path d="M1.05026 1.61025L6.00001 6.56L1.05026 11.5097" />
        </svg>
      </button>
      <button className="button">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 15 15">
          <path
            d="M-2.86102e-06 7.29267C0.00105476 6.3744 0.366305 5.49404 1.01562 4.84473C1.66494 4.19541 2.54529 3.83016 3.46356 3.8291H6.10653C6.33566 3.81512 9.61006 3.56268 12.7313 0.945022C12.9254 0.782013 13.1621 0.67779 13.4134 0.644593C13.6647 0.611396 13.9203 0.650604 14.1501 0.757612C14.38 0.864619 14.5745 1.03498 14.7108 1.2487C14.8472 1.46241 14.9198 1.7106 14.92 1.96411V12.6212C14.9216 12.875 14.8499 13.1239 14.7136 13.338C14.5772 13.5521 14.382 13.7223 14.1513 13.8281C13.9216 13.9366 13.6656 13.9766 13.4138 13.9434C13.162 13.9102 12.925 13.8052 12.7313 13.641C11.1337 12.298 9.23298 11.3643 7.19356 10.9208V12.6659C7.19359 12.8851 7.1395 13.101 7.03609 13.2943C6.93268 13.4877 6.78315 13.6525 6.60075 13.7742C6.57119 13.7941 6.54025 13.8119 6.50817 13.8275L5.54636 14.2977C5.36859 14.4041 5.16844 14.4676 4.96183 14.4831C4.75521 14.4986 4.54783 14.4657 4.35616 14.387C4.16449 14.3083 3.99382 14.186 3.85772 14.0298C3.72162 13.8736 3.62383 13.6878 3.57213 13.4871L2.83346 10.7016C2.03754 10.5534 1.31854 10.1315 0.801042 9.50889C0.283544 8.88629 0.000160217 8.10226 -2.86102e-06 7.29267ZM13.3214 12.0637V2.52361C10.9122 4.39327 8.51437 5.06133 7.19356 5.29846V9.29088C8.51437 9.52534 10.9122 10.1934 13.3214 12.0637ZM5.03615 12.7678L5.59499 12.4947V10.7562H4.50263L5.03615 12.7678ZM3.46356 9.15766H5.59499V5.42767H3.46356C2.96894 5.42767 2.49457 5.62416 2.14481 5.97392C1.79506 6.32367 1.59857 6.79804 1.59857 7.29267C1.59857 7.7873 1.79506 8.26167 2.14481 8.61142C2.49457 8.96117 2.96894 9.15766 3.46356 9.15766Z"
            fill="currentColor"
          />
        </svg>
        <div className="w-full text-left">TECHNICAL BULLETINS</div>
        <svg
          className="w-2 h-3 stroke-current stroke-2 fill-none"
          viewBox="0 0 8 13"
        >
          <path d="M1.05026 1.61025L6.00001 6.56L1.05026 11.5097" />
        </svg>
      </button>
      <button className="button">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 14 17">
          <path
            d="M13.7329 4.8713L9.47206 0.610433C9.38727 0.525533 9.28657 0.45818 9.17573 0.412225C9.06489 0.366269 8.94608 0.342612 8.82609 0.342607H1.52174C1.11815 0.342607 0.731089 0.502932 0.445707 0.788314C0.160326 1.0737 0 1.46076 0 1.86435V15.2556C0 15.6592 0.160326 16.0463 0.445707 16.3317C0.731089 16.6171 1.11815 16.7774 1.52174 16.7774H12.4783C12.8819 16.7774 13.2689 16.6171 13.5543 16.3317C13.8397 16.0463 14 15.6592 14 15.2556V5.51652C14 5.27456 13.9039 5.04249 13.7329 4.8713ZM9.43478 3.15782L11.1848 4.90782H9.43478V3.15782ZM1.82609 14.9513V2.16869H7.6087V5.82087C7.6087 6.06302 7.70489 6.29526 7.87612 6.46649C8.04735 6.63772 8.27958 6.73391 8.52174 6.73391H12.1739V14.9513H1.82609ZM9.47206 10.3488C9.55719 10.4336 9.62472 10.5344 9.67081 10.6454C9.71689 10.7564 9.74061 10.8754 9.74061 10.9955C9.74061 11.1157 9.71689 11.2347 9.67081 11.3457C9.62472 11.4567 9.55719 11.5575 9.47206 11.6423L7.64598 13.4684C7.56115 13.5535 7.46036 13.621 7.34938 13.6671C7.2384 13.7132 7.11941 13.7369 6.99924 13.7369C6.87907 13.7369 6.76008 13.7132 6.6491 13.6671C6.53812 13.621 6.43732 13.5535 6.3525 13.4684L4.52641 11.6423C4.35489 11.4708 4.25852 11.2381 4.25852 10.9955C4.25852 10.753 4.35489 10.5203 4.52641 10.3488C4.69794 10.1773 4.93058 10.0809 5.17315 10.0809C5.41573 10.0809 5.64837 10.1773 5.81989 10.3488L6.08696 10.6143V8.25565C6.08696 8.0135 6.18315 7.78126 6.35438 7.61003C6.52561 7.4388 6.75785 7.34261 7 7.34261C7.24215 7.34261 7.47439 7.4388 7.64562 7.61003C7.81685 7.78126 7.91304 8.0135 7.91304 8.25565V10.6143L8.18011 10.3465C8.26505 10.2618 8.36587 10.1946 8.4768 10.1489C8.58772 10.1031 8.70657 10.0797 8.82656 10.0799C8.94655 10.0801 9.06532 10.1039 9.17608 10.1501C9.28684 10.1962 9.38742 10.2638 9.47206 10.3488Z"
            fill="currentColor"
          />
        </svg>
        <div className="w-full text-left">MY DOWNLOADS</div>
        <svg
          className="w-2 h-3 stroke-current stroke-2 fill-none"
          viewBox="0 0 8 13"
        >
          <path d="M1.05026 1.61025L6.00001 6.56L1.05026 11.5097" />
        </svg>
      </button>
    </div>
  </div>
);
