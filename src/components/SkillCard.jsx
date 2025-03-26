function SkillCard({ skill }) {
  return (
    <div className="w-[200px] p-4 relative border border-[#FFFFFF26] bg-[#FFFFFF08] rounded-lg">
      <p className="w-full text-center">{skill}</p>
      <div className="absolute -top-2 -right-2 bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.5)] w-[15px] h-[15px] rounded-full"></div>
    </div>
  );
}

export default SkillCard;
