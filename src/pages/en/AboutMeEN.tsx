import Image from "next/image";
import Link from "next/link";

const AboutMe: React.FC = () => {
  return (
    <>
      <div className="flex flex-row justify-center w-full pl-20">
        <h1 className="text-3xl text-green-700">
          My name is João Luís, and during high school, I attended the
          Professional Course in Information Technology and Management at Marco
          de Canaveses Secondary School. This experience allowed me to enter the
          job market in the field of computer and services, collaborating with a
          local company between 2008 and 2011. However, over the last 10 years,
          I followed different paths and worked abroad in a different
          professional field. My passion for computer science never disappeared,
          and after suffering a work-related accident in November 2021 that
          prevented me from continuing in the profession I was in, I decided to
          pursue my dream of working in the technology world. This led to the
          opportunity to take a web programming course through the Bytes4Future
          project (
          <Link
            href="https://www.bytes4future.pt/"
            className="hover:text-red-500"
          >
            www.bytes4future.pt
          </Link>
          ). This training allowed me to update my knowledge and be prepared to
          re-enter the job market in this field.
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
