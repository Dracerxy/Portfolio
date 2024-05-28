import projectOne from "../assets/sufe.png";
import projectTwo from "../assets/edulab.png";
import projectThree from "../assets/p3.jpg";
import projectFour from "../assets/blockchain-1.jpg";

const projects = {
  1: {
    title: "SUFE",
    image: projectOne,
    description: (
      <>
        <p>
        "Sufe" represents a cutting-edge smart umbrella product designed to enhance the well-being of seniors. This project in my portfolio showcases my ability to merge software and hardware development to create innovative solutions for the aging population. Sufe combines intelligent features and user-friendly technology, demonstrating my commitment to leveraging my software engineering skills for real-world applications that improve people's lives.
        </p>
      </>
    ),
  },
  2: {
    title: "Edu Labs",
    image: projectTwo,
    description: (
      <>
        <p>
        Edulabs" is an ambitious education and online web services platform geared towards students. In my portfolio, this project showcases my commitment to revolutionizing the way students access educational resources and services. With a strong emphasis on user-centered design and functionality, Edulabs embodies my passion for creating accessible, high-quality learning experiences. This project demonstrates my proficiency in web development and my dedication to empowering students with the tools they need to succeed academically.
        </p>
      </>
    ),
  },
  3: {
    title: "Online Mental Health Care App",
    image: projectThree,
    description: (
      <>
        <p>
        The Online Mental Health Care App is a comprehensive platform designed to provide mental health support and services to users through digital means. The app aims to make mental health care more accessible, affordable, and convenient by connecting users with licensed mental health professionals, offering self-help resources, and facilitating community support.
        <a href="https://mindwell-connect-frontend.vercel.app" target="blank">Link for the project!</a>
        </p>
      </>
    ),
  },
  4: {
    title: "MFA using Blockchain",
    image: projectFour,
    description: (
      <>
        <p>
        The "Multifactor Authentication Using Blockchain as Security-as-a-Service" project aims to enhance the security of digital systems by integrating multifactor authentication (MFA) with blockchain technology. This project leverages the decentralized, immutable, and transparent nature of blockchain to provide a robust and secure MFA service that can be utilized by various applications and services.
        the MFA project is implemented in My project "Online Mental Heath app" You can check it out in the abput section after loging in ..
      
        </p>
      </>
    ),
  }
};

export default projects;
