import React from 'react'
import Select from "react-select";


const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      padding: "5px" , 
      border: "none",
      borderRadius: "5px",
      color: "var(--font)",
      fontSize: "15px",
      cursor: "pointer",
      userSelect: "none",
      boxShadow: state.isFocused ? null : null,
      backgroundColor: "var(--input)",
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: "var(--background)",
      width: "100%",
      posistion: "relative"
    }),
    option: (provided, state) => ({
      ...provided,

  
      backgroundColor: state.isSelected ? "var(--dark)" : "transparent",
      ":hover": {
        backgroundColor: "var(--dark)",
      },
  
    }),
    menuList: (provided, state) => ({
      ...provided,
      '::-webkit-scrollbar': {
        width: 'none',
      },
      scrollbarWidth: 'none',
    }),
  };

const DropDown = ({countries , setCurrency=null , placeholder} ) => {


  return (
    <Select
    placeholder={placeholder}
    options={countries}
    styles={customStyles}
    onChange={(option) => (option ? setCurrency(option.value) : null)}
    captureMenuScroll={true}
    isSearchable={true}
    // menuIsOpen={true}
  />
  )
}

export default DropDown