import React, { memo } from 'react';
import { Pawn } from './styled-components/boxStyled';
import PropTypes from 'prop-types';

const Box = ({ color }) => <Pawn color={color} />;

export default memo(Box);

Box.propTypes = {
  color: PropTypes.string,
};
