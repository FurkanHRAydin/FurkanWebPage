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
    demoUrl: "",
    technologyAll: ["C++", "QT", "OpenGL"]
};

export const MovieDatabase: Project = {
    imgUrl: movieDB,
    title: "Movie Database",
    technologyMain: "Java / Hibernate / Jakarta",
    description: `A database application for movie management realized in Java with Swing, Hibernate and Jakarta during databases course.`,
    demoUrl: "",
    technologyAll: ["Java", "Hibernate", "Jakarta", "Swing"],
  };

  export const TheWorldHardestGame: Project = {
    imgUrl: TWHG,
    title: "The World Hardest Game",
    technologyMain: "Java / JavaFX",
    description: `A variation of the popular browser game The World Hardest Game in a matrix version implemented in Java with JavaFX.`,
    demoUrl: "",
    technologyAll: ["Java", "JavaFX"],
  };
