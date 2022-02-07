import { LayoutBlock } from "./layout.styles";
import { Loader } from "components/loader";
import { useSelector } from "react-redux";

interface aProps {
  children: any;
}

function Layout({ children }: aProps) {
  interface RootState {
    Users: any;
  }

  const isGettingUsers = useSelector(
    (state: RootState) => state.Users.isGettingUsers
  );

  const isFailedToGetUsers = useSelector(
    (state: RootState) => state.Users.isFailedToGetUsers
  );

  if (isGettingUsers) {
    return (
      <LayoutBlock>
        <Loader />
        {children}
      </LayoutBlock>
    );
  }

  if (isFailedToGetUsers) {
    return (
      <LayoutBlock>
        <Loader />
        {children}
      </LayoutBlock>
    );
  }

  return <LayoutBlock>{children}</LayoutBlock>;
}

export default Layout;
