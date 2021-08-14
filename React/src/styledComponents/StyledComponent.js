import React from "react";
import styled from "styled-components";

function StyledComponent(props) {
  const Title = styled.h1`
    font-size: 2em;
    color: #ffffff;
    text-align: center;
  `;

  const Wrapper = styled.div`
    padding: 4em;
    background: #0088a9;
  `;

  const Button = styled.button`
    background: ${(props) => {
        if (props.primary) {
            return "#0b5ed7"
        }
        else if (props.danger) {
            return "#dc3545"
        }
        else if (props.success) {
            return "#198754"
        }
        else if (props.warning) {
            return "#ffc107"
        }
        else {
            return "#6c757d"
        }
    }};
    color: #ffffff;
    padding: 0.25em 1em;
    font-szie: 1.2em;
    box-shadow: none;
    border-radius: 5px;
    margin: 1em;
    cursor: pointer
  `;

  return (
    <>
      <Wrapper>
        <Title>Applied styling using styled component.</Title>
      </Wrapper>
      <Button>Without Prop</Button>
      <br />
      <Button primary>With Primary Prop</Button>
      <br />
      <Button danger>With Danger Prop</Button>
      <br />
      <Button warning>With Warning Prop</Button>
      <br />
      <Button success>With Success Prop</Button>
    </>
  );
}

export default StyledComponent;
