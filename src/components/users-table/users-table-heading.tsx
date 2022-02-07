import { Button } from "components/button";
import { Div } from "components/div";
import { Link } from "react-router-dom";
import { UsersTableHeadingBlock } from "./users-table.styles";

function UsersTableHeading() {
  return (
    <UsersTableHeadingBlock>
      <Div className="text">user list</Div>
      <Link to="/new-user">
        <Button large text="Add New" bgColor="blue" />
      </Link>
    </UsersTableHeadingBlock>
  );
}

export default UsersTableHeading;
