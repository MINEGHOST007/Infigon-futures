import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6">
        <Image
          src="/Under construction.gif"
          alt="Construction GIF"
          width={480}
          height={480}
          className="mx-auto"
        />

        <h1 className="text-2xl font-bold text-gray-800">Under Construction</h1>
        <p className="text-gray-600 mb-4">
          We&apos;re working hard to improve your experience!
        </p>

        <a
          href="/your-report/test1"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
        >
          View Your Report
        </a>
      </div>
    </div>
  );
}
