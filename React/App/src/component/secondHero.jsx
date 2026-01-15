function SecondHero() {
  return (
    <div className="flex items-center justify-between gap-6 p-6">


      <div
        className="w-48 h-32
        bg-[url(https://cdn.prod.website-files.com/6719f2906f74c002c2f7307a/671a092c258190fb54631da6_About%20Image%202.webp)]
        bg-cover bg-center rounded-lg"
      ></div>


      <button className="border-b-2 border-black hover:opacity-70 transition">
        Learn more
      </button>


      <div
        className="w-48 h-32
        bg-[url(https://cdn.prod.website-files.com/6719f2906f74c002c2f7307a/671a093a998e572eb4a58e4c_About%20Image%201-p-800.webp)]
        bg-cover bg-center rounded-lg"
      ></div>

    </div>
  );
}

export default SecondHero;
