import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 18.75rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
  border: 5px solid ${({ theme, category }) =>
    theme.colors.categoryColors[category]};
  height: 100%;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

export const CardActions = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0rem 0.5rem;
  background: rgba(0, 0, 0, 0.7);
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.25rem;

  &:hover {
    color: #2271d1;
  }
`;

export const CardControls = styled.div`
  display: flex;
  align-items: center;
`;

export const ControlText = styled.p`
  margin-left: 0.5rem;
`;
