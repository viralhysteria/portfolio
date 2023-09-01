import QuickMenu from "@/components/Float";

const Layout = ({ children }) => {
  return (
    <>
      <div className="pattern position-absolute vw-100 vh-100"></div>
      <div className="d-flex" id="Header">
        <QuickMenu />
      </div>
      {children}
    </>
  );
};

export default Layout;
