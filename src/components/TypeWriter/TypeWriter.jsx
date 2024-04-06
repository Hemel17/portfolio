import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  return (
    <>
      <Typography
        variant="lead"
        as="h1"
        className="text-center mt-28 md:mt-32 tracking-wider font-vt"
      >
        HI, I&apos;M HEMEL, A...
      </Typography>

      <Typography className="text-center text-3xl md:text-7xl mt-6 md:mt-8 font-vt">
        &#123;&#34;{" "}
        <span className="text-primary">
          <Typewriter
            words={[
              "_front end developer",
              "_back end developer",
              "_full stack developer",
            ]}
            loop={0}
            typeSpeed={100}
            cursor
            cursorBlinking
          />
        </span>
        &#34;&#125;{" "}
      </Typography>

      <Typography className="text-center my-20 md:my-24 text-3xl animate-bounce rotate-180">
        <Link to="about">&#8659;</Link>
      </Typography>
    </>
  );
};
export default TypeWriter;
