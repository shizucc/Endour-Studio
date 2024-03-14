import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  bottom: 0;
  padding: 10px 0;
  color: white;
  background-color: #5c8374;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>
        <b>Copyright © 2021 - 2024 Endour Studio</b>
      </p>
      <p>All Rights Reserved</p>
    </StyledFooter>
  );
}
