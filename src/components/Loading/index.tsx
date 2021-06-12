import { CircularProgress } from '@material-ui/core';
import React from 'react';

import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <CircularProgress color="secondary" size={300} />
    </Container>
  );
};

export default Loading;
