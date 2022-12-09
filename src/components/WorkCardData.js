import './WorkCardStyles.css';
import Project1taskify from '../assets/Project1-taskify.png';
import Project2portfolio from '../assets/Project2-portfolio.png';
import Project3ecommerce from '../assets/Project3-ecommerce.png';
import Project4blog from '../assets/Project4-blog.png';
import Project5newsEater from '../assets/Project5-newsEater.png';
import Project6hobbyFriendly from '../assets/Project6-hobbyFriendly.png';

const ProjectCardData = [
  { 
    id: 0,
    title: "Taskify",
    imgsrc: Project1taskify,
    alt: "taskifyImage",
    description: "Used for increase the productivity and tracks your progress towards the your project or goal. It has a workspace features that means multiple people collobrate in one project. It has a features like create boards , add container in board and add task in container. Board member also add comment in perticular task and assign flag over that.",
    techStack: "TechStack: React, Redux, Nodejs, Express, MongoDB, and Firebase.",
    viewProj: "https://www.youtube.com/watch?v=0h2b4ftbZcU",
    viewRepo: "https://github.com/kespinak/Bug-Tracker"
  },
  {
    id: 1,
    title: "The Ultimate Portfolio",
    alt: "portfolioImage",
    imgsrc: Project2portfolio,
    description: "My personal portfolio KevinEspina.tech which features some of my github projects as well as my resume and technical skills. Please explore my portfolio and feel free to contact me if you have any questions and/or job inquiries. In addition, please add me on linkedin and follow me on github. I enjoy meeting new people and learning new things.",
    techStack: "TechStack: React, Nodejs, Express, CSS, and Vercel.",
    viewProj: "https://www.youtube.com/watch?v=0h2b4ftbZcU",
    viewRepo: "https://github.com/kespinak/Bug-Tracker"
  },
  {
    id: 2,
    title: "E-commerce",
    imgsrc: Project3ecommerce,
    alt: "ecommerceImage",
    description: "My e-commerce site which I built in MERN tech stack. It has all the functionality which is required in e-commerse site.It has a features like login, signup as a part of authentication. Apart from that user add product in cart, modify quantity and also remove poduct in cart. It is a basic e-comerce site which build in pure html, css, reactjs and redux. You can watch live app in below button",
    techStack: "TechStack: React, Redux, Nodejs, Express, CSS, and Vercel.",
    viewProj: "https://www.youtube.com/watch?v=0h2b4ftbZcU",
    viewRepo: "https://github.com/kespinak/Bug-Tracker"
  },
  {
    id: 3,
    title: "Blog",
    imgsrc: Project4blog,
    alt: "blogImage",
    description: "It is a basic blog website which cover all the concept of REACTJS. Main Motivation of this project is understand basic features of the Reactjs like api fetching, multiple filtering in profile , post and comments. It includes lots' of features which is necessary in any blog site. You can visit Live site by clicking below button.",
    techStack: "TechStack: React, Redux, Nodejs, Express, CSS, and Vercel.",
    viewProj: "https://www.youtube.com/watch?v=0h2b4ftbZcU",
    viewRepo: "https://github.com/kespinak/Bug-Tracker"
  },
  {
    id: 4,
    title: "News Eater",
    imgsrc: Project5newsEater,
    alt: "newsEaterImage",
    description: "News Eater is a live news feed application that allows users to stay up-to-date with the latest news from around the world. The app features a customizable feed, allowing users to select the sources and topics they are most interested in, as well as the ability to save articles for offline reading. With News Eater, users can stay informed on the go and never miss a breaking news story.",
    techStack: "TechStack: React, Redux, Nodejs, Express, CSS, and Vercel.",
    viewProj: "https://www.youtube.com/watch?v=0h2b4ftbZcU",
    viewRepo: "https://github.com/kespinak/Bug-Tracker"
  },
  {
    id: 5,
    title: "Hobby Friendly",
    imgsrc: Project6hobbyFriendly,
    alt: "hobbyFriendlyImage",
    description: "Hobby Friendly is an application for everyone! Whether you enjoy hiking, painting, or knitting, Hobby makes it easy to find and connect with others in your area and who share your interests. Hobby is the perfect app to help expand your social circle and for finding new friends who share your hobby.",
    techStack: "TechStack: React, Redux, Nodejs, Express, CSS, and Vercel.",
    viewProj: "https://www.youtube.com/watch?v=0h2b4ftbZcU",
    viewRepo: "https://github.com/kespinak/Bug-Tracker"
  }
]

export default ProjectCardData;