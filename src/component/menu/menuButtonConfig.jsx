import { ImHome, ImUser, ImFolderOpen } from "react-icons/im"
import { IoBriefcaseSharp } from "react-icons/io5"
import { MdContactSupport } from "react-icons/md"

export const getMenuButtonsConfig = () => [
  { icon: <ImHome />, href: "", name: "home" },
  { icon: <ImUser />, href: "", name: "me" },
  { icon: <IoBriefcaseSharp />, href: "", name: "infos" },
  { icon: <ImFolderOpen />, href: "", name: "project" },
  { icon: <MdContactSupport />, href: "", name: "contact" },
]
