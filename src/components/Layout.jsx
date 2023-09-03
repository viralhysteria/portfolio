import DiscordMarquee from "@/components/Discord";

const Layout = ({ children }) => {
  return (
    <>
      <div className="pattern position-absolute top-0 start-0 w-100 h-100"></div>
      {children}
      <DiscordMarquee />
    </>
  );
};

export default Layout;
