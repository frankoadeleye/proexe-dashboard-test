import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardHomepage, NewUser, NotFound, User } from "pages";
import { useLayoutEffect } from "react";
import { GetUsersActions } from "redux/users";
import { useDispatch } from "react-redux";

function MyRoutes() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(GetUsersActions.starts());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardHomepage />} />
          <Route path="/new-user" element={<NewUser />} />
          <Route path="/user/:email" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MyRoutes;
