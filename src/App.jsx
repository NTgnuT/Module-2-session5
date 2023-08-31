// import "./App.css";
// import {
//   RadiusBottomleftOutlined,
//   RadiusBottomrightOutlined,
//   RadiusUpleftOutlined,
//   RadiusUprightOutlined,
//   DingdingOutlined,
// } from "@ant-design/icons";
// import React, { useMemo } from "react";
// import { Button, Divider, Space, notification } from "antd";
// const Context = React.createContext({
//   name: "Default",
// });

import Lession1 from "./component/Lession1/Lession1";
import Lession2 from "./component/Lession2/Lession2";

// const App = () => {
//   const [api, contextHolder] = notification.useNotification();
//   const openNotification = (placement) => {
//     api.info({
//       message: `Notification ${placement}`,
//       description: (
//         <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>
//       ),
//       placement,
//     });
//   };
//   const contextValue = useMemo(
//     () => ({
//       name: "Ant Design",
//     }),
//     []
//   );
//   return (
//     <Context.Provider value={contextValue}>
//       {contextHolder}
//       <Space>
//         <DingdingOutlined style={{ fontSize: 40 }} />
//         <Button
//           type="primary"
//           onClick={() => openNotification("topLeft")}
//           icon={<RadiusUpleftOutlined />}
//         >
//           topLeft
//         </Button>
//         <Button
//           type="primary"
//           onClick={() => openNotification("topRight")}
//           icon={<RadiusUprightOutlined />}
//         >
//           topRight
//         </Button>
//       </Space>
//       <Divider />
//       <Space>
//         <Button
//           type="primary"
//           onClick={() => openNotification("bottomLeft")}
//           icon={<RadiusBottomleftOutlined />}
//         >
//           bottomLeft
//         </Button>
//         <Button
//           type="primary"
//           onClick={() => openNotification("bottomRight")}
//           icon={<RadiusBottomrightOutlined />}
//         >
//           bottomRight
//         </Button>
//       </Space>
//     </Context.Provider>
//   );
// };
// export default App;

const App = () => {
  return (
    <>
      {/* <Lession1 /> */}
      <Lession2 />
    </>
  );
};
export default App;
