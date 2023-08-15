import chessScene from "../assets/projcets/chess_scene.png";
import TWHG from "../assets/projcets/the_worlds_hardest_game.png";
import movieDB from "../assets/projcets/movie_database.png";

import { Project } from "@/models/Project";

export const ChessScene : Project =  {
    imgUrl: chessScene,
    title: "Chess Scene",
    technologyMain: "C++ / QT / OpenGL",
    description: `Created a chess scene with QT and OpenGL during the computer graphics course. 
    Focusing on the computer graphics pipeline and rendering a scene with geometric objects - polygons.`,
    codeUrl: "https://github.com/FurkanHRAydin/University/tree/main/Semester%204/Cg1/chess_scene-master",
    demoUrl: "",
    technologyAll: ["C++", "QT", "OpenGL"]
};

export const MovieDatabase: Project = {
    imgUrl: movieDB,
    title: "Movie Database",
    technologyMain: "Java / Hibernate / Jakarta",
    description: `A database application for movie management realized in Java with Swing, Hibernate and Jakarta during databases course.`,
    codeUrl: "https://github.com/FurkanHRAydin/University/tree/main/Semester%203/DBS2/movie_database-main",
    demoUrl: "",
    technologyAll: ["Java", "Hibernate", "Jakarta", "Swing"],
  };

  export const TheWorldHardestGame: Project = {
    imgUrl: TWHG,
    title: "The World Hardest Game",
    technologyMain: "Java / JavaFX",
    description: `A variation of the popular browser game The World Hardest Game in a matrix version implemented in Java with JavaFX.`,
    codeUrl: "https://github.com/FurkanHRAydin/University/tree/main/Semester%203/Snake/src/application",
    demoUrl: "",
    technologyAll: ["Java", "JavaFX"],
  };
