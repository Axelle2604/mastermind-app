import React from 'react';
import { UserBox } from './styled-components/userBoxColorStyled';
import PropTypes from 'prop-types';

const UserBoxColor = ({ color, onClickUserColor }) => {
  const onClickBox = () => onClickUserColor(color);

  return <UserBox color={color} onClick={onClickBox} />;
};

export default UserBoxColor;

UserBoxColor.propTypes = {
  color: PropTypes.string,
  onClickBox: PropTypes.func,
};
