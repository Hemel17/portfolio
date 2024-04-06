import { Typography } from "@material-tailwind/react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      imageLink: "https://i.ibb.co/FzctdVh/screenshot.png",
      title: "blog_preview_card",
    },
    {
      id: 2,
      imageLink: "https://i.ibb.co/rf7TX8W/screenshot-1.png",
      title: "nft_preview_card",
    },
    {
      id: 3,
      imageLink: "https://i.ibb.co/KqD87Wt/screenshot-2.png",
      title: "order_summary_component",
    },
    {
      id: 4,
      imageLink: "https://i.ibb.co/T1RmJc8/screenshot-3.png",
      title: "profile_card",
    },
    {
      id: 5,
      imageLink: "https://i.ibb.co/FzctdVh/screenshot.png",
      title: "blog_preview_card",
    },
    {
      id: 6,
      imageLink: "https://i.ibb.co/rf7TX8W/screenshot-1.png",
      title: "nft_preview_card",
    },
  ];

  return (
    <div className="text-center w-[90%] mx-auto">
      <Typography className="font-vt text-secondary text-2xl">
        &#40;&#33;&#41;
      </Typography>
      <Typography
        variant="lead"
        as="h2"
        className="font-vt tracking-wide text-5xl md:text-7xl my-6 md:my-10"
      >
        &lt;portfolio&gt;
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

      <div className="mt-5 md:mt-10 mb-16 md:mb-24 grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id}>
            <img
              className="h-56 w-full max-w-full rounded-lg object-cover object-center"
              src={project.imageLink}
              alt="project-photo"
            />
            <Typography className="font-vt text-xl">{project.title}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Portfolio;
