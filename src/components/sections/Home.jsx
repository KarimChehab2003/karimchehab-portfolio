import RevealOnScroll from "../RevealOnScroll";
function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-orange-300 bg-clip-text text-transparent leading-right">
            Hi, I'm Karim Chehab
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a full-stack web developer who loves building dynamic,
            user-friendly apps with React, Node.js, and Tailwind CSS. I focus on
            clean code, smooth experiences, and bringing ideas to life {";)"}
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-pink-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(250, 120, 250, 0.4)]"
            >
              View Projects
            </a>
            <a
              href="#projects"
              className="border border-pink-500/50 text-pink-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(250, 120, 250, 0.2)] hover:bg-pink-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Home;
