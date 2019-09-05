import * as React from "react";
import Container from "@material-ui/core/Container";
import TopLayout from "./TopLayout";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({ children, title = "Shiopon Blog" }) => (
  <TopLayout title={title}>
    <Container>{children}</Container>
  </TopLayout>
);

export default Layout;
