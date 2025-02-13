function ProjectInfo({ title, desc, picture, skills, githubLink, demoLink }) {
  return (
    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-3">{desc}</p>
      <img
        src={picture}
        alt="Picture of first web project"
        className="rounded my-2"
        draggable={false}
      />
      <div className="flex flex-wrap">
        {skills.map((skill, key) => (
          <span
            key={key}
            className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <a
          target="_blank"
          href={githubLink}
          className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex justify-center"
        >
          View Github{" "}
        </a>
        <a
          target="_blank"
          href={demoLink}
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectInfo;
