import Image from "next/image";
import Link from "next/link";



const AboutMe: React.FC = () => {
  return (
    <>
      <div className="flex flex-row justify-center w-full pl-20">
        <h1 className="text-3xl text-green-700">
          O meu nome é João Luís e durante o ensino secundário frequentei o
          Curso Profissional de Informática e Gestão na Escola Secundária de
          Marco de Canaveses. Essa experiência permitiu-me ingressar no mercado
          de trabalho na área de informática e serviços, colaborando com uma
          empresa local entre 2008 e 2011. <p>No entanto, ao longo dos últimos 10
          anos, segui outros caminhos e estive no estrangeiro a desempenhar
          funções numa área profissional distinta.</p><p>A paixão pela informática
          nunca desapareceu e após ter sofrido um acidente de trabalho em
          novembro de 2021 que me impediu de continuar a profissão que exercia,
          decidi recuperar o meu sonho de trabalhar no mundo tecnológico. Surgiu
          assim, a oportunidade de realizar um curso de programação web através
          do projeto Bytes4Future (<Link href='https://www.bytes4future.pt/' className="hover:text-red-500">www.bytes4future.pt</Link>). </p>Esta formação
          permitiu-me atualizar conhecimentos e estar preparado para reingressar
          no mercado de trabalho nesta área. Motivado para colocar em prática
          estas competências, surgiu a ideia de criar uma aplicação web para a
          melhoria da mobilidade em Marco de Canaveses, uma vez que eu próprio
          sinto esse problema.
        </h1>
      </div>
  
      <div className="pdfviewer flex flex-row justify-center w-full pt-24 ">
      <Image
            src="/joao_luis_pages-to-jpg-0001.jpg"
            width={700}
            height={400}
            alt="certificado"
            className=""
          />    </div>
    
    </>
  );
};

export default AboutMe;
