import { Button, Typography } from "@material-tailwind/react";

const Contact = () => {
  return (
    <div className="mx-auto w-[90%] text-center">
      <Typography className="font-vt text-secondary text-2xl">
        &#123;&#42;&#125;
      </Typography>
      <Typography
        variant="lead"
        as="h2"
        className="font-vt tracking-wide text-5xl md:text-7xl my-6 md:my-10"
      >
        &lt;contact_me&gt;
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

      <form className="flex w-full flex-col gap-6 mt-16 md:mt-24">
        <input
          type="text"
          placeholder="_name&#42;"
          required
          className="font-vt bg-transparent text-secondary text-xl leading-10 outline-none border-b-2 border-blue-gray-800 focus:border-secondary placeholder-color"
        />
        <input
          type="email"
          placeholder="_email&#42;"
          required
          className="font-vt bg-transparent text-secondary text-xl leading-10 outline-none border-b-2 border-blue-gray-800 focus:border-secondary placeholder-color"
        />
        <textarea
          placeholder="_message&#42;"
          rows={4}
          required
          className="font-vt bg-transparent text-secondary text-xl leading-10 outline-none border-b-2 border-blue-gray-800 focus:border-secondary placeholder-color resize-none"
        >
          {" "}
        </textarea>
      </form>
        <Button
          className="font-vt bg-secondary text-lg tracking-wide lowercase mt-5 mb-16 md:mb-24"
        >
          &#123;send&#125;
        </Button>
    </div>
  );
};
export default Contact;
