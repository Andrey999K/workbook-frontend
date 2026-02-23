import { ChangeEvent, useState } from "react";
import { Avatar } from "@/src/components/common/Avatar";
import { Icon } from "@/src/components/common/Icon";

export const AvatarUploader = () => {
  const [preview, setPreview] = useState<string | null>(() =>
    localStorage.getItem("avatar")
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // if (file.size > 100 * 1024) {
    //   console.log("Файл больше 100KB:", file.size, "байт");
    //   return;
    // }

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string; // "data:image/png;base64,..."
      setPreview(base64);
      localStorage.setItem("avatar", base64);
    };
    reader.readAsDataURL(file);
  };

  return (
    <form className="relative">
      <Avatar src={preview || ""} size={144} />
      <label className="absolute bottom-4 right-4 bg-[#D9D9D9]/10 p-2 rounded-full cursor-pointer">
        <input type="file" onChange={handleChange} className="hidden" />
        <Icon name="pencil" className="text-white" width={16} height={16} />
      </label>
    </form>
  );
};
