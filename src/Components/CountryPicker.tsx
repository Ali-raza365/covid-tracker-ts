import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { getALLCountries } from "../services/api";
import { NativeSelect, Typography } from "@material-ui/core";
import { AllCountries } from "../Types/types";

interface AppProps {
  handleChange: (event: any, val: string) => Promise<void>
  country: string
}

const CountryPicker: React.FC<AppProps> = ({ handleChange, country }) => {
  useEffect(() => {
    const getCountries = async (): Promise<void> => {
      let res = await getALLCountries();
      setallcountry(res);
    };
    getCountries();
  }, []);

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3),
      minWidth: 300,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();
  const [allcountry, setallcountry] = useState<AllCountries[] | []>([]);
  return (
    <>
      <div className="select">
        <FormControl className={classes.formControl}>
          <NativeSelect
            onChange={(event: any) => {
              let val: string = (event.target as HTMLSelectElement).value
              handleChange(event, val)
            }}
            id="select"
            defaultValue={country}
            value={country}
          >
            <option value={"all"}> All States</option>
            {allcountry?.length !== 0 &&
              allcountry.map((country: AllCountries, ind: number) => (
                <option key={ind} value={country.name}>
                  {country.name}
                </option>
              ))}
          </NativeSelect>
        </FormControl>
      </div>
    </>
  );
}

export default CountryPicker;
