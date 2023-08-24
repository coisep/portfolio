import Image from "next/image";

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
          Projet de mobilité pour Marco de Canaveses
          </h3>
        </div>
        <div className="bg-gray-100 flex flex-col items-center p-4 rounded-lg">
          <Image
            src="/alugueoseuverao.png"
            width={400}
            height={400}
            alt="joaoLuis"
            className=""
          />
          <h3 className="text-green-700 pt-4">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
                      Projet final du bootCamp (Boutique de location d'équipements de camping)
          </h3>
        </div>
        <div className="bg-gray-100 flex flex-col items-center p-4 rounded-lg">
          <Image
            src="/loginproject.png"
            width={400}
            height={400}
            alt="joaoLuis"
            className=""
          />
          <h3 className="text-green-700 pt-4">Login interface</h3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-14 pt-10">
        <div className="bg-gray-100 flex flex-col items-center p-4 rounded-lg">
          <Image
            src="/urlshortnerTESTE.png"
            width={400}
            height={400}
            alt="joaoLuis"
            className=""
          />
          <h3 className="text-green-700 pt-4">UrlShortner</h3>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-14 pt-10">
        <div className="bg-gray-100 flex flex-col items-center p-4 rounded-lg">
          <Image
            src="/proveit.png"
            width={400}
            height={400}
            alt="joaoLuis"
            className=""
          />
{/* eslint-disable-next-line react/no-unescaped-entities */}
Aperçu du site web Proveit à Marco de Canaveses        </div>
      </div>
      </div>


    </>
  );
};

export default Projects;
