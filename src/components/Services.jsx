const STYLE_H2 =
  "text[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow";

const Services = () => {
  return (
    <section
      id="Services"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"
      >
        Services
      </h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        <h2 data-aos="fade-up" className={STYLE_H2}>
          HTML
        </h2>
        <h2 data-aos="fade-down" className={STYLE_H2}>
          CSS
        </h2>
        <h2 data-aos="fade-up" className={STYLE_H2}>
          SASS/SCSS
        </h2>
        <h2 data-aos="fade-down" className={STYLE_H2}>
          JavaScript
        </h2>
        <h2 data-aos="fade-up" className={STYLE_H2}>
          React
        </h2>
        <h2 data-aos="fade-down" className={STYLE_H2}>
          TypeScript
        </h2>
        <h2 data-aos="fade-up" className={STYLE_H2}>
          Next.js
        </h2>
        <h2 data-aos="fade-down" className={STYLE_H2}>
          Scratch
        </h2>
      </div>
    </section>
  );
};

export default Services;
