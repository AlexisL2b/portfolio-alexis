import { ImHome, ImUser, ImFolderOpen } from "react-icons/im"
import { IoBriefcaseSharp } from "react-icons/io5"
import { MdContactSupport } from "react-icons/md"
import { BiSolidBrain } from "react-icons/bi"
import Menu from "./menu-sidebar-right/MenuRight"
import Home from "../sections/home/Home"
import AboutMe from "../sections/about-me/AboutMe"
import Resume from "../sections/resume/Resume"
import Skills from "../sections/about-me/description/presentation/skills/Skills"

export const getMenuButtonsConfig = () => [
  { icon: <ImHome />, href: "", name: "", id: 1, component: <Home /> },
  {
    icon: <ImUser />,
    href: "",
    name: "aboutme",
    id: 2,
    component: "<AboutMe />",
  },
  {
    icon: <IoBriefcaseSharp />,
    href: "",
    name: "resume",
    id: 3,
    component: "<Resume />",
  },
  {
    icon: <BiSolidBrain />,
    href: "",
    name: "skills",
    id: 5,
    component: "<Skills />",
  },
  {
    icon: <ImFolderOpen />,
    href: "",
    name: "project",
    id: 4,
    component: "<Project />",
  },
  // { icon: <MdContactSupport />, href: "", name: "contact", id: 5 },
]
