import data from "../data/portfolio.json";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";

const Work = () => {
    const router = useRouter();
  
    useEffect(() => {
      setMount(true);
    }, []);

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
          <Header isBlog />
        </div>

        <WorkPage
            img1={project.imageSrc1}
            img2={project.imageSrc2}
            name={project.title}
            description={project.description}
            about={project.about}
            link1Name={project.link1Name}
            link1={project.link1}
            link2Name={project.link2Name}
            link2={project.link2}
        />
      </>
    );
  };
  
  export default Work;