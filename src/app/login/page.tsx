import { Wrapper } from "@/src/components/Wrapper";
import { Input } from "@/src/components/Input";
import { Button } from "@/src/components/Button";

export default function PageLogin() {
  return (
    <Wrapper>
      <div className="flex items-center justify-center -m-4 min-h-screen">
        <form className="w-full max-w-xs flex flex-col gap-2">
          <Input placeholder="Логин" />
          <Input placeholder="Пароль" type="password" />
          <Button className="h-8">Войти</Button>
        </form>
      </div>
    </Wrapper>
  );
}
