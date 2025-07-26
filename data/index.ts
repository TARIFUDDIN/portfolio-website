export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "skills", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className: "lg:col-span-3 lg:row-span-2 md:col-span-3 md:row-span-3", // Top left - span 2 rows
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-3 lg:row-span-5 md:col-span-3 md:row-span-5", // Under id1 - span 2 rows
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Passionate About Cutting Edge Technologies",
    description: "",
    className: "lg:col-span-2 lg:row-span-7 md:col-span-3 md:row-span-6", // Right side - height of id1+id2 (2+2=4)
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 lg:row-span-1 md:col-span-3 md:row-span-1", // Under id2 - span 1 row
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 lg:row-span-1 md:col-span-3 md:row-span-1", // Under id4 - span 1 row
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "Currently building a Ai Agent for a Law Firm",
    description: "The Inside Scoop",
    className: "lg:col-span-3 lg:row-span-7 md:col-span-3 md:row-span-5", // Under id3, right side - height of id4+id6 (1+1=2)
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/lawagent.png",
    spareImg: "/grid.svg",
  },
];

export const projects = [
  {
    id: 1,
    title: "MultiVendor Saas Website Builder& Project Management",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/plura image.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: " Ai powered Multifucntionality Career Coach",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/ai-career-coach.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Agentic Ai Interview Platform",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/interview.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Agentic Ai Doctor Appointment Booking System",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
  {
    id: 5,
    title: " Loom:Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 6,
    title: "Personal Modern Developers Portfolio",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
];
export const testimonials = [
  {
    quote:
      "Working with Tarifuddin on the Suraksha AI project was exceptional. His ability to integrate voice AI with appointment booking systems using Ultravox and NestJS was impressive. The way he handled complex AI agent workflows and delivered a production-ready healthcare solution in such a short time showcased his technical expertise and dedication to quality.",
    name: "Sekhar Ray",
    title: "Director of Panna Labs LLC",
  },
  {
    quote:
      "Tarifuddin's work on our restaurant AI receptionist for ZatkaBites exceeded all expectations. His implementation of intelligent food ordering systems and seamless integration with existing workflows demonstrated his deep understanding of AI agents and real-world business applications. His problem-solving skills and attention to detail are remarkable.",
    name: "Aackose Mentu Laal",
    title: "Senior AI Architect at Panna Labs LLC",
  },
  {
    quote:
      "I had the pleasure of mentoring Tarifuddin during his development of the dental clinic AI assistant, Stella. His proficiency in TypeScript, Next.js, and AI integration technologies is outstanding. He consistently delivered clean, scalable code and showed great initiative in debugging complex AI agent interactions. A truly talented developer.",
    name: "Koulik Jana",
    title: "Senior Full Stack Engineer at Panna Labs LLC",
  },
  {
    quote:
      "Tarifuddin's contribution to our law firm AI agent project has been invaluable. His expertise in building conversational AI systems and appointment management workflows using cutting-edge technologies like N8N and Ultravox is impressive. He approaches every challenge with enthusiasm and delivers solutions that exceed expectations.",
    name: "Pritam Jana",
    title: "Senior AI Engineer at Panna Labs LLC",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Fullstack developer  Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
