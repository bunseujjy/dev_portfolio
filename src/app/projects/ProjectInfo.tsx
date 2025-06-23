"use client";

import { nextjs_project_info } from "@/lib/projects-data";
import Image from "next/image";
import { useState, useEffect } from "react";
import { RiCloseFill, RiGitRepositoryLine } from "react-icons/ri";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface ProjectInfoProps {
  projectKey: string;
}

const ProjectInfo = ({ projectKey }: ProjectInfoProps) => {
  const [viewImage, setViewImage] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [api, setApi] = useState<CarouselApi>();

  // Get the specific project data
  const project = nextjs_project_info[projectKey];

  // Set the carousel to the correct slide when modal opens
  useEffect(() => {
    if (api && viewImage) {
      api.scrollTo(currentImageIndex);
    }
  }, [api, viewImage, currentImageIndex]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (viewImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [viewImage]);

  // If project doesn't exist, show error
  if (!project) {
    return (
      <div className="flex items-center justify-center h-full p-4">
        <div className="text-white text-center max-w-md">
          <h2 className="text-xl font-semibold mb-2">Project Not Found</h2>
          <p className="text-gray-400 text-sm">
            The project &quot;{projectKey}&quot; could not be found.
          </p>
        </div>
      </div>
    );
  }

  const handleShowImage = (index: number) => {
    setCurrentImageIndex(index);
    setViewImage(true);
  };

  const handleCloseModal = () => {
    setViewImage(false);
    setCurrentImageIndex(0);
  };

  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Project Key Display */}
        <div className="text-white text-lg font-semibold break-words">
          Project: {projectKey}
        </div>

        {/* Header Image */}
        <div className="w-full aspect-video relative rounded-lg overflow-hidden bg-gray-200 max-h-64">
          <Image
            src={`${project.header}`}
            alt="Project Header"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            quality={100}
            className="object-cover"
            priority
          />
        </div>

        {/* Project Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-xs">
          {project.domain && (
            <div className="bg-slate-700 border border-slate-700 rounded-md text-white p-2 w-full sm:w-auto">
              <span className="block sm:inline">
                <span className="font-medium">Domain:</span>{" "}
                <span className="break-all">{project.domain}</span>
              </span>
            </div>
          )}
          {project.repo && (
            <div className="flex items-center bg-slate-700 border border-slate-700 rounded-md text-white p-2 space-x-2 w-full sm:w-auto">
              <RiGitRepositoryLine className="flex-shrink-0" />
              <span className="break-all">
                <span className="font-medium">Repo:</span> {project.repo}
              </span>
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="text-white space-y-4">
          <h1 className="text-lg sm:text-xl font-semibold break-words">
            {project.title}
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-gray-300">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="w-full bg-slate-800 rounded-lg p-4">
          <h3 className="text-white font-semibold mb-3 text-sm sm:text-base">
            Tech Stack:
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {project.usage.map((data, i) => (
              <div
                key={i}
                className="text-xs sm:text-sm text-amber-500 font-medium bg-slate-700/50 rounded px-2 py-1 text-center break-words"
              >
                {data}
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="space-y-4">
          <h2 className="text-white text-lg font-semibold">Gallery:</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.galary.map((gal, idx) => (
              <div
                className="w-full border border-slate-600 rounded-md bg-gray-200 cursor-pointer hover:border-slate-500 transition-colors group"
                key={idx}
                onClick={() => handleShowImage(idx)}
              >
                <div className="w-full aspect-video relative overflow-hidden rounded-md">
                  {gal.image.includes(".mp4") ? (
                    <video
                      src={`${gal.image}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <Image
                      src={`${gal.image}`}
                      alt={`Gallery image ${idx + 1}`}
                      fill
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      quality={100}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {viewImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 p-4">
          <div className="relative w-full max-w-6xl mx-auto">
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {project.galary.map((item, i) => (
                  <CarouselItem key={i}>
                    <div className="flex items-center justify-center min-h-[50vh] max-h-[80vh]">
                      {item.image.includes(".mp4") ? (
                        <video
                          src={`${item.image}`}
                          className="max-w-full max-h-full object-contain rounded-lg"
                          autoPlay
                          loop
                          muted
                          controls
                          playsInline
                        />
                      ) : (
                        <div className="relative w-full h-full max-h-[80vh]">
                          <Image
                            src={`${item.image}`}
                            alt={`Gallery image ${i + 1}`}
                            width={1200}
                            height={800}
                            quality={100}
                            className="max-w-full max-h-full object-contain rounded-lg"
                            priority={i === currentImageIndex}
                          />
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation Controls */}
              <CarouselPrevious className="left-2 sm:left-4 text-white bg-black/50 hover:bg-black/70 border-white/20" />
              <CarouselNext className="right-2 sm:right-4 text-white bg-black/50 hover:bg-black/70 border-white/20" />

              {/* Close Button */}
              <div className="absolute right-2 sm:right-4 top-2 sm:top-4 z-10">
                <Button
                  onClick={handleCloseModal}
                  size="sm"
                  variant="outline"
                  className="bg-black/50 hover:bg-black/70 border-white/20 text-white hover:text-white"
                >
                  <RiCloseFill size={18} />
                </Button>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {project.galary.length}
              </div>
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectInfo;
