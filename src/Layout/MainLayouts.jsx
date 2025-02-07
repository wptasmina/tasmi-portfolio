import { Outlet } from "react-router-dom";
import Header from "../components/Header";


export default function MainLayouts() {
  return (
    <div>
      <Header/>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Outlet />
    </div>
  )
}
