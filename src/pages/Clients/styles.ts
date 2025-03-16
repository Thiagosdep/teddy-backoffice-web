import styled from "styled-components";
import { Layout, Button, Select, Input, Tooltip, Switch } from "antd";

export const ClientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const ClientsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0 16px 0;
`;

export const ClientCount = styled.div`
  font-family: Inter, sans-serif;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0;
  color: #000000;
  font-weight: 400;

  span {
    font-weight: 700;
  }
`;

export const Content = styled(Layout.Content)`
  padding: 24px;
  max-width: calc(100% - 240px); // 120px de cada lado
  margin: 0 auto;
  width: 100%;
`;

export const ClientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(285px, max-content));
  gap: 24px;
  margin-bottom: 16px;
  justify-content: center;
`;

export const ClientsFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .ant-pagination {
    .ant-pagination-item {
      &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
        a {
          color: ${({ theme }) => theme.colors.primary};
        }
      }

      &-active {
        border-color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.secondaryLight};

        a {
          color: ${({ theme }) => theme.colors.primary};
        }

        &:hover {
          border-color: ${({ theme }) => theme.colors.primary};
        }
      }
    }

    .ant-pagination-prev,
    .ant-pagination-next {
      &:hover .ant-pagination-item-link {
        border-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export const CreateClientButton = styled(Button)`
  width: 320px !important;
  height: 48px !important;
  border-color: ${({ theme }) => theme.colors.primary} !important;
  color: ${({ theme }) => theme.colors.primary} !important;
  font-weight: 700 !important;
  font-size: 14px !important;
  line-height: 100% !important;
`;

export const StyledSelect = styled(Select)`
  .ant-select-selector {
    &:hover {
      border-color: ${({ theme }) => theme.colors.primary} !important;
    }
  }

  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(
      .ant-select-customize-input
    )
    .ant-select-selector {
    border-color: ${({ theme }) => theme.colors.primary} !important;
    box-shadow: 0 0 0 2px rgba(236, 103, 36, 0.1) !important;
  }

  .ant-select-arrow {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SearchInput = styled(Input.Search)`
  width: 320px;
  margin: 0 24px;

  .ant-input-wrapper {
    input {
      &:hover,
      &:focus {
        border-color: ${({ theme }) => theme.colors.primary} !important;
      }
    }

    .ant-input-search-button {
      &:hover,
      &:focus {
        border-color: ${({ theme }) => theme.colors.primary} !important;
        color: ${({ theme }) => theme.colors.primary} !important;
      }

      .anticon-search {
        color: inherit;
      }
    }
  }

  .ant-input:focus {
    border-color: ${({ theme }) => theme.colors.primary} !important;
    box-shadow: 0 0 0 2px rgba(236, 103, 36, 0.1) !important;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledTooltip = styled(Tooltip)`
  &.ant-tooltip {
    .ant-tooltip-inner {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  .ant-tooltip-arrow {
    &::before {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  &.ant-tooltip .ant-tooltip-arrow .ant-tooltip-arrow-content {
    --antd-arrow-background-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledSwitch = styled(Switch)`
  &.ant-switch {
    background-color: rgba(0, 0, 0, 0.25);

    &:hover:not(.ant-switch-disabled) {
      background-color: rgba(0, 0, 0, 0.35);
    }
  }

  &.ant-switch-checked {
    background-color: ${({ theme }) => theme.colors.primary} !important;

    &:hover:not(.ant-switch-disabled) {
      background-color: ${({ theme }) => theme.colors.primaryLight} !important;
    }
  }
`;
