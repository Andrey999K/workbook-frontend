import { ChangeEvent, useState } from "react";
import { Avatar } from "@/src/components/common/Avatar";
import { Icon } from "@/src/components/common/Icon";

export const AvatarUploader = () => {
  const [preview, setPreview] = useState<string | null>(() =>
    localStorage.getItem("avatar")
  );

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const base64 = await compressAndEncodeAvatar(file);
    setPreview(base64);
    localStorage.setItem("avatar", base64);
  };

  const compressAndEncodeAvatar = async (file: File): Promise<string> => {
    if (file.size <= 100 * 1024) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
    }

    return new Promise((resolve) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        const canvas = document.createElement("canvas");

        const ratio = Math.min(800 / img.width, 800 / img.height);
        const width = img.width * ratio;
        const height = img.height * ratio;

        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d")?.drawImage(img, 0, 0, width, height);

        URL.revokeObjectURL(url);
        resolve(canvas.toDataURL("image/jpeg", 0.95));
      };
      img.src = url;
    });
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
