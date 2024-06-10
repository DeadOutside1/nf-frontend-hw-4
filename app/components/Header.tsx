"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <header className="bg-[#002f34] text-white shadow-md">
      <div className=" container mx-auto flex items-center justify-around p-3">
        <Link href="/">
          <img src="/olx-logo.svg" alt="Logo" className="h-15" />
        </Link>
        <div className="flex space-x-16 items-center">
          <Link legacyBehavior href="/messages">
            <a className="flex items-center hover:text-gray-300">
              Сообщение
              <img src="/message.png" className="h-5 w-5 m-2" alt="Сообщение" />
            </a>
          </Link>
          <Link legacyBehavior href="/favorites">
            <a className="flex items-center hover:text-gray-300">
              Избранное
              <img src="/star.png" className="h-5 w-5 m-2" alt="Избранное" />
            </a>
          </Link>
          <Link legacyBehavior href="/profile">
            <a className="flex items-center hover:text-gray-300">
              Ваш профиль
              <img src="/user.png" className="h-5 w-5 m-2" alt="Ваш профиль" />
            </a>
          </Link>
          <button className="bg-white text-[#00474b] px-4 py-2 rounded-md">
            <Link legacyBehavior href="/products/create">
              <a>Подать объявление</a>
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
