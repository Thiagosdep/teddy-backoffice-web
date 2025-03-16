import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { SpinnerContainer } from './styles';

interface SpinnerProps {
  containerStyle?: React.CSSProperties;
}

const Spinner: React.FC<SpinnerProps> = ({ containerStyle }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 40, color: '#EC6724' }} spin />;

  return (
    <SpinnerContainer style={containerStyle}>
      <Spin indicator={antIcon} />
    </SpinnerContainer>
  );
};

export default Spinner; 