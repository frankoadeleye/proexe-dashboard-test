import { Button } from "components/button";
import { RemoveUser } from "redux/users";
import { useDispatch } from "react-redux";
import { AlertActions } from "redux/alert";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Link } from "react-router-dom";

interface uProps {
  data: {
    id: string | number;
    name: string;
    username: string;
    email: string;
    address: {
      city: string;
    };
  };
}

function UserTableRow({ data }: uProps) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id: any) => {
    dispatch(RemoveUser(id));
    handleClose();
    dispatch(AlertActions.success(`${name} Removed Successfully`));
  };

  const { id, name, username, email, address } = data;
  return (
    <>
      <tr>
        <td aria-label="Id">{id}</td>
        <td aria-label="Name">{name}</td>
        <td aria-label="UserName">{username}</td>
        <td aria-label="Email">{email}</td>
        <td aria-label="City">{address.city}</td>
        <td aria-label="Edit">
          <Link to={`/user/${id}`}>
            <Button medium className="button" text="Edit" bgColor="#e5aa70" />
          </Link>
        </td>
        <td aria-label="Delete">
          <Button
            onClick={handleClickOpen}
            className="button"
            medium
            text="Delete"
            bgColor="#8b0000"
          />
        </td>
      </tr>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">
          {"Confirm Your Action!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are You Sure You Want To Remove {name}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            medium
            className="button"
            onClick={handleClose}
            text="Cancel"
            bgColor="#8a7f80"
          />
          <Button
            onClick={() => handleDelete(id)}
            className="button"
            medium
            text="Delete"
            bgColor="#8b0000"
          />
        </DialogActions>
        <br />
      </Dialog>
    </>
  );
}

export default UserTableRow;
