import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/Index";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="w-full flex min-w-[21rem] justify-center bg-[#F5F4F0]">
        <div className="w-full max-w-[952px] px-4 py-6 sm:px-6 md:px-8 lg:px-0">
          <div className="font-semibold text-[2rem] text-center sm:text-[2.3rem] tracking-widest uppercase">
            Recent-Work
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects?.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <Link href={`/works/${item.id}`}>
                  <ProjectCard
                    title={item.title}
                    description={item.description}
                    img={item.Image}
                    tags={item.tags}
                    rating={item.rating}
                  />
                </Link>
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
                  >
                    Visit Live Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
