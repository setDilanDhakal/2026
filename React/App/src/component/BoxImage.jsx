function Banner() {
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-center items-center px-4">
      <div
        className="w-full sm:w-[60%] md:w-[15%] h-52 md:h-72 bg-[url(https://cdn.prod.website-files.com/6719f2906f74c002c2f7307a/671a09302676a82c0400a662_Hero%20Image%204-p-800.webp)]
          bg-cover bg-center rounded-lg"
      ></div>

      <div
        className="w-full sm:w-[80%] md:w-[25%] h-64 md:h-[400px] bg-[url(https://cdn.prod.website-files.com/6719f2906f74c002c2f7307a/671a093031837c808af6f742_Hero%20Image%205-p-800.webp)] bg-cover bg-center rounded-lg"
      ></div>

      <div
        className="w-full sm:w-[60%] md:w-[15%] h-52 md:h-72 bg-[url(https://cdn.prod.website-files.com/6719f2906f74c002c2f7307a/671a09308d5ba8d3f9fcf30b_Hero%20Image%203.webp)] bg-cover bg-center rounded-lg"
      ></div>
    </div>
  );
}

export default Banner;
