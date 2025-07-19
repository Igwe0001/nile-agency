function Skill({ title = "", description = "", image, background = "" }) {
  return (
    <div className="flex items-center gap-4 p-3">
      <img
        className={`block p-3 rounded-md w-[50px]`}
        style={{ backgroundColor: `#${background}` }}
        src={image}
        alt="image"
      />
      <div>
        <h2 className="font-semibold">{title}</h2>
        <p className="text-xs text-paragraph-1">{description}</p>
      </div>
    </div>
  );
}

export default Skill;
