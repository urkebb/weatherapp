import React, { useState } from 'react';
import './search.css';
import TextBox from '../textbox/textbox';
import Dropdown from '../dropdown/dropdown';

const Search = () => {
  const [location, setLocation] = useState('');
  const [code, setCode] = useState('');
// jel vidis sta sam napisao
  const sendCodeToParent = (country: any) => {
    setCode(country);
    console.log(code);
  };

  const handleInputSubmit = (location: string) => {
    setLocation(location);
    console.log(location);
  };

  return (
    <div className="container">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4064/4064269.png"
        alt="cloudy"
        width="50px"
        height="50px"
      ></img>
      <Dropdown sendCodeToParent={sendCodeToParent} />
      <TextBox handleInputSubmit={handleInputSubmit} />
    </div>
  );
};

export default Search;
