import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Button.scss';

const Button = ({
  text = "Data",
  variant = "",
  type = "button",
  onClick,
  navigateTo = ""
}) => {
  const className = `shine-button button-${variant}`;
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    if (navigateTo) {
      e.preventDefault();
      navigate(navigateTo); // ✅ client-side navigation, no reload
    }
  };

  return (
    <button className={className} type={type} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
