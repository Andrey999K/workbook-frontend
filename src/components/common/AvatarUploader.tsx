import { ChangeEvent, useState } from "react";
import { Avatar } from "@/src/components/common/Avatar";
import { Icon } from "@/src/components/common/Icon";

export const AvatarUploader = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    console.log("name:", file.name);
    console.log("size:", file.size);
    console.log("type:", file.type);
    console.log("lastModified:", file.lastModified);

    const url = URL.createObjectURL(file);
    setPreview(url);
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
