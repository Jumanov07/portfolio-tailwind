import Me from "../assets/images/me.jpg";
import Resume from "../assets/resume.pdf";

const About = () => {
  return (
    <section
      id="About"
      className="lg:px-20 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center"
    >
      <img
        data-aos="fade-down"
        src={Me}
        alt="image profile"
        className="rounded border-2 p-1 border-fuchsia-500 img_glow"
        width={290}
        height={290}
      />
      <div className="h-full lg:pt-10 lg:pr-0 lg:pb-10 lg:pl-10 flex flex-col justify-center lg:items-start items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase"
        >
          About me
        </h1>

        <p data-aos="fade-left">
          I&apos;m a Frontend developer with a passion for JavaScript,
          TypeScript, Next.js, and React. In half a year of professional
          experience, I have specialized in creating responsive and reusable UI
          components. I work effectively with agile methodologies, which
          promotes speed and adaptability in development. In addition to
          technical skills, I also possess the ability to teach and mentor. Have
          mentored more than 40 students during this time. My passion for
          quality work and helping others succeed makes me a valuable team
          member.
        </p>

        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a href={Resume} download="resume.pdf">
                <button className="neno-button shadow-x1 hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
