import PeaksoftHouse from "../assets/images/peaksoft-house.png";
import Gadgetarium from "../assets/images/gadgetarium.png";
import MedCheck from "../assets/images/medcheck.png";

const STYLE_IMG =
  "text[26px flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow";

const PROJECTS = [
  {
    id: 1,
    name: "Peaksoft House",
    image: PeaksoftHouse,
    aos: "fade-up",
    style: {
      height: "150px",
    },
    url: "https://peaksoft.house/",
  },
  {
    id: 2,
    name: "Gadgetarium",
    image: Gadgetarium,
    aos: "fade-down",
    style: {
      height: "150px",
    },
    url: "https://bit.ly/4aeK99h",
  },
  {
    id: 3,
    name: "MedCheck",
    aos: "fade-up",
    image: MedCheck,
    style: {
      height: "150px",
    },
    url: "https://bit.ly/3Rudipr",
  },
];

// eslint-disable-next-line react/prop-types
const Projects = ({ language }) => (
  <section
    id="Projects"
    className="p-20 flex flex-col items-center justify-center"
  >
    <h1
      data-aos="fade-right"
      className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"
    >
      {language ? "Projects" : "Проекты"}
    </h1>

    <div className="flex w-full flex-wrap gap-7 justify-evenly">
      {PROJECTS.map(({ id, image, name, aos, style, url }) => (
        <a key={id} href={url}>
          <img
            style={style}
            data-aos={aos}
            height={250}
            width={250}
            className={STYLE_IMG}
            src={image}
            alt={name}
          />
        </a>
      ))}
    </div>
  </section>
);

export default Projects;
