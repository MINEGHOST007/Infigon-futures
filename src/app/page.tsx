import { Navbar } from "../components/navbar/index";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section className="flex gap-10 flex-col md:flex-row items-center justify-center w-full max-w-[1400px] px-4 py-8 bg-white">
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
      </main>
    </div>
  );
}
