import { Link } from "react-router-dom";
import WorkingHistory from "./WorkingHistory";

const expertises = [
  { courseName: "React", courseImg: "https://i.ibb.co/QKmRJhc/react.png" },
  { courseName: "Next.js", courseImg: "https://imgur.com/tqkQAtZ.png" },
  { courseName: "JavaScript", courseImg: "https://i.ibb.co/MZ8TSS3/js.png" },
  { courseName: "TypeScript", courseImg: "https://imgur.com/tu5Ypud.png" },
  { courseName: "Sonar-cube", courseImg: "https://i.ibb.co/G4DM9tLk/Sonar-Qube-logo.png" },
  { courseName: "Google Kubernetes", courseImg: "https://i.ibb.co/ks4vqqjT/google-kuber.png" },
  {
    courseName: "Firebase",
    courseImg: "https://i.ibb.co/ysprm8T/firebase.png",
  },
  { courseName: "Docker", courseImg: "https://i.ibb.co/wN5mHrdS/docker.png" },
  { courseName: "Jest - unit test", courseImg: "https://imgur.com/6cCIZpV.png" },
  { courseName: "Node.js", courseImg: "https://i.ibb.co/JBr1c5L/nodeks.png" },
  { courseName: "MongoDB", courseImg: "https://imgur.com/Q0uAAAw.png" },
  { courseName: "Mongoose", courseImg: "https://imgur.com/L3tcxHA.png" },
  { courseName: "Github", courseImg: "https://imgur.com/N4PE9rL.png" },
  { courseName: "Html5", courseImg: "https://imgur.com/k4NNbvO.png" },
  { courseName: "CSS3", courseImg: "https://imgur.com/M6ffNjb.png" },
  { courseName: "Antd", courseImg: "https://imgur.com/080MQrp.png" },
  { courseName: "Framer Motion", courseImg: "https://imgur.com/3ALGE7t.png" },
  { courseName: "StoryBook", courseImg: "https://imgur.com/2FVDNcU.png" },
  {
    courseName: "Tailwind",
    courseImg: "https://i.ibb.co/bNXXdfD/tailwind.png",
  },
  {
    courseName: "BootStrap5",
    courseImg: "https://i.ibb.co/gSp5H9Z/bootstrap.png",
  },
  
  { courseName: "JQuery", courseImg: "https://i.ibb.co/0K7HvLZ/html5.png" },
  
];

const education = [
  {
    degree: "M.Sc. Software Engineering & Management",
    school: "University of Gothenburg, Sweden",
    year: "2023 — Present",
    current: true,
    icon: "🎓",
  },
  {
    degree: "B.Sc. Computer Science & Engineering",
    school: "United International University",
    year: "2018 — 2022",
    current: false,
    icon: "🏛️",
  },
];

function AboutMe() {
  return (
    <div className="about-me px-[5%] sm:px-[10%] lg:px-[10%] bg-slate-50 pt-10 sm:pt-20 pb-24">
      <h2 className="text-2xl whitespace-nowrap sm:text-4xl font-bold text-black/70 flex items-center gap-x-5 md:gap-x-10">
        About me
      </h2>
      <div className="flex flex-col md:flex-row items-start gap-x-10 mt-7 sm:mt-14">
        {/* Left: Bio */}
        <div className="w-full md:w-[45%]">
          <p className="text-black/80 text-justify leading-[150%] md:leading-[200%] text-xs lg:text-[15px]">
            A Software Engineer passionate about designing and building
            scalable, user-focused software solutions. I hold a Bachelor's
            degree in Computer Science and Engineering from United International
            University and am currently pursuing a Master's degree in Software
            Engineering and Management at the University of Gothenburg, Sweden.
            My journey has been shaped by a strong problem-solving mindset and a
            test-driven approach, enabling me to deliver clean, maintainable,
            and high-quality code. Here are a few technologies I've been working
            with recently:
          </p>
          <div className="flex justify-center md:justify-start">
            <Link to="/contact">
              <button className="border-2 border-primary hover:bg-primary text-primary hover:text-white transition duration-400 ease-in-out font-semibold hover:font-normal px-5 md:px-10 py-2 md:py-3 rounded-lg mt-6 sm:mt-8 text-sm md:text-base">
                Contact me
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Education + Skills */}
        <div className="w-full md:w-[55%] mt-8 md:mt-0 flex flex-col gap-y-6">
          {/* Education */}
          <div>
            <h2 className="text-base font-semibold text-primary mb-3">
              Education
            </h2>
            <div className="overflow-hidden  w-[100%] md:w-[90%] flex flex-col gap-2">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 px-4 py-3 bg-white border rounded-lg ${i !== education.length - 1 ? "" : ""}`}
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-base flex-shrink-0 mt-0.5">
                    {edu.icon}
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm font-medium text-black/80 leading-snug mb-0.5">
                      {edu.degree}
                    </p>
                    <p className="text-xs text-black/50 mb-1">{edu.school}</p>
                    <span
                      className={`text-[10px] font-medium px-2 py-0.5 rounded ${edu.current ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"}`}
                    >
                      {edu.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div>
            <h2 className="text-base font-semibold text-primary mb-3">
              Expertise Area
            </h2>
            <div className="flex gap-3 flex-wrap">
              {expertises.map((expertise, i) => (
                <div
                  key={i}
                  className="flex items-center gap-x-3 shadow-lg pl-2 pr-3 py-2 rounded-[5px]"
                >
                  <img
                    className="w-4 lg:w-6"
                    src={expertise.courseImg}
                    alt={expertise.courseName}
                  />
                  <span className="text-sm lg:text-sm">
                    {expertise.courseName}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <WorkingHistory />
    </div>
  );
}

export default AboutMe;
