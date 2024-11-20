import React from "react";

interface ProjectDetailProps {
  title: string;
  description: string;
  images: string[]; // Array of image URLs
  rating: number;
  tags: string[];
  year: string;
  client: string;
  services: string;
  project: string;
  videoUrl?: string; // Optional video URL
}

export default function ProjectDetail({
  title,
  description,
  images, // Use images array here
  rating,
  tags,
  year,
  client,
  services,
  project,
  videoUrl, // Optional video URL
}: ProjectDetailProps) {
  return (
    <>
      <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
        {/* Image Showcase */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${title} photo ${index + 1}`}
              className="rounded-lg w-full h-auto object-cover"
            />
          ))}
        </div>

        {/* Optional Video Showcase */}
        {videoUrl && (
          <div className="w-full mb-6">
            <video controls className="w-full rounded-lg">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        <div className="text-3xl font-bold mt-4">{title}</div>
        <div className="mt-2 text-[0.82rem] md:text-center font-medium tracking-tight">
          {description}
        </div>

        {/* Rating */}
        <div className="flex mt-4">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`${
                i < rating ? "text-yellow-500" : "text-gray-300"
              } text-xl`}
            >
              ★
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, idx) => (
            <div
              key={idx}
              className="py-1 px-3 rounded-full bg-[#F1F1F1] text-[#192025] text-xs sm:text-sm font-medium"
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Project Details */}
        <div className="mt-6 w-full bg-[#F1F1F1] p-4 rounded-lg">
          <h2 className="text-xl font-semibold uppercase border-b-[1px] border-black/20 py-3 mb-3">
            Project Details
          </h2>
          <div className="mt-2">
            <div>
              <strong className="py-2">Year:</strong> {year}
            </div>
            <div>
              <strong className="py-2">Client:</strong> {client}
            </div>
            <div>
              <strong className="py-2">Services:</strong> {services}
            </div>
            <div>
              <strong className="py-2">Project:</strong> {project}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
