import Me from "../assets/images/me.jpg";
import Resume from "../assets/resume.pdf";

// eslint-disable-next-line react/prop-types
const About = ({ language }) => (
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
        {language ? "About me" : "Обо мне"}
      </h1>

      <p data-aos="fade-left">
        {language
          ? "I&apos;m a Frontend developer with a passion for JavaScript, TypeScript, Next.js and React. With over a year of professional experience, I have specialised in building responsive and reusable UI components. My approach to development is based on the principles of Agile philosophy, I apply Scrum methodology, complementing it with Agile principles to organise a more predictable development process. In addition to technical skills, I also have an aptitude for teaching and mentoring. During this time, I have mentored more than 50 students. My passion for quality work and helping others succeed makes me a valuable team member."
          : "Я Frontend-разработчик, увлекающийся JavaScript, TypeScript, Next.js и React. Имея более чем годовой профессиональный опыт, я специализируюсь на создании отзывчивых и многократно используемых компонентов пользовательского интерфейса. Мой подход к разработке основан на принципах философии Agile, я применяю методологию Scrum, дополняя ее принципами Agile для организации более предсказуемого процесса разработки. Помимо технических навыков, я также обладаю способностями к обучению и наставничеству. За это время я стал наставником более 50 студентов. Моя страсть к качественной работе и помощи другим людям в достижении успеха делает меня ценным членом команды."}
      </p>

      <div className="flex mt-8 gap-2">
        <div className="flex items-center justify-center">
          <div className="flex space-x-2">
            <a href={Resume} download="resume.pdf">
              <button className="neno-button shadow-x1 hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">
                {language ? "Resume" : "Резюме"}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
