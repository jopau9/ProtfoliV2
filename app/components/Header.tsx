import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-9 px-10 flex justify-between items-center bg-transparent text-white ">
        <Image src="/logo.png" alt="Logo JoanPau" width={80} height={80} className="object-contain"/>

    </header>
    );
}
