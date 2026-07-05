import { techRowOne, techRowTwo } from "../data/portfolio";

function MarqueeRow({ items, reverse = false }) {
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="marquee-row">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {repeatedItems.map((item, index) => (
          <span className="tech-chip" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function TechMarquee() {
  return (
    <section className="tech-marquee" aria-label="Technology stack">
      <MarqueeRow items={techRowOne} />
      <MarqueeRow items={techRowTwo} reverse />
    </section>
  );
}

export default TechMarquee;