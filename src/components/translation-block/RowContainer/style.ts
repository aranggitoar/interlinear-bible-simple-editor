import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: .5em;
`;

export const RowContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: .15em 0;
  max-width: 135px;

  &.row-strongs {
    color: #4444dd;
  }

  &.row-original-language {
    font-size: 1.5em;
  }

  &.row-morphology {
    color: #555555;
  }
`;

export const TranslationInputField = styled.textarea`
  border: 1px dashed rgb(188,186,184) !important;
  border-radius: 2.5px !important;
  color: #dd4444 !important;
  height: 2em;
  resize: none;
  width: 10em;

  &:hover {
    border: 1px dashed rgb(142,140,138) !important;
  }
`;
