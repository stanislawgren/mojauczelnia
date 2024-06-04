import {Autocomplete, Chip, TextField} from "@mui/material";

interface Props {
  values: string[] | string | null,
  options: string[],
  stateKey: string,
  handleChange: (stateKey: string, newValue: string[] | string | null) => void,
  multiple: boolean
}

export const MultiAutocomplete = (props: Props) => {
  return <Autocomplete
    multiple={props.multiple}
    limitTags={1}
    options={props.options}
    value={props.values}
    onChange={(_event, newValue) => {
      props.handleChange(props.stateKey, newValue)
    }}
    renderInput={(params) => (
      <TextField {...params} />
    )}
    renderOption={(props, option) => {
      return (
        <li {...props} key={option}>
          {option}
        </li>
      )
    }}
    renderTags={(tagValue, getTagProps) => {
      return tagValue.map((option, index) => (
        <Chip
          {...getTagProps({index})}
          key={option}
          label={option}
        />
      ))
    }}
    sx={{width: '100%'}}
  />
}