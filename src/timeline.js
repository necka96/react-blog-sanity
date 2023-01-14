import sertificatJava from "./assets/osnovi jave sertifikat.pdf";
import sertificatJs from "./assets/sertifikat js .pdf";
let timelineElements = [
  {
    id: 1,
    title: "AOI Viscom operator",
    location: "Elrad, Serbia",
    description: "Automatic optical product control",
    date: "Mart 2021 - present",
    icon: "work",
  },

  {
    id: 2,
    title: "Basics of Java",
    location: "Ris Hub, Uzice",
    description:
      "Online course on the basics of programming in the programming language java",
    buttonText: "Course certificate",
    date: "January 2022",
    icon: "school",
    buttonLink: sertificatJava,
  },
  {
    id: 3,
    title: "Web development for absolute beginners",
    location: "Ris Hub, Uzice",
    description: "Online course html css and js",
    buttonText: "Course certificate",
    date: "August 2021",
    icon: "school",
    buttonLink: sertificatJs,
  },
  {
    id: 4,
    title: "Faculty of Occupational Safety",
    location: "Niš, Serbia",
    description: "Faculty of Occupational Safety and Health in Nis",
    date: "2015 - present",
    icon: "school",
  },
  {
    id: 5,
    title: "Technical school",
    location: "Vlasotince, Serbia",
    description: "High School in Vlasotince majoring in economic engineering",
    // buttonText: "Diploma srednje skole",
    date: "2011 - 2015",
    icon: "school",
  },
];

export default timelineElements;
