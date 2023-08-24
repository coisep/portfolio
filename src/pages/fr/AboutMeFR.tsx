import Image from "next/image";
import Link from "next/link";

const AboutMe: React.FC = () => {
  return (
    <>
      <div className="flex flex-row justify-center w-full pl-20">
        <h1 className="text-3xl text-green-700">
          Je m'appelle João Luís, et pendant mes années de lycée, j'ai suivi le
          cours professionnel en informatique et gestion à l'école secondaire de
          Marco de Canaveses. Cette expérience m'a permis de me lancer sur le
          marché du travail dans le domaine de l'informatique et des services,
          en collaborant avec une entreprise locale de 2008 à 2011. Cependant,
          au cours des dix dernières années, j'ai emprunté d'autres chemins et
          j'ai travaillé à l'étranger dans un domaine professionnel différent.
          Ma passion pour l'informatique n'a jamais disparu, et après avoir subi
          un accident de travail en novembre 2021 qui m'a empêché de poursuivre
          la profession que j'exerçais, j'ai décidé de réaliser mon rêve de
          travailler dans le monde technologique. C'est ainsi qu'est apparue
          l'opportunité de suivre un cours de programmation web dans le cadre du
          projet Bytes4Future (
          <Link
            href="https://www.bytes4future.pt/"
            className="hover:text-red-500"
          >
            www.bytes4future.pt
          </Link>
          ). Cette formation m'a permis de mettre à jour mes connaissances et de
          me préparer à réintégrer le marché du travail dans ce domaine.
        </h1>
      </div>

      <div className="pdfviewer flex flex-row justify-center w-full pt-24 ">
        <Image
          src="/joao_luis_pages-to-jpg-0001.jpg"
          width={700}
          height={400}
          alt="certificado"
          className=""
        />{" "}
      </div>
    </>
  );
};

export default AboutMe;
