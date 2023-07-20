import React from 'react';
import ProjectsCard from './ProjectsCard';
import {
  ChessScene,
  TheWorldHardestGame,
  MovieDatabase,
} from "@/const/project"

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-2-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I&apos;ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <ProjectsCard
                title={ChessScene.title}
                img={ChessScene.imgUrl}
                projectUrl="/projects/chess-scene"
                tech={ChessScene.technologyMain}
              />
              <ProjectsCard
                title={MovieDatabase.title}
                img={MovieDatabase.imgUrl}
                projectUrl="/projects/movie-database"
                tech={MovieDatabase.technologyMain}
              />
              <ProjectsCard
                title={TheWorldHardestGame.title}
                img={TheWorldHardestGame.imgUrl}
                projectUrl="/projects/the-world-hardest-game"
                tech={TheWorldHardestGame.technologyMain}
              />
            </div>
        </div>
    </div>
  );
};

export default Projects