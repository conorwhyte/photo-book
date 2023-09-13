import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Layout, Row, Space, theme } from "antd";
import { HomeOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { makeStyles, shorthands } from "@griffel/react";
import { FolderAddOutlined } from "@ant-design/icons";
import { useAppDispatch } from "../store/hooks";
import { addItem } from "../desktop/desktopSlice";
import { Outlet, useParams } from "react-router-dom";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import { WithAuthenticatorProps } from "@aws-amplify/ui-react";

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 50,
  paddingInline: 0,
  paddingTop: 5,
  lineHeight: "50px",
  backgroundColor: "unset",
};

const useClasses = makeStyles({
  floatingMenu: {
    justifyContent: "space-between",
    backgroundColor: "#53535366",
    backdropFilter: "50px",
  },
  breadcrumbs: {
    ...shorthands.margin("10px", "0"),
  },
  content: {
    ...shorthands.padding("10px"),
    ...shorthands.margin("0px"),
    minHeight: "280px",
  },
});

const defaultItems: BreadcrumbItemType[] = [
  {
    href: "/",
    title: <HomeOutlined />,
  },
  {
    href: "/albums",
    title: "Albums",
  },
];

export const Shell: React.FC<WithAuthenticatorProps> = (props) => {
  const { signOut } = props;
  const [items, setItems] = useState<BreadcrumbItemType[]>(defaultItems);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const styles = useClasses();
  const dispatch = useAppDispatch();
  const { name } = useParams();

  console.log("PRops:: ", props);

  useEffect(() => {
    setItems((currentItems) => [
      ...currentItems,
      { title: name, href: `/albums/${name}` },
    ]);
  }, [name]);

  return (
    <Layout style={{ padding: "0 24px ", height: "100vh" }}>
      <Header style={headerStyle}>
        <Row>
          <Col span={12}>
            <Breadcrumb className={styles.breadcrumbs} items={items} />
          </Col>
          <Col span={12}>
            <Space wrap style={{ float: "right" }}>
              <Button
                size="large"
                shape="circle"
                icon={<FolderAddOutlined />}
                onClick={() => dispatch(addItem())}
              />
              <Button size="large" shape="circle" icon={<UserOutlined />} />
              <Button
                size="large"
                shape="circle"
                icon={<LogoutOutlined />}
                onClick={signOut}
              />
            </Space>
          </Col>
        </Row>
      </Header>

      <Content
        className={styles.content}
        style={{ background: colorBgContainer }}
      >
        <Outlet />
      </Content>

      <Footer style={{ padding: "15px 20px" }} />
    </Layout>
  );
};
