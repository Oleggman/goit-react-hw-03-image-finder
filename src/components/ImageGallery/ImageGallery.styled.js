import styled from "styled-components";

export const Gallery = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 30px;
  list-style: none;
`;

export const GalleryItem = styled.li`
  width: 350px;
  height: 250px;
  background-color: #c8dcff;
  border-radius: 3px;
  cursor: pointer;
  transition: transform 250ms;
  box-shadow: -5px 8px 13px -5px rgba(0, 0, 0, 0.57);
  -webkit-box-shadow: -5px 8px 13px -5px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: -5px 8px 13px -5px rgba(0, 0, 0, 0.57);
`;