import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { DialogContentText } from "@mui/material";

const ConfirmationDialog = (props) => {
  const { onClose, open, onConfirm, ...other } = props;

  //   React.useEffect(() => {
  //     if (!open) {
  //       setValue(valueProp);
  //     }
  //   }, [valueProp, open]);

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose();
    onConfirm();
  };

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
      {...other}
    >
      {/* <DialogTitle>Phone Ringtone</DialogTitle> */}
      <DialogContent>
        <DialogContentText>Seguro?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

ConfirmationDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  //value: PropTypes.bool.isRequired,
};

export default ConfirmationDialog;
