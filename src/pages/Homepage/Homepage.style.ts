import styled from "styled-components";
import { StyleConstants } from "styles/StyleConstants";

export const Homepage = styled.section`
  h6 {
    font-size: 18px;
    margin-bottom: 15px;
  }

  form {
    border: 2px solid ${StyleConstants.borderColor};
    margin: 20px;
    width: auto;
    max-width: unset;
    height: auto;
    padding: ${StyleConstants.spacing[20]};
  }
`;

export const ColumnField = styled.div`
  display: flex;
  align-items: center;

  .field-container {
    display: flex;
    align-items: center;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }

    p {
      flex: 1;
      margin-right: 10px;
      width: 150px;
    }
  }

  & > div {
    flex: 1;
    justify-content: space-between;
  }
`;

export const HomepageContent = styled.div`
  padding: ${StyleConstants.spacing[20]};
`;

export const Header = styled.div`
  box-shadow: ${StyleConstants.shadow[0]};
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${StyleConstants.spacing[20]};
`;

export const CurrentUser = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    margin-right: 15px;
  }
`;

export const CurrentUserInfo = styled.div`
  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 1;
    text-transform: capitalize;
  }

  span {
    font-weight: 400;
    font-size: 12px;
  }
`;

export const Table = styled.div`
  height: auto;

  & > div {
    height: auto;
  }
`;

export const TableHeader = styled.div`
  border: 1px solid ${StyleConstants.color.black};
  display: flex;
`;

export const TableHeaderItem = styled.div`
  flex: 1;
  padding: 10px;
  border-right: 1px solid ${StyleConstants.color.black};
  text-align: center;

  &:last-child {
    border-right: 0;
  }
`;

export const TableBody = styled.div`
  border: 1px solid ${StyleConstants.color.black};
`;

export const TableBodyItems = styled.div`
  display: flex;
  align-items: center;

  &::last-child {
    border-right: 0;
    border-bottom: 0;
  }

  & > div {
    flex: 1;
    padding: 10px;
    text-align: center;
  }
`;
