import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "antd/dist/reset.css";
import { router } from "./router";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{ token: { colorPrimary: "#F65F42", colorLink: "#F65F42" } }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
