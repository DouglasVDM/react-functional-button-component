import React, {useState} from 'react'

const Button = ({ Colors }) => {
	  const [color, setColor] = useState(Colors);
  const handleChange = (e) => {
    e.preventDefault();
    setColor(Colors[Math.floor(Math.random() * Colors.length)]);
  };
  const style = {
    backgroundColor: color
  };
  return (
    <button onClick={handleChange} style={style}>
      Click Me!
    </button>
  );
}

export default Button;
