import styled from "styled-components";
import { Layout, List as AntdList, Button } from "antd";

const { Content } = Layout;

export const AppContainer = styled(Content)`
  margin-top: 100px;
`;

export const List = styled(AntdList)`
  margin-top: 20px;
`;

export const ResetButton = styled(Button)`
  margin-top: 20px;
`;
