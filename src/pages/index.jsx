import Link from "next/link";
import Nav from "../components/Float";
import Portal from "../components/Portal";

export default function Index() {
  return (
    <>
      <div className="pattern"></div>
      <div className="d-flex" id="Header">
        <Nav />
      </div>
      <Portal />
    </>
  );
}
