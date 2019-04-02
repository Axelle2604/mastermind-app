import React from 'react';
import { UserBox } from './styled-components/userBoxColorStyled';
import PropTypes from 'prop-types';

const UserBoxColor = ({ color, onClickUserColor }) => {
  const onClickBox = color => onClickUserColor(color);

  return <UserBox color={color} onClick={onClickBox.bind(this, color)} />;
};

export default UserBoxColor;

UserBoxColor.propTypes = {
  color: PropTypes.string,
  onClickBox: PropTypes.func,
};
