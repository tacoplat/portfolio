export const projects = [
  {
    name: "portfolio",
    displayName: "Developer Portfolio",
    id: 1,
    tags: ["Front-end", "Web"],
    skills: ["React", "NextJS", "Material UI"],
    img: "/assets/portfolio.png",
    completionDate: "2023-08",
    description:
      "A personal developer portfolio to showcase my projects and work history.",
    extendedDescription:
      "Front-end created using React, pages and API endpoints served by NextJS 13.",
    links: [
      { label: "View Project", href: "https://andyzhen.com/" },
      { label: "GitHub", href: "https://github.com/tacoplat/portfolio" },
    ],
  },
  {
    name: "discograph",
    displayName: "DISCOGRAPH",
    id: 2,
    tags: ["Front-end", "Back-end"],
    skills: ["React", "Spotify API"],
    img: "/assets/record.png",
    completionDate: "2023-10",
    description: "Spotify top track visualization w/ CSS animations.",
    extendedDescription:
      "Clicking records finds a song using Spotify's recommendation API. Unfortunately inaccessible to the public due to Spotify API access restrictions.",
    links: [
      {
        label: "View Project",
        href: "https://discograph-frontend-cpdzvalsy-tacoplat.vercel.app/",
      },
      { label: "GitHub", href: "https://github.com/tacoplat/discograph" },
    ],
  },
  {
    name: "tetris",
    displayName: "Tetris Clone",
    id: 3,
    tags: ["Software", "Game Development"],
    skills: ["Java", "JavaFX", "Scenebuilder"],
    img: "/assets/squarium-small.png",
    completionDate: "2021-06",
    description: "Single-player Tetris clone with different game modes.",
    extendedDescription:
      'Originally created as the final project for ICS4U, our development team built a desktop GUI for "Squarium" using JavaFX. The game features three difficulties and two additional game modes: Inverted, and Lock.',
    links: [
      {
        label: "GitHub",
        href: "https://github.com/tacoplat/ics4u-squarium-archived",
      },
    ],
  },
  {
    name: "cage-discord-bot",
    displayName: "CAGE Discord Bot",
    id: 4,
    tags: ["Back-end"],
    skills: ["Node", "Discord.js"],
    img: "/assets/cage-bot.png",
    completionDate: "2022-01",
    description:
      "Discord bot for the UWaterloo Class of 2026 Civil, Architectural, Geological, and Environmental Engineering class server.",
    extendedDescription:
      "Functionality includes silly voice channel soundboard, reaction commands, external link to the undergraduate calendar, role headcounts, and other novelty features. ",
  },
  {
    name: "led-sign",
    displayName: "Acrylic LED Sign",
    id: 5,
    tags: ["Mechanical"],
    skills: ["Solidworks", "3D Printing", "AutoCAD", "Laser Cutting"],
    img: "",
    description:
      "A fun mechanical-esque project involving manufacturing technologies.",
    extendedDescription:
      "The sign was cut from a 3mm-thickness acrylic board, while the base was 3D printed with PLA+ filament.",
  },
  {
    name: "ics3u-coursework",
    displayName: "ICS3U Coursework",
    id: 6,
    tags: ["Front-end", "Web"],
    skills: ["PHP", "HTML", "CSS", "FTP (FileZilla)"],
    img: "/assets/ics3u.png",
    completionDate: "2020-01",
    description:
      "A PHP-based website to practice programming fundamentals and styling.",
    extendedDescription:
      "This is one of my earliest programming projects of all time!",
    links: [
      {
        label: "View Project",
        href: "https://icsprogramming.ca/2019-2020/zhen4d333/",
      },
      { label: "GitHub", href: "https://github.com/tacoplat/ics3uo-archive" },
    ],
  },
];

/*
WIP: 
{
  name: "course-tracker",
  displayName: "Course Tracker",
  id: 4,
  tags: ["Front-end", "Web"],
  skills: ["React", "NextJS", "Material UI"],
  img: "",
  description:
    "Simple react app to keep track of deliverables and course progress.",
}, */
