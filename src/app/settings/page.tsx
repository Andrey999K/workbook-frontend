import { Wrapper } from "@/src/components/common/Wrapper";
import { CircleButton } from "@/src/components/common/CircleButton";
import Link from "next/link";

export default function SettingsPage() {
  const buttons = [
    {
      text: "Поддержать авторов",
      href: "/support",
    },
    {
      text: "Изменить аватар",
      href: "/change-avatar",
    },
    {
      text: "Изменить имя",
      href: "/change-name",
    },
  ];

  return (
    <Wrapper>
      <div className="min-h-screen -my-4 py-4 flex flex-col items-center">
        <h2 className="w-full text-2xl font-bold">Настройки</h2>
        <div className="flex flex-col gap-2 w-full text-[18px] font-bold h-full mt-4">
          {buttons.map((button) => (
            <Link
              key={button.text}
              href={button.href}
              className="py-12 text-center bg-[#232E48] rounded-sm hover:bg-[#2B3A5C] transition-colors"
              // className="py-12 text-center bg-[#232E48] rounded-sm hover:bg-[#FFDA5E] hover:text-black transition-colors"
            >
              {button.text}
            </Link>
          ))}
        </div>
        <div className="mt-auto">
          <CircleButton href={"/quests"} icon="list" />
        </div>
      </div>
    </Wrapper>
  );
}
