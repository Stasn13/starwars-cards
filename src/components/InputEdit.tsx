import { TextField, type TextFieldProps } from "@mui/material";

const InputEdit = ({ ...props }: TextFieldProps) => {
  return (
    <TextField
      {...props}
      sx={{
        mb: 1,
        "& .MuiOutlinedInput-root.Mui-disabled": {
          "& fieldset": {
            border: 0,
          },
        },
        "& .MuiInputBase-input.Mui-disabled": {
          color: "white",
          textFillColor: "white",
          border: 0,
        },
        "& .MuiInputBase-root": {
          color: "white",
          "& fieldset": {
            borderColor: "white",
          },
          "&:hover fieldset": {
            borderColor: "#B2BAC2",
          },
        },
      }}
      variant={"outlined"}
    />
  );
};

export default InputEdit;
