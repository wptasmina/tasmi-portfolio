import { Outlet } from "react-router-dom";
import Header from "../components/Header";


export default function MainLayouts() {
  return (
    <div>
      <Header/>
      <Outlet />
    </div>
  )
}
