import React from "react";
import { Breadcrumb, Layout, theme, Button } from "antd";
import {
  HomeOutlined,
  FormOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { makeStyles, shorthands } from "@griffel/react";
import "../App.css";

const { Footer, Content } = Layout;

interface ShellProps {
  children: React.ReactNode;
}

const useClasses = makeStyles({
  floatingMenu: {
    // display: "flex",
    // alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#53535366",
    backdropFilter: "50px",
  },
});
export const Shell: React.FC<ShellProps> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const styles = useClasses();

  return (
    <Layout style={{ padding: "0 24px ", height: "100vh" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        style={{
          padding: 10,
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
        }}
      >
        {children}
      </Content>
      <Footer
        style={{
          textAlign: "center",
          justifyContent: "space-between",
        }}
      >
        {/* <div className="menu">
          <Button
            size="large"
            icon={<FormOutlined />}
            href="https://www.google.com"
          />
          <Button
            size="large"
            icon={<PlusCircleOutlined />}
            href="https://www.google.com"
          />
        </div> */}
      </Footer>
    </Layout>
  );
};
