import Header from "@/component/header";
import Message from "@/component/message";
import moment from "moment";
import TextArea from "@/component/textArea";
import data from "../data.json";
export default function Home() {
  return (
    <main className="flex min-h-screen h-screen flex-col items-center justify-between">
      <Header />
      <div className={"h-full w-full p-4 overflow-auto"}>
        {data?.map((item: any, index: number) => {
          return (
            <div
              className={"flex flex-col gap-2 items-center"}
              key={`Date-Chat${index}`}
            >
              <span className={"text-[#666668] text-xs font-normal"}>
                {moment().subtract(10, "days").calendar()}
              </span>
              <div className={"flex flex-col gap-2 w-full"}>
                {item?.chatList?.map((chat: any, index: number) => {
                  return (
                    <Message
                      message={chat.message}
                      time={chat.time}
                      key={index}
                      name={chat.name}
                      description={chat.description}
                      user={chat.user}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <TextArea />
    </main>
  );
}
