import styled from "styled-components";

type ContainerProps = {
  showBg: boolean;
}

type IconProps = {
  iconOpacity?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.showBg ? '#1550FF' : '#E5E5E5'};
  border-radius: 15px;
  cursor: pointer;
`;

export const Icon = styled.img<IconProps>`
  opacity: ${props => props.iconOpacity ? '1' : '0.1'};
  max-width: 50px;
`;