import { Typography } from "@mui/material";

const Description = ({ children }: { children: string }) => {
  return (
    <Typography variant="body1" fontWeight={"bold"}>
      {children}
    </Typography>
  );
};

const Title = ({ children }: { children: string }) => {
  return <Typography variant="body2">{children}</Typography>;
};

export { Title, Description };
