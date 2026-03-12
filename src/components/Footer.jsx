export default function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 md:py-6 mt-8 md:mt-12 text-gray-400 text-xs md:text-sm bg-transparent">
      <div className="flex items-center gap-2 mb-1 md:mb-0">
        <span className="text-xl">☁</span>
        <span className="font-bold text-white">weather</span>
      </div>
      <div className="text-center flex-1">Weather data provided by Weatherbit</div>
      <button className="text-white bg-[#334155] px-3 md:px-4 py-1 md:py-2 rounded-lg hover:bg-sky-500 transition mt-1 md:mt-0">Back to top</button>
    </footer>
  );
}
