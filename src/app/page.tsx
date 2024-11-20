import MainPgae from "@/components/MainPgae";

export default function Home() {
  return (
    <>
      <main className="bg-[#ffffff] min-w-[21rem] w-full flex justify-center items-center overflow-clip .no-scrollbar">
        <div className="w-full flex flex-wrap justify-center overflow-clip">
          <MainPgae />
        </div>
      </main>
    </>
  );
}
