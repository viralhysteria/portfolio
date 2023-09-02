import DiscordMarquee from "@/components/Discord";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <DiscordMarquee />
    </>
  );
};

export default Layout;
