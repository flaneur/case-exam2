import React from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { ContextAppValues } from "../Utilities/ContextBlock";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
var serverResponseRegistery = null;
const HEADER_INFO_TEXT =
  "Teste başlamak için lütfen aşağıda yer alan alanları eksiksiz bir şekilde doldurunuz.";

const INPUT_FIELDS = [
  {
    Label: "Ad Soyad",
    Required: true,
    Type: "Text",
    View: "Text",
  },
  {
    Label: "E-Mail",
    Required: true,
    Type: "email",
    View: "Text",
  },
  {
    Label: "Telefon",
    Required: true,
    Type: "tel",
    View: "Text",
  },
  {
    Label: "Çalıştığınız Pozisyon",
    Required: true,
    Type: "DropdownList",
    View: "DropdownList",
    Selections: ["a", "b", "c"],
  },
  {
    Label: "Çalıştığınız Sektör",
    Required: false,
    Type: "DropdownList",
    View: "DropdownList",
    Selections: ["a", "b", "c", "d", "e", "f"],
  },
];

const initialInputValues = {
  "Ad Soyad": "",
  "E-Mail": "",
  Telefon: "",
  "Çalıştığınız Pozisyon": "",
  "Çalıştığınız Sektör": "",
};

function RegisterBlock() {
  const context = React.useContext(ContextAppValues);
  const [inputParams, setInputParams] = React.useState(initialInputValues);

  function handleTextFieldChange(label, e) {
    const newParam = {};
    newParam[label] = e.target.value;
    // console.log(e.target.value);
    // console.log(Object.assign({}, inputParams, { label: e.target.value }));
    setInputParams(Object.assign({}, inputParams, newParam));
    console.log(inputParams);
  }

  function startTest(context) {
    /*Check whether input params are valid. */
    for (const [key] of Object.entries(inputParams)) {
      /* Check whether input param is required */
      if (INPUT_FIELDS.find((title) => title.Label === title)?.Required) {
        /* Check whether input param is valid regarding input type */
      }
    }
    axios
      .post(
        `http://bootcamp.com.tr/public/api/examcustomer?customer=&customer_name=${inputParams["Ad Soyad"]} Deneme&customer_email=${inputParams["E-Mail"]}&customer_phone=${inputParams.Telefon}&customer_position=${inputParams["Çalıştığınız Pozisyon"]}&customer_sector=${inputParams["Çalıştığınız Sektör"]} 1&exam=eyJpdiI6ImM1UzJwOHZqUFJORW5ucEdGcHNjbWc9PSIsInZhbHVlIjoiK1ZWN2VYQmtXc0k1enlMZ21Pa0VQUT09IiwibWFjIjoiNDI0NGEwMmMwYWFhNjIyYWNiYmMxYjQ1NmNhYmQ0MjEyMWE1NzgzNWI4NmNjNjM1NGU5YWUwMDA4YzE3OTU0NyIsInRhZyI6IiJ9`
      )
      .then((res) => {
        context.setValueContext({
          Status: "Started",
          response: res,
        });
        if (res.status === 200) {
          alert("Successfull");
        } else {
          alert("Error");
        }
      });
  }

  return (
    <div>
      <h2>Test</h2>
      <h4>{HEADER_INFO_TEXT}</h4>
      {INPUT_FIELDS.map((item) =>
        item.View === "Text" ? (
          <div>
            <InputLabel className='Input_Label'>{item.Label}</InputLabel>
            <FormControl sx={{ m: 1, width: "25ch" }} variant='outlined'>
              <OutlinedInput
                id={item.Label + "inputLabel"}
                type={item.Type}
                required={item.Required}
                position='relative'
                value={inputParams[item.Label]}
                onChange={(e) => {
                  handleTextFieldChange(item.Label, e);
                }}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      // onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {item.Required ? "*" : ""}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        ) : (
          <div>
            <FormControl sx={{ m: 1, width: "25ch" }} variant='outlined'>
              <InputLabel className='Input_Label'>{item.Label}</InputLabel>
              <NativeSelect
                id='demo-customized-select-native'
                // value={age}
                onChange={(e) => {
                  handleTextFieldChange(item.Label, e);
                }} // input={<BootstrapInput />}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      // onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {item.Required ? "*" : ""}
                    </IconButton>
                  </InputAdornment>
                }
              >
                <option value={"Seçiniz"}>{"Seçiniz"}</option>
                {item.Selections.map((option) => (
                  <option key={option + "_option"} value={option}>
                    {option}
                  </option>
                ))}
                {/* <option aria-label='None' value='' />*/}
              </NativeSelect>
            </FormControl>
          </div>
        )
      )}
      <Button
        onClick={
          () => startTest(context) ///// http request will be made here
        }
        variant='contained'
      >
        teste başlayın
      </Button>
      <h4>{JSON.stringify(context)}</h4>
    </div>
  );
}

export default RegisterBlock;
