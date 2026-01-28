// import Waves from "@/components/include/Waves";
import QuickMenu from "@/components/QuickMenu";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <div className="d-flex">
      <motion.div
        className="position-fixed top-0 start-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{
          duration: 3,
          ease: "linear",
        }}
      >
        {/* <div className="background" aria-label="static-background-image">
          <Waves />
        </div> */}
        {/* <div className="pattern position-absolute top-0 start-0 w-100 h-100"></div> */}
      </motion.div>
      <QuickMenu />
      {children}
    </div>
  );
};

export default Layout;
