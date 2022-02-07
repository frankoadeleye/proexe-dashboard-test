/* eslint-disable jsx-a11y/scope */
import { UsersTableListBlock, NoUsersBlock } from "./users-table.styles";
import UsersTableHeading from "./users-table-heading";
import UserTableRow from "./user-table-row";
import { useSelector } from "react-redux";
import { store } from "redux/store";
import { ContentLayout } from "components/layout/layout.styles";
import { SnackBar } from "components/snackbar";
import { useDispatch } from "react-redux";
import { AlertActions } from "redux/alert";
import { Hr } from "components/hr";
import { Button } from "components/button";
import { Link, Outlet } from "react-router-dom";

function UsersTable() {
  const dispatch = useDispatch();

  interface RootState {
    Alert: any;
    Users: any;
  }

  const type = useSelector((state: RootState) => state.Alert.type);
  const message = useSelector((state: RootState) => state.Alert.message);
  const open = useSelector((state: RootState) => state.Alert.open);

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(AlertActions.clear());
  };

  const isGotUsers = useSelector((state: RootState) => state.Users.isGotUsers);

  const UsersTableBody = () => {
    if (isGotUsers) {
      let UsersData = store.getState().Users.response;
      if (UsersData.length === 0) {
        return (
          <>
            <UsersTableHeading />
            <Hr />
            <NoUsersBlock>
              <div>No Users In This Dashboard</div>
              <br />
              <Link to="/new-user">
                <Button pealAnimation large text="Add New" bgColor="blue" />
              </Link>
              <br />
            </NoUsersBlock>
          </>
        );
      }
      return (
        <>
          <UsersTableHeading />
          <Hr />
          <UsersTableListBlock>
            <thead>
              <tr>
                {TheadData.map((data, index) => {
                  return (
                    <th scope="col" key={index}>
                      {data.value}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {UsersData.map((user: any) => {
                return <UserTableRow key={user.id} data={user} />;
              })}
            </tbody>
            <Outlet />
          </UsersTableListBlock>
        </>
      );
    }
    return <div></div>;
  };

  return (
    <ContentLayout>
      <SnackBar
        open={open}
        handleClose={handleClose}
        type={type}
        message={message}
        duration={2000}
      />
      {UsersTableBody()}
      <Outlet />
    </ContentLayout>
  );
}

const TheadData = [
  {
    value: "ID",
  },
  {
    value: "NAME",
  },
  {
    value: "USERNAME",
  },
  {
    value: "EMAIL",
  },
  {
    value: "CITY",
  },
  {
    value: "EDIT",
  },
  {
    value: "DELETE",
  },
];

export default UsersTable;
