import React from 'react';
import ProjectsCard from './ProjectsCard';
import {
  ChessScene,
  Snake,
  MovieDatabase,
} from "@/const/project"

const Projects = () => {


  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Projects
          </p>
          <h2 className="py-4">What I&apos;ve Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectsCard
              title={ChessScene.title}
              img={ChessScene.imgUrl}
              projectUrl="/projects/chessScene"
              tech={ChessScene.technologyMain}
            />
            <ProjectsCard
              title={MovieDatabase.title}
              img={MovieDatabase.imgUrl}
              projectUrl="/projects/movieDatabase"
              tech={MovieDatabase.technologyMain}
            />
            <ProjectsCard
              title={Snake.title}
              img={Snake.imgUrl}
              projectUrl="/projects/snake"
              tech={Snake.technologyMain}
            />
          </div>
      </div>
    </div>
  );
};


export default Projects