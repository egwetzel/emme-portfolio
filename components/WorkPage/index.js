import React from "react";

const WorkPage = ({ img1, img2, name, description, about, link1Name, link1, link2Name,link2 }) => {
    return (
        <div className="mt-10 w-full flex flex-col items-center">
              <div
                className={`w-full bg-gray-50 max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
              >
                <h1 className="text-3xl font-bold">{name}</h1>
                <h2 className="text-xl mt-5">{description}</h2>
                <h2 className="w-4/5 text-xl mt-5 opacity-50">
                  {about}
                </h2>

                <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
                    <Button key={index} onClick={() => window.open(link1)}>
                        {link1Name}
                    </Button>
                    <Button key={index} onClick={() => window.open(link2)}>
                        {link2Name}
                    </Button>
                </div>

                <div
                    className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
                    style={{ height: "600px" }}
                >
                    <img
                    alt={name}
                    className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
                    src={img1}
                    ></img>
                </div>

              </div>
            </div>
          )}

export default WorkPage;