import Image from "next/legacy/image";
import ShowProtocol from "../ShowProkes";

const Header = () => {
  return (
    <>
      <ShowProtocol />
      <div
        className="min-w-full min-h-screen flex flex-col items-center justify-center"
        id="header"
      >
        <div className="w-full min-h-screen absolute top-0  ">
          <Image
            src="/image/cover-header.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="w-full min-h-screen bg-gradient-to-tr from-black to-transparent absolute top-0 z-10"></div>
        <div className="w-full relative z-20 flex flex-col items-center justify-center">
          <h1 className="text-zinc-200 font-[Hattori] text-3xl">
            The Wedding Of
          </h1>
          <div className="text-center leading-relaxed py-4">
            <h3 className="text-5xl bg-gradient-to-tr from-amber-600 via-yellow-700 font-[parisienne] font-semibold to-amber-500 bg-clip-text text-transparent py-2 ">
              Agoes
            </h3>
            <span className="font-[parisienne] text-3xl text-zinc-200">&</span>
            <h4 className="text-5xl bg-gradient-to-tr from-amber-600 via-yellow-700 font-[parisienne] font-semibold to-amber-500 bg-clip-text text-transparent py-2">
              Reika
            </h4>
          </div>
        </div>

        <div className="flex flex-col relative z-50 items-center gap-1 justify-center w-80">
          <div className="mouse"></div>
          <small className="text-zinc-300/80">scroll down</small>
        </div>
      </div>
    </>
  );
};

export default Header;
