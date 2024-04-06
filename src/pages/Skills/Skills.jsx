import { Progress, Typography } from "@material-tailwind/react";

const Skills = () => {
  return (
    <div className="mx-auto text-center w-[90%]">
      <Typography className="font-vt text-secondary text-2xl">
        &#123;&#35;&#125;
      </Typography>
      <Typography
        variant="lead"
        as="h2"
        className="font-vt tracking-wide text-5xl md:text-7xl my-6 md:my-10"
      >
        &lt;skills&gt;
      </Typography>
      <Typography
        variant="paragraph"
        className="font-vt text-primary max-w-[80%] md:max-w-[60%] mx-auto"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
        officiis saepe expedita rerum veritatis ea quaerat autem maxime officia
        doloribus ab obcaecati delectus eveniet dolorum accusantium nihil,
        blanditiis recusandae. Officia.
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-16 md:my-24">
        <div className="w-full">
          <div className="mb-2 flex items-center justify-between gap-4">
            <Typography className="font-vt text-lg">html</Typography>
            <Typography className="font-vt text-lg">90%</Typography>
          </div>
          <Progress value={90} color="blue" />
        </div>
        <div className="w-full">
          <div className="mb-2 flex items-center justify-between gap-4">
            <Typography className="font-vt text-lg">css</Typography>
            <Typography className="font-vt text-lg">75%</Typography>
          </div>
          <Progress value={75} color="green" />
        </div>
        <div className="w-full">
          <div className="mb-2 flex items-center justify-between gap-4">
            <Typography className="font-vt text-lg">tailwindCss</Typography>
            <Typography className="font-vt text-lg">70%</Typography>
          </div>
          <Progress value={70} color="red" />
        </div>
        <div className="w-full">
          <div className="mb-2 flex items-center justify-between gap-4">
            <Typography className="font-vt text-lg">javaScript</Typography>
            <Typography className="font-vt text-lg">80%</Typography>
          </div>
          <Progress value={80} color="amber" />
        </div>
        <div className="w-full">
          <div className="mb-2 flex items-center justify-between gap-4">
            <Typography className="font-vt text-lg">react</Typography>
            <Typography className="font-vt text-lg">85%</Typography>
          </div>
          <Progress value={85} color="deep-purple" />
        </div>
        <div className="w-full">
          <div className="mb-2 flex items-center justify-between gap-4">
            <Typography className="font-vt text-lg">mongoDb</Typography>
            <Typography className="font-vt text-lg">90%</Typography>
          </div>
          <Progress value={90} color="deep-orange" />
        </div>
      </div>
    </div>
  );
};
export default Skills;
