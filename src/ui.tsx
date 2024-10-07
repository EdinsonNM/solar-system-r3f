import "./ui.css";
export default function UI() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center pointer-events-none">
      <div className="absolute top-0 left-0 w-screen h-screen px-10 py-10">
        <img src={"/logo-white.png"} alt="logo" className="w-40" />
      </div>
      <div className="absolute bottom-0 left-0 w-screen h-screen flex flex-col justify-end items-center py-10 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-white animate-scroll"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="8" y="4" width="8" height="16" rx="4" ry="4"></rect>
          <path className="scroll-line" d="M12 8v4"></path>
          <path d="M12 16h0"></path>
        </svg>
        <p className="text-white text-sm">Scrollea para descubrir mas</p>
      </div>
    </div>
  );
}
