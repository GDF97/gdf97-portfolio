export default function BackButton() {
  return (
    <button
      onClick={() => history.back()}
      className="py-2 px-4 bg-[rgb(255,255,255,0.15)] absolute text-white top-4 left-4 rounded-xl"
    >
      Voltar
    </button>
  );
}
