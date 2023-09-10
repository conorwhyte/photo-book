import React from "react";
import { Breadcrumb, Button, Layout, theme } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { makeStyles, shorthands } from "@griffel/react";
import "../App.css";
import { FolderAddOutlined } from "@ant-design/icons";

const { Footer, Content } = Layout;

interface ShellProps {
  children: React.ReactNode;
}

const useClasses = makeStyles({
  floatingMenu: {
    justifyContent: "space-between",
    backgroundColor: "#53535366",
    backdropFilter: "50px",
  },
  breadcrumbs: {
    ...shorthands.margin("16px", "0"),
  },
  content: {
    ...shorthands.padding("10px"),
    ...shorthands.margin("0px"),
    minHeight: "280px",
  },
});
export const Shell: React.FC<ShellProps> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const styles = useClasses();

  return (
    <Layout style={{ padding: "0 24px ", height: "100vh" }}>
      <Breadcrumb className={styles.breadcrumbs}>
        <Breadcrumb.Item>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Desktop</Breadcrumb.Item>
      </Breadcrumb>

      <Content
        className={styles.content}
        style={{ background: colorBgContainer }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
          justifyContent: "space-between",
          padding: "15px 20px",
        }}
      >
        <Button
          style={{ float: "right" }}
          size="large"
          type="default"
          shape="circle"
          icon={<FolderAddOutlined />}
        />
      </Footer>
    </Layout>
  );
};
