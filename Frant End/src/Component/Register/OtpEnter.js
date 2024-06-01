import {
  Button,
  ButtonGroup,
  Fab,
  Modal,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  Add as AddIcon,
 
} from "@mui/icons-material";
import { Box } from "@mui/system";

const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={350}
          height={230}
          bgcolor={"white"}
          color={"text.primary"}
          p={4}
          borderRadius={5}
        >
          <Typography variant="h5" color="black" textAlign="center" marginBottom={3}>
           Enter OTP Here
          </Typography>
          
          <TextField
            sx={{ width: "80%" }}
            id="standard-multiline-static"
            multiline
           
            placeholder="Enter Your Code"
            variant="standard"
          />
        
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button    sx={{ top: 20,}}>Verify OTP</Button>
        
          </ButtonGroup>
        </Box>
      </SytledModal>
    </>
  );
};

export default Add;