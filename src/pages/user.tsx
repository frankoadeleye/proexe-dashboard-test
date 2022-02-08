import { FormInput } from "components/form-input";
import { ContentLayout } from "components/layout/layout.styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AlertActions } from "redux/alert";
import { SnackBar } from "components/snackbar";
import { Button } from "components/button";
import { Link, useNavigate } from "react-router-dom";
import { Div } from "components/div";
import { Hr } from "components/hr";
import { HeadingText } from "components/heading-text";
import { Layout } from "components/layout";
import { useEffect } from "react";
import {
  NewUserFormHeader,
  NewUserFormButtonsWrap,
  NewUserFormSection,
} from "components/new-user-form";
import { useParams } from "react-router-dom";
import { store } from "redux/store";
import { EditUser } from "redux/users";

function User() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    console.log(store.getState());
  }, []);

  const users = store.getState().Users.response;

  let user = users.find((p: any) => p.id === Number(id));

  const [hasError, setError] = useState({
    email: false,
    name: false,
    address: false,
    username: false,
  });

  const [fields, setFields] = useState({
    email: user.email,
    name: user.name,
    address: user.address.city,
    username: user.username,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFields((prevState: any) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    handleError();
  };

  const errorFieldsTrue = (name: any) => {
    setError((prevState: any) => {
      return {
        ...prevState,
        [name]: true,
      };
    });
  };

  const errorFieldsFalse = (name: any) => {
    setError((prevState: any) => {
      return {
        ...prevState,
        [name]: false,
      };
    });
  };

  const handleError = () => {
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (fields.email === "") {
      errorFieldsTrue("email");
    } else {
      errorFieldsFalse("email");
    }
    if (!emailTest.test(fields.email)) {
      errorFieldsTrue("email");
    } else {
      errorFieldsFalse("email");
    }
    if (fields.address === "") {
      errorFieldsTrue("address");
    } else {
      errorFieldsFalse("address");
    }
    if (fields.username === "") {
      errorFieldsTrue("username");
    } else {
      errorFieldsFalse("username");
    }
    if (fields.name === "") {
      errorFieldsTrue("name");
    } else {
      errorFieldsFalse("name");
    }
    if (fields.name.length <= 2) {
      errorFieldsTrue("name");
    } else {
      errorFieldsFalse("name");
    }
    if (fields.address.length <= 2) {
      errorFieldsTrue("address");
    } else {
      errorFieldsFalse("address");
    }
    if (fields.username.length <= 2) {
      errorFieldsTrue("username");
    } else {
      errorFieldsFalse("username");
    }
  };

  const handleSubmit = (event: any) => {
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    event.preventDefault();
    if (
      fields.email === "" ||
      fields.name === "" ||
      fields.address === "" ||
      fields.username === ""
    ) {
      dispatch(AlertActions.failure("All fields are required"));
      return false;
    } else if (!emailTest.test(fields.email)) {
      dispatch(AlertActions.failure("Email format is incorrect"));
      return false;
    } else if (fields.name.length <= 2) {
      dispatch(AlertActions.failure("Name cannot be less than 3 character"));
      return false;
    } else if (fields.username.length <= 2) {
      dispatch(
        AlertActions.failure("Username cannot be less than 3 character")
      );
      return false;
    } else if (fields.address.length <= 2) {
      dispatch(AlertActions.failure("City cannot be less than 3 character"));
      return false;
    } else if (
      fields.email &&
      fields.name &&
      fields.address &&
      fields.username
    ) {
      let name = fields.name;
      let email = fields.email;
      let address = fields.address;
      let username = fields.username;

      dispatch(EditUser(user.id, name, email, address, username));
      navigate("/", { replace: true });
      dispatch(AlertActions.success("User Edited Successfully"));
    }
  };

  const clearData = () => {
    setFields({
      email: "",
      name: "",
      address: "",
      username: "",
    });
  };

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

  return (
    <Layout>
      <HeadingText text="Dashboard" />
      <ContentLayout>
        <SnackBar
          open={open}
          handleClose={handleClose}
          type={type}
          message={message}
          duration={2000}
        />
        <NewUserFormHeader text="Edit User" />
        <Hr />
        <NewUserFormSection onSubmit={handleSubmit}>
          <FormInput
            label="Name"
            name="name"
            value={fields.name}
            type="text"
            onChange={handleChange}
            onKeyUp={handleError}
            placeholder="Enter Your Name"
            errorBorder={hasError.name}>
            {" "}
          </FormInput>
          <FormInput
            label="User Name"
            name="username"
            value={fields.username}
            type="text"
            onChange={handleChange}
            onKeyUp={handleError}
            placeholder="Enter Your Username"
            errorBorder={hasError.username}>
            {" "}
          </FormInput>
          <FormInput
            label="Email"
            name="email"
            value={fields.email}
            type="text"
            onChange={handleChange}
            onKeyUp={handleError}
            placeholder="Enter Your Email"
            errorBorder={hasError.email}>
            {" "}
          </FormInput>
          <FormInput
            label="City"
            name="address"
            value={fields.address}
            type="text"
            onChange={handleChange}
            onKeyUp={handleError}
            placeholder="Enter Your City"
            errorBorder={hasError.address}>
            {" "}
          </FormInput>

          <NewUserFormButtonsWrap>
            <Div className="button-cover">
              <Button medium text="Submit" bgColor="#2e8b57" type="submit" />
              <Link to="/">
                <Button
                  medium
                  text="cancel"
                  bgColor="#8b0000"
                  onClick={clearData}
                />
              </Link>
            </Div>
          </NewUserFormButtonsWrap>
        </NewUserFormSection>
      </ContentLayout>
    </Layout>
  );
}

export default User;
