import React from "react";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";

export default function InputAdornments() {
  const [values, setValues] = React.useState({
    amount: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div>
      <FormControl className="num_form">
        <Input
          className="cus_num_field"
          id="outlined-adornment-amount"
          value={values.amount}
          onChange={handleChange("amount")}
          startAdornment={
            <InputAdornment position="start" className="text_bluegreen">
              <span>XOF</span> <strong> |</strong>
            </InputAdornment>
          }
          labelWidth={60}
        />
      </FormControl>
    </div>
  );
}
