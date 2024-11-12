


// import React from "react";
// import Body from "./Body";
// import Header from "../Header";
// import Sidebar from "../Sidebar";

// import * as classes from "../../../utils/styles";
// const Profile = () => {
//   return (
//     <div className="bg-[#d6d9e0] h-screen flex items-center justify-center overflow-hidden">
//       <div className={classes.rootPage}>
//         <Header />
//         <div className={classes.barAndBody}>
//           <Sidebar />
//           <Body />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;




import React from "react";
import Body from "./Body";
import Header from "../Header";
import Sidebar from "../Sidebar";

import * as classes from "../../../utils/styles";

const Profile = () => {
  return (
    <div className="bg-black text-white h-screen flex items-center justify-center overflow-hidden">
      <div className={`${classes.rootPage} bg-black text-white`}>
        <Header />
        <div className={`${classes.barAndBody} bg-black text-white`}>
          <Sidebar />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default Profile;
