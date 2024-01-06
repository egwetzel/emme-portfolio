import data from "../data/portfolio.json";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import WorkPage from "../components/WorkPage"

const Work = () => {
    const router = useRouter();

    const { id } = router.query;

    const project = data.projects.find((project) => project.id === id);

    if (!project) {
        // Handle the case when the project with the given id is not found
        return <p>Project not found</p>;
      }

    return (
      <>
        {data.showCursor && <Cursor />}
        <div
          className={`container mx-auto mb-10 ${
            data.showCursor && "cursor-none"
          }`}
        >
          <Header/>
        </div>

        <WorkPage
            images={project.images}
            name={project.title}
            description={project.description}
            about={project.about}
            links={project.links}
        />
      </>
    );
  };
  
  export default Work;