import { ImHome, ImUser, ImFolderOpen } from "react-icons/im"
import { IoBriefcaseSharp } from "react-icons/io5"
import { BiSolidBrain } from "react-icons/bi"
import Home from "../sections/home/Home"

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
]
