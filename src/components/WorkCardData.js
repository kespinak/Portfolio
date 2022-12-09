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
    description: "Taskify is a task management application that allows users to create, edit, and delete tasks.",
    techStack: "TechStack: React, Redux, Nodejs, Express, MongoDB, and Firebase.",
    viewProj: "https://www.youtube.com/watch?v=0h2b4ftbZcU",
    viewRepo: "https://github.com/kespinak/Bug-Tracker"
  },
  {
    id: 1,
    title: "The Ultimate Portfolio",
    alt: "portfolioImage",
    imgsrc: Project2portfolio,
    description: "My personal portfolio KevinEspina.tech which features some of my github projects as well as my resume and technical skills.",
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
    description: "News Eater is a live news feed application that allows users to stay up-to-date with the latest news from around the world. The app features a customizable feed, allowing users to select the sources and topics they are most interested in, as well as the ability to save articles for offline reading. The user interface is clean and intuitive, making it easy for users to quickly browse and read the latest news stories. With News Eater, users can stay informed on the go and never miss a breaking news story.",
    techStack: "TechStack: React, Redux, Nodejs, Express, CSS, and Vercel.",
    viewProj: "https://www.youtube.com/watch?v=0h2b4ftbZcU",
    viewRepo: "https://github.com/kespinak/Bug-Tracker"
  },
  {
    id: 5,
    title: "Hobby Friendly",
    imgsrc: Project6hobbyFriendly,
    alt: "hobbyFriendlyImage",
    description: "Hobby Friendly is an application that connects people with similar interests and hobbies. Whether you enjoy hiking, painting, or knitting, Hobby makes it easy to find and connect with others who share your passion. The app features a user-friendly interface that allows you to search for hobbies and activities in your area, and to connect with other users who share your interests. With Hobby, you can easily find and connect with like-minded people, and expand your social circle with people who share your interests and passions. Whether you're looking to try a new hobby, or just want to meet others who enjoy the same activities as you, Hobby is the perfect app for finding new friends who share your hobby.",
    techStack: "TechStack: React, Redux, Nodejs, Express, CSS, and Vercel.",
    viewProj: "https://www.youtube.com/watch?v=0h2b4ftbZcU",
    viewRepo: "https://github.com/kespinak/Bug-Tracker"
  }
]

export default ProjectCardData;