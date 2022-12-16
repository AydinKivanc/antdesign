import { Outlet } from "react-router-dom";
import Header from "./Header";

const SharedLayout = () => {
  return (
    <div
      style={{
        minHeight: "20vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "15px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <div style={{ fontSize: 25, marginRight: "10px" }}>ANT Design</div>
        <Header />
      </div>

      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Outlet
          style={{
            maxWidth: "50%",
          }}
        />
      </div>
    </div>
  );
};
export default SharedLayout;

// import { Link, Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";

// const SharedLayout = () => {
//   return (
//     <div>
//       <Navbar />
//         <Outlet />
//       <h3>Footer</h3>
//     </div>
//   );
// };
// export default SharedLayout;
