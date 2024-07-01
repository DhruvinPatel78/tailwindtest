import Image from "next/image";
const Index = () => {
  return (
    <div
      className={
        "flex flex-row justify-between p-4 border-b border-[#E5E5EA] w-full items-center gap-1"
      }
    >
      <div className="flex -space-x-4 rtl:space-x-reverse">
        <Image
          className="sm:w-10 w-8 sm:h-10 h-8 border-2 border-white rounded-full dark:border-gray-800"
          src="/images/avatar1.svg"
          alt=""
          width={20}
          height={20}
        />
        <Image
          className="sm:w-10 w-8 sm:h-10 h-8 border-2 border-white rounded-full dark:border-gray-800"
          src="/images/avatar2.svg"
          alt=""
          width={20}
          height={20}
        />
        <Image
          className="sm:w-10 w-8 sm:h-10 h-8 border-2 border-white rounded-full dark:border-gray-800"
          src="/images/avatar3.svg"
          alt=""
          width={20}
          height={20}
        />
        <Image
          className="sm:w-10 w-8 sm:h-10 h-8 border-2 border-white rounded-full dark:border-gray-800"
          src="/images/avatar4.svg"
          alt=""
          width={20}
          height={20}
        />
      </div>
      <div className={"flex flex-col sm:gap-1 gap-0 justify-center items-center"}>
        <div className={"font-semibold text-[#2C2C2E] sm:text-[18px] text-[15px]"}>
          🦄 Team Unicorns
        </div>
        <div className={"text-[#666668] sm:text-[16px] text-[14px] font-normal"}>
          last seen 45 min ago
        </div>
      </div>
      <button>
        <Image
          className="sm:w-8 w-7 sm:h-8 h-7 border-2 border-white rounded-full dark:border-gray-800"
          src="/images/more.svg"
          alt=""
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};
export default Index;
