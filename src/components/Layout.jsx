import QuickMenu from "@/components/Float";

const Layout = ({ children }) => {
  return (
    <>
      <div className="pattern position-absolute top-0 start-0 w-100 h-100"></div>
      <div className="d-flex" id="Header">
        <QuickMenu />
      </div>
      {children}
    </>
  );
};

export default Layout;
