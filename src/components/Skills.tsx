import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 items-center">
          {/* First Column: Heading and Paragraph */}
          <div data-aos="zoom-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Technologies I Work With
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              I am a 3rd-year Software Engineering student and a skilled frontend
              developer with a strong foundation in HTML, CSS, and TypeScript,
              creating responsive and visually appealing user interfaces.
              Proficient in React and Next.js, I build reusable components and
              scalable web applications that enhance the user experience. My
              experience with TypeScript ensures type safety and boosts code
              quality, making applications robust and maintainable. I also have a
              working knowledge of backend development in Node.js, giving me a
              comprehensive understanding of full-stack development. Familiar with
              Git and Agile methodologies, I thrive in collaborative environments,
              contributing to efficient and organized project workflows.
            </p>
          </div>

          {/* Second Column: Skills Grid */}
          <div>
            <div className="grid grid-cols-2 gap-8 md:gap-12">
              {/* First Row */}
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-xl lg:text-2xl font-semibold">HTML</h2>
                <h2 className="text-xl lg:text-2xl font-semibold">CSS</h2>
                <h2 className="text-xl lg:text-2xl font-semibold">TypeScript</h2>
              </div>
              {/* Second Row */}
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-xl lg:text-2xl font-semibold">Next.js</h2>
                <h2 className="text-xl lg:text-2xl font-semibold">Node.js</h2>
                <h2 className="text-xl lg:text-2xl font-semibold">Tailwind CSS</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
