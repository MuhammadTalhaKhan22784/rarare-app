import React from "react";
// assets
// import enFlag from "../../Assets/PNG/Landing Page/flag_en.png"
const LanguageDropdown = () => {
  return (
    <React.Fragment>
      {/* <img src={enFlag} alt="flag"/> */}
      <select className="form-select" aria-label="Default select example">
        <option selected> English</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
    </React.Fragment>
  );
};

export default LanguageDropdown;
