import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jacob Dominski', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jacob Dominski',
  subtitle: 'Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'I graduated from the University of Advancing Technology (UAT) in December 2021 with a degree in Computer Science focusing on software development.  During my time at UAT, I was able to increase my knowledge as a programmer and explore other areas of Computer Science.',
  paragraphTwo: "During my free time, I enjoy creating projects on my own and seeing what I build come to life. One of my favorite projects that I made was a console game in C++ that mimicked a Dungeons and Dragons style game called Dungeon Crawler. It is gratifying to see what I build come to life.",
  paragraphThree: "When I'm not programming, I enjoy cooking, going to the gym, and learning more about the Linux environment. Before going to university, I volunteered to teach karate as a first degree black belt which I enjoyed. Additionally, my interest in teaching gave me my first job where I teach programming and computer science to children. ",
  resume: 'https://drive.google.com/file/d/15yYO1ZtNvmij59crGBlr_alpnZzGOeHZ/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'PayloadInAir.jpg',
    title: 'The Space Project',
    info: "The Space Project was a group project at UAT where a team and I " +
          "developed a payload to collect data in the atmosphere. My job was " +
          "to construct the flight computer. The flight computer consisted of three " + 
          "layers: the sensors, printable circuit board, and the micro controller. " +
          "I also wrote the software that would let the electronics talk to each other " +
          "and send data to the micro SD card. ",
    repo: 'https://github.com/UAT-Space/M5', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'New Proposal.png',
    title: 'HVAC Proposal App',
    info: "This is a mobile app using React Native to automate the " +
          "proposal process for my client's company. HVAC Proposals " +
          "gives the technician the ability to create a proposal while " +
          "in front of the customer which will ultimately increase sales " +
          "opportunities. The technician will be able to do everything from " +
          "the app including entering information on which type of system is needed, " +
          "what they plan to do, and any additional add ons the customer is " +
          "interested in. ",
    repo: 'https://github.com/JacobDominski/ReactSIPPrototype', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Map.png',
    title: 'Dungeon Crawler',
    info: "Dungeon Crawler is a console game written in C++ that mimics a Dungeons and " +
          "Dragons style game. The objective of the game is to navigate your way through the " +
          "dungeon by fighting enemies, and collecting items to use until you make your way out." +
          "There's a lot of features in the game like a shop to buy and sell items, an inventory " +
          "system to hold all your items, and a command system that will let the player do a " +
          "variety of actions.",
    repo: 'https://github.com/JacobDominski/DungeonCrawlerV2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'TimeZone.png',
    title: 'TimeZone',
    info: "TimeZone is a mobile application that was built with React Native. " +
      "The app was made for a coding competition where I won First Place. The " +
      "app is designed to show you the time of different countries and cities " +
      "accross the globe. ",
    repo: 'https://github.com/JacobDominski/TimeZone',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jacob_dominski@yahoo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/Jackintheb0x',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jacob-dominski-825149200',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/JacobDominski',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
