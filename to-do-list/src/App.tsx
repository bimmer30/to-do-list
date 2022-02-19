import React, { useState } from "react";
import { Col, Input, Row, Button, List as AntdList } from "antd";
import { AppContainer, List, ResetButton } from "./App.styled";

function App() {
  const [toDoList, setToDoList] = useState<string[]>([]);
  const [toDoListInput, setToDoListInput] = useState("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDoListInput(e.currentTarget.value as string);
  };

  const onFormSubmit = () => {
    setToDoList([toDoListInput, ...toDoList]);
    setToDoListInput("");
  };

  const onEnterPress = (event: any) => {
    if (event.key === "Enter") {
      onFormSubmit();
    }
  };

  const onResetListSubmit = () => {
    setToDoList([]);
    setToDoListInput("");
  };

  return (
    <AppContainer>
      <Row justify="center">
        <Col xs={15} md={8}>
          <Input
            type="text"
            value={toDoListInput}
            onChange={onInputChange}
            onKeyPress={onEnterPress}
          />
        </Col>
        <Col xs={7} md={4} offset={1}>
          <Button block type="primary" onClick={onFormSubmit}>
            Add to list
          </Button>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={23} md={13}>
          <ResetButton block type="primary" danger onClick={onResetListSubmit}>
            Reset list
          </ResetButton>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={23} md={13}>
          <List
            bordered
            dataSource={toDoList}
            renderItem={(item: any) => <AntdList.Item>{item}</AntdList.Item>}
          />
        </Col>
      </Row>
    </AppContainer>
  );
}

export default App;
