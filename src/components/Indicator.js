import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { IndicatorContainer } from './styled-components/indicatorStyled';

const Indicator = ({ color }) => {
  return <IndicatorContainer color={color} />;
};

export default memo(Indicator);

Indicator.propTypes = {
  color: PropTypes.number,
};
