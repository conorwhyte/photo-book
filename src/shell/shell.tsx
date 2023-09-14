import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Layout, Row, Space, theme } from "antd";
import { HomeOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { makeStyles, shorthands } from "@griffel/react";
import { FolderAddOutlined } from "@ant-design/icons";
import { useAppDispatch } from "../store/hooks";
import { Outlet, useParams, useLocation, useNavigate } from "react-router-dom";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { createFolder } from "../desktop/services/createFolder";

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
  },
});

const defaultItems: BreadcrumbItemType[] = [
  {
    href: "/albums",
    title: <HomeOutlined />,
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
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/albums");
    }
  }, [pathname, navigate]);

  useEffect(() => {
    setItems((currentItems) => [
      ...currentItems,
      { title: name, href: `/albums/${name}` },
    ]);
  }, [name]);

  return (
    <Layout style={{ padding: "0 24px" }}>
      <Header style={headerStyle}>
        <Row>
          <Col span={12}>
            <Breadcrumb className={styles.breadcrumbs} items={items} />
          </Col>
          <Col span={12}>
            <Space wrap style={{ float: "right" }}>
              {!name && (
                <Button
                  size="large"
                  shape="circle"
                  icon={<FolderAddOutlined />}
                  onClick={() => dispatch(createFolder())}
                />
              )}
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
