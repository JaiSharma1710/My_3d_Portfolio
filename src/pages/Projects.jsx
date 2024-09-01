import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Icons = {
  IoChatboxEllipsesOutline: (
    <IoChatboxEllipsesOutline className="w-8 text-white h-8" />
  ),
};

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div
            className="lg:w-[400px] w-full shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] p-4 rounded-lg"
            key={project.name}
          >
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                {Icons[project.icon]}
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex justify-between items-center gap-2 font-poppins">
                <div className="flex items-center gap-2">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
                <Link
                  to={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-8 h-8 cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
