import { Page } from "@/shared/ui/page";
import styled from "@emotion/styled";
import { Breadcrumb, Layout, Menu, Flex, theme } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

const { Header, Content, Footer } = Layout;

const items = [
  { key: "teachers", label: <Link href="/teachers">Teachers</Link> },
  { key: "subjects", label: <Link href="/subjects">Subjects</Link> },
  { key: "class", label: <Link href="/classes">Classes</Link> },
  { key: "periods", label: "Periods" },
  { key: "csta", label: "CSTA" },
  { key: "cta", label: "CTA" },
  { key: "class-timetable", label: "Class timetable" },
  { key: "teachers-timetable", label: "Teachers timetable" },
  { key: "students-timetable", label: "Students timetable" },
  { key: "report", label: "Report" },
];

const AppLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const router = useRouter();
  const pathNames = console.log("router: ", router);
  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        <Title level={4} style={{ margin: 0 }}>
          Timetable maker
        </Title>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      {children}
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Timetable Maker ©{new Date().getFullYear()} Created by Fiftytwodays
      </Footer>
    </Layout>
  );
};

export default AppLayout;

const Title = styled.span`
  color: white;
  font-weight: 600;
  font-size: 18px;
  display: inline-block;
  border-radius: 0.4rem;
  margin-right: 1rem;
`;
