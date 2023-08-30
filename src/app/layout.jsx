import QuickMenu from "@/components/Float";

const Layout = ({ children }) => {
  return (
    <>
      <div className="pattern"></div>
      <div className="d-flex" id="Header">
        <QuickMenu />
      </div>
      {children}
    </>
  );
};

export default Layout;
