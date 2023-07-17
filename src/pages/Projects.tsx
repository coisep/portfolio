import Image from "next/image";
import { Share_Tech_Mono } from "next/font/google";
import { useState } from "react";

const Projects: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-14">
                <div className="bg-gray-100 flex flex-col items-center p-4 rounded-lg">
          <Image
            src="/Screenshot.png"
            width={400}
            height={400}
            alt="joaoLuis"
            className=""
          />
          <h3 className="text-green-700 pt-4">
            Projecto para mobilidade do Marco de Canaveses
          </h3>
        </div>
        <div className="bg-gray-100 flex flex-col items-center p-4 rounded-lg">

          <Image
            src="/Screenshot.png"
            width={400}
            height={400}
            alt="joaoLuis"
            className=""
          />
          <h3 className="text-green-700 pt-4">
            Projecto para mobilidade do Marco de Canaveses
          </h3>
        </div>
        <div className="bg-gray-100 flex flex-col items-center p-4 rounded-lg">
          <Image
            src="/Screenshot.png"
            width={400}
            height={400}
            alt="joaoLuis"
            className=""
          />
          <h3 className="text-green-700 pt-4">
            Projecto para mobilidade do Marco de Canaveses
          </h3>
        </div>
      </div>
      

      <div className="flex flex-wrap items-center justify-center gap-14 pt-10">
                <div className="bg-gray-100 flex flex-col items-center p-4 rounded-lg">
          <Image
            src="/Screenshot.png"
            width={400}
            height={400}
            alt="joaoLuis"
            className=""
          />
          <h3 className="text-green-700 pt-4">
            Projecto para mobilidade do Marco de Canaveses
          </h3>
        </div>
        <div className="bg-gray-100 flex flex-col items-center p-4 rounded-lg">

          <Image
            src="/Screenshot.png"
            width={400}
            height={400}
            alt="joaoLuis"
            className=""
          />
          <h3 className="text-green-700 pt-4">
            Projecto para mobilidade do Marco de Canaveses
          </h3>
        </div>
        <div className="bg-gray-100 flex flex-col items-center p-4 rounded-lg">
          <Image
            src="/Screenshot.png"
            width={400}
            height={400}
            alt="joaoLuis"
            className=""
          />
          <h3 className="text-green-700 pt-4">
            Projecto para mobilidade do Marco de Canaveses
          </h3>
        </div>
      </div>

    </>
  );
};

export default Projects;
