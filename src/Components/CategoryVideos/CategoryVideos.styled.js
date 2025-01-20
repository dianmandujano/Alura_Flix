import styled from "styled-components";

export const CategoryTitle = styled.h2`
  width: 300px;
  background-color: ${({ theme, category }) =>
    theme.colors.categoryColors[category]};
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
`;

export const VideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
