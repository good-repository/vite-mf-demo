import React from 'react';
import './Button.css';
import counterStore from '../../store/counterStore';


const Button = () => {
  const [clicked, setClicked] = React.useState(false);
  const { inc } = counterStore()

  const handleClick = () => {
    setClicked(true);
    inc();
  }

  return (
    <button className="cool-button" onClick={handleClick}>
      Cool Remote Button {!clicked && 'not'} clicked
    </button>
  );
};

export default Button;