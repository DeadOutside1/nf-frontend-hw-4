import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ChevronDownIcon, CircleCheckIcon } from "@/components/ui/icons";

export default function Messages() {
  return (
    <div className="flex h-screen">
      <aside className="w-1/4 bg-white border-r">
        <div className="flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <Button variant="outline" className="text-sm">
              Сохраненные
            </Button>
            <Button variant="outline" className="text-sm">
              Корзина
            </Button>
          </div>
          <div className="p-4">
            <Button className="w-full mb-2">Покупаю</Button>
            <Button variant="outline" className="w-full">
              Продаю
            </Button>
          </div>
          <div className="flex flex-col p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">НЕПРОЧИТАННЫЕ</h3>
              <ChevronDownIcon className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs">Вы все прочитали</p>
              <CircleCheckIcon className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">ПРОЧИТАННЫЕ</h3>
              <ChevronDownIcon className="w-4 h-4" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-xs">Рыбак</p>
                <p className="text-xs">29.05</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs">Гоша Продавец</p>
                <p className="text-xs">27.05</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs">Алли</p>
                <p className="text-xs">21.05</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs">Almut</p>
                <p className="text-xs">18.05</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs">Ержан</p>
                <p className="text-xs">18.05</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main className="w-3/4 bg-white">
        <div className="flex flex-col h-auto">
          <header className="flex items-center p-4 border-b">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="User Avatar" />
            </Avatar>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Гоша Продавец</h2>
              <p className="text-sm">Стол и стул для учебы</p>
            </div>
            <span className="ml-auto text-sm">15000 т</span>
          </header>
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <div className="flex justify-between p-2 bg-gray-100">
              <p className="text-sm">Здравствуйте</p>
              <span className="text-xs">19:46</span>
            </div>
            <div className="flex justify-between p-2 bg-gray-100">
              <p className="text-sm">А можете точный адрес дать?</p>
              <span className="text-xs">09:14</span>
            </div>
            <div className="flex justify-end p-2 bg-blue-100">
              <p className="text-sm">Я просто в Алматы нахожусь</p>
              <span className="text-xs">15:01</span>
            </div>
            <div className="flex justify-end p-2 bg-blue-100">
              <p className="text-sm">Я сейчас не в Алмате</p>
              <span className="text-xs">15:01</span>
            </div>
            <div className="flex justify-end p-2 bg-blue-100">
              <p className="text-sm">Буду через 7 дней дай Бог</p>
              <span className="text-xs">15:01</span>
            </div>
            <div className="flex justify-end p-2 bg-blue-100">
              <p className="text-sm">Но паспаны есть дома</p>
              <span className="text-xs">15:01</span>
            </div>
          </div>
          <div className="flex items-center p-4 border-t">
            <Input placeholder="Напишите сообщение" className="flex-1" />
            <Button variant="outline" className="ml-2">
              Отправить
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
