import { Button } from "@/src/components/common/Button";
import { Input } from "@/src/components/common/Input";
import { Wrapper } from "@/src/components/common/Wrapper";

export default function SignupPage() {
  return (
    <Wrapper>
      <div className="flex flex-col gap-2 items-center justify-center -m-4 min-h-screen">
        <h2 className="text-2xl">Регистрация</h2>
        <form className="w-full max-w-xs flex flex-col gap-2">
          <Input placeholder="Логин" />
          <Input placeholder="Пароль" type="password" />
          <Input placeholder="Повторите пароль" type="password" />
          <Button className="h-8">Зарегистрироваться</Button>
        </form>
      </div>
    </Wrapper>
  );
}
