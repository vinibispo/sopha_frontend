import { TextField, InputAdornment, TextFieldProps } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { memo } from "react";

function SearchBarNotMemoized({ value, onChange, ...rest }: TextFieldProps) {
  return (
    <TextField
      {...rest}
      value={value}
      variant="outlined"
      placeholder="Pesquisar"
      onChange={onChange}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Search color="primary" />
          </InputAdornment>
        ),
      }}
    />
  );
}
const SearchBar = memo(SearchBarNotMemoized);
export default SearchBar;
