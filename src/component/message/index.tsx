import Image from "next/image";

const Message = ({ user, key = 0, name, description, message, time }) => {
  return (
    <div
      className={`w-full flex ${
        user === "you" ? "justify-end" : "justify-start"
      } `}
      key={`chat-container-${key + key}`}
    >
      <div className={"flex flex-row gap-2"} key={`chat_${key}`}>
        {user !== "you" && (
          <Image
            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src="/images/avatar3.svg"
            alt=""
            width={20}
            height={20}
          />
        )}
        <div className={"flex flex-row"}>
          {user !== "you" && (
            <div
              className={`w-0 h-0`}
              style={{
                borderTop: `10px solid #F2F2F7`,
                borderLeft: " 10px solid transparent",
              }}
            />
          )}

          <div
            className={`p-2 flex flex-col gap-1 ${
              user === "you"
                ? "rounded-tr-none bg-[#007AFF] text-white"
                : "rounded-ss-none bg-[#F2F2F7]"
            }  rounded-md`}
          >
            {user !== "you" && (
              <div className={"flex flex-row gap-1 items-center"}>
                <span className={"text-sm font-semibold"}>{name}</span>
                <span className={"text-xs font-normal text-[#666668]"}>
                  {description}
                </span>
              </div>
            )}
            <div className={"flex flex-row justify-between gap-2"}>
              <span
                className={`${
                  user === "you" ? "text-white" : "text-[#2C2C2E]"
                } text-sm font-normal flex flex-row gap-1 `}
              >
                {message.split(" ")?.map((item, index) => {
                  return (
                    <span
                      key={`message-${index + 1}`}
                      className={`${item.includes("@") && "text-[#007AFF]"}`}
                    >
                      {item}
                    </span>
                  );
                })}
              </span>
              <span
                className={`whitespace-nowrap flex items-end text-xs font-normal flex-row justify-center gap-1 ${
                  user === "you" ? "text-white" : "text-[#666668]"
                }  `}
              >
                {time}
                {user === "you" && (
                  <Image
                    className="w-5 h-5"
                    src="/images/seen.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                )}
              </span>
            </div>
          </div>
          {user === "you" && (
            <div
              className={`w-0 h-0`}
              style={{
                borderTop: "10px solid #007AFF",
                borderRight: " 10px solid transparent",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Message;
