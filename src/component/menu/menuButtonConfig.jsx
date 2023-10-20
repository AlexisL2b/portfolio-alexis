import { ImHome, ImUser, ImFolderOpen } from "react-icons/im"
import { IoBriefcaseSharp } from "react-icons/io5"
import { MdContactSupport } from "react-icons/md"

export const getMenuButtonsConfig = () => [
  { icon: <ImHome />, href: "", name: "", id: 1 },
  { icon: <ImUser />, href: "", name: "aboutme", id: 2 },
  { icon: <IoBriefcaseSharp />, href: "", name: "resume", id: 3 },
  { icon: <ImFolderOpen />, href: "", name: "project", id: 4 },
  // { icon: <MdContactSupport />, href: "", name: "contact", id: 5 },
]
