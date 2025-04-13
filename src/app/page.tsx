import Chips from "@/components/chips";
import { Navbar } from "../components/navbar/index";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <section className="flex gap-10 flex-col md:flex-row items-center justify-center md:justify-evenly w-full px-4 py-8 bg-white shadow-sm border-b border-gray-200">
          <div>
            <h1 className="text-2xl poppins-extrabold">Your Career Analysis Report</h1>
            <p className="text-[#5B6871] text-md mt-2">
            Your Report ensures a complete understanding of your strengths, areas for growth, and ideal career fit.            </p>
          </div>
          <div className="flex h-fit border-2 border-[#E5E5E5] rounded-lg items-center justify-center px-4 py-2">
            <div className="flex flex-col items-start justify-start gap-1">
            <h1 className="text-xs poppins-extrabold">Want to speak to an expert Career Counsellor?</h1>
            <p className="text-[#5B6871] text-xs">Explore a list of 1000+ Expert Career Counsellors near you!</p>
            </div>
            <div className="h-10 mt-2">
              <button className="bg-[#EBEBEB] text-[#252A31] font-bold rounded-lg ml-4 px-2 py-2 text-xs hover:cursor-pointer">Explore</button>
            </div>
          </div>
        </section>
        <section className="w-full bg-white shadow-sm border-b border-gray-200 py-4 flex-col flex md:flex-row">
          <div className="flex md:flex-row flex-col gap-2 md:justify-end justify-center items-center lg:w-7/12 md:w-2/3 w-full mx-2">
            <h3 className="poppins-thin text-md text-[#999CA1]">Your <span className="text-[#0047AB] poppins-semibold">TOP 3</span> Career Options</h3>
            <div className="flex flex-row justify-center items-center">
              <Chips name="Engineer" id={1} ></Chips>
              <Chips name="Doctor" id={2} ></Chips>
              <Chips name="Teacher" id={3} ></Chips>
            </div>
          </div>
          <div className="flex md:justify-start justify-center py-4 md:py-0 gap-4 items-center border-l border-gray-300 px-4 lg:w-5/12 md:w-1/3 w-full">
            <h1 className="poppins-semibold">Choose them right here!</h1>
            <button className="bg-[#0047AB] rounded-lg px-2 py-3 text-sm text-white poppins-semibold shadow-sm hover:cursor-pointer">
              Your Career Options
            </button>
          </div>
        </section>
        <section>
          <Sidebar/>
        </section>
      </main>
    </div>
  );
}
