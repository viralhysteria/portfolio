import Link from "next/link";
import Layout from "../app/layout";
import Portal from "../components/Portal";

export default function Index() {
  return (
    <>
    <Layout>
      <div className="pattern"></div>
      <Portal />
    </Layout>
    </>
  );
}
