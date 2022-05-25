import styled from 'styled-components';

export const FileHandlerButton = styled.button`
  align-items: center;
  border: 0;
  background: none;
  font-size: 16px;
  font-weight: 400 !important;
  height: 2em;
  text-transform: uppercase;
  transition: all 500ms;
  pointer: cursor;
  width: 4em;
`;

export const InvisibleInput = styled.input`
  display: none;
`;

export const Container = styled.div`
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: .1em .2em;

  &:hover {
    background: #f2f2f2;
  }
`;
