import { Page } from "@/shared/ui/page";
import styled from "@emotion/styled";
import { Breadcrumb, Layout, Menu, Flex, theme } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

const { Header, Content, Footer } = Layout;

const items = [
  { key: "teachers", label: <Link href="/teachers">Teachers</Link> },
  { key: "subjects", label: <Link href="/subjects">Subjects</Link> },
  { key: "classes", label: <Link href="/classes">Classes</Link> },
  { key: "periods", label: <Link href="/periods">Periods</Link> },
  { key: "csta", label: "CSTA" },
  { key: "cta", label: "CTA" },
  {
    key: "class-timetable",
    label: <Link href="/class-timetable">Class timetable</Link>,
  },
  { key: "teachers-timetable", label: "Teachers timetable" },
  { key: "students-timetable", label: "Students timetable" },
  { key: "report", label: "Report" },
];

const AppLayout = ({ children }) => {
  const router = useRouter();
  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          padding: "2rem",
        }}
      >
        <Title level={4} style={{ margin: 0 }}>
          Timetable maker
        </Title>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[router?.pathname?.split("/")[1]]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content>{children}</Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Timetable maker ©{new Date().getFullYear()} Created by Fiftytwodays
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
