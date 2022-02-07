import { LoaderBlock, LoaderErrorBlock } from "./loader.styles";
import { useSelector } from "react-redux";
import { Button } from "components/button";

function Loader() {
  interface RootState {
    Users: any;
  }

  const isFailedToGetUsers = useSelector(
    (state: RootState) => state.Users.isFailedToGetUsers
  );

  if (isFailedToGetUsers) {
    return (
      <LoaderBlock>
        <LoaderErrorBlock>
          Something went wrong. Check your network connection, <br /> or contact
          customer care.
          <br />
          <br />
          <Button
            onClick={window.location.reload()}
            text="Reload"
            medium
            bgColor="black"
          />
        </LoaderErrorBlock>
        <br />
      </LoaderBlock>
    );
  }

  return (
    <LoaderBlock>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </LoaderBlock>
  );
}

export default Loader;
