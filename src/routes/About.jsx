import BackButton from "../components/BackButton";

function About() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center gap-12 relative p-12">
      <BackButton />
      <section className="w-[800px]">
        <div className="flex items-center gap-4 pb-4">
          <div className="w-[12px] h-[12px] bg-white shadow-[0_0_4px_1px_#FFF] rounded-full"></div>
          <h1 className="text-xl ibm-flex-sans-extralight text-[#FFFFFF80]">
            Projetos
          </h1>
        </div>
        <h1 className="text-3xl text-white ibm-flex-sans-semibold">
          Apaixonado por desvendar o que acontece por trás da criação, da
          arquitetura à implementação.
        </h1>
      </section>
      <section className="w-[800px] flex justify-between">
        <article className="w-[375px] flex flex-col gap-4">
          <div className="w-full h-[700px] p-[10px] border border-[#ffffff50] rounded-2xl bg-[#ffffff05]">
            <img src="" alt="" className="w-full h-full" />
          </div>
          <h1 className="text-center text-white">Alguma coisa aqui</h1>
        </article>
        <article className="w-[375px] flex flex-col gap-4">
          <h1 className="text-center text-white pt-4">Alguma coisa aqui</h1>
          <div className="w-full h-[700px] p-[10px] border border-[#ffffff50] rounded-2xl bg-[#ffffff05]">
            <img src="" alt="" className="w-full h-full" />
          </div>
        </article>
      </section>
    </main>
  );
}

export default About;
