import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const LogIn = () => {
  const [showPass, setShowPass] = React.useState(false);
  return (
    <Box
      sx={{
        backgroundColor: "#fbfbff",
        height: "93vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          p: "20px",
          borderRadius: "4px",
          backgroundColor: "white",
          boxShadow: 4,
        }}
      >
        <Box paddingBottom={2}>
          <Typography variant="h6" gutterBottom>
            Login
          </Typography>
          <Typography variant="caption" gutterBottom>
            Login to your account
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "220px",
            width: "300px",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <TextField
            id="outlined-basic"
            required
            label="Email"
            variant="outlined"
            type="email"
          />
          <TextField
            id="outlined-basic"
            required
            label="Password"
            variant="outlined"
            type={showPass ? "text" : "password"}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPass((pre) => !pre)}>
                      {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          <Button variant="contained">Login</Button>
          <Typography variant="caption">
            Don't have an account? <Link href="#">Register</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
