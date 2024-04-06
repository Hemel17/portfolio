import { Button, Typography } from "@material-tailwind/react";

const About = () => {
  return (
    <div className="text-center w-[90%] mx-auto">
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
      <Typography
        variant="paragraph"
        className="font-vt text-primary max-w-[80%] md:max-w-[60%] mx-auto"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
        officiis saepe expedita rerum veritatis ea quaerat autem maxime officia
        doloribus ab obcaecati delectus eveniet dolorum accusantium nihil,
        blanditiis recusandae. Officia.
      </Typography>
      <div className="flex flex-col md:flex-row mt-5 md:mt-10 justify-center gap-5 md:gap-10">
        <Typography variant="lead" className="font-vt flex-1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          unde aliquam officiis nesciunt incidunt doloribus architecto, ea animi
          asperiores deserunt?
        </Typography>
        <Typography variant="paragraph" className="text-primary font-vt flex-1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
          quibusdam at, esse rerum quae hic et totam, ullam officia illo quam
          laborum porro. Atque excepturi inventore, dolorum dicta sunt explicabo
          perferendis consectetur voluptas, placeat quod blanditiis expedita,
          enim nesciunt labore harum culpa. Sapiente, laudantium maiores. Veniam
          nam id omnis laborum.
        </Typography>
      </div>
      <Button className="font-vt bg-secondary hover:bg-primary hover:text-black text-lg tracking-wide lowercase my-5 md:my-10">
        &#123;read_more&#125;
      </Button>
    </div>
  );
};
export default About;
