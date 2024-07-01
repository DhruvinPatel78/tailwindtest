import Image from "next/image";

const TextArea = () => {
  return (
    <div
      className={
        "flex flex-row items-center border-t border-[#E5E5EA] p-4 w-full gap-4 sm:px-8 px-4"
      }
    >
      <Image
        className="w-5 h-5"
        src="/images/emoji.svg"
        alt=""
        width={20}
        height={20}
      />
      <textarea
        className={"w-full focus:outline-none"}
        placeholder={"Start Typing..."}
        rows={1}
      />
      <Image
        className="w-5 h-5"
        src="/images/mention.svg"
        alt=""
        width={20}
        height={20}
      />
      <Image
        className="w-5 h-5"
        src="/images/send.svg"
        alt=""
        width={20}
        height={20}
      />
    </div>
  );
};
export default TextArea;
