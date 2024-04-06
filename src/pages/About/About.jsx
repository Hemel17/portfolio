import { Typography } from "@material-tailwind/react";

const About = () => {
  return (
    <div className="text-center">
      <Typography className="font-vt text-secondary text-2xl mt-16 md:mt-24">
        &#123;&#47;&#125;
      </Typography>
      <Typography
        variant="lead"
        as="h2"
        className="font-vt tracking-wide text-5xl md:text-7xl my-6 md:my-10"
      >
        &lt;about_me&gt;
      </Typography>
      <Typography variant="paragraph" className="font-vt text-primary max-w-[80%] md:max-w-[60%] mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis officiis saepe expedita rerum veritatis ea quaerat autem maxime officia doloribus ab obcaecati delectus eveniet dolorum accusantium nihil, blanditiis recusandae. Officia.
      </Typography>
    </div>
  );
};
export default About;
