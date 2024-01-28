import Image from "next/image";

const ProjectTag = ({ title, imgUrl, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "text-white border-governor-bay-500 "
    : "text-[#ADB7BE] border-slate-600 hover:border-[#a7a7a7]";
  return (
    <button onClick={() => onClick(title)}>
      <Image
        className="h-auto max-w-full rounded-lg hover:scale-105 transition hover:opacity-60"
        src={imgUrl}
        alt={title}
        width={200}
        height={500}
      />
    </button>
  );
};

export default ProjectTag;
