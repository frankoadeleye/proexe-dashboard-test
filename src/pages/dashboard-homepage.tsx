import { HeadingText } from "components/heading-text";
import { UsersTable } from "components/users-table";
import { Layout } from "components/layout";

function DashboardHomepage() {
  return (
    <Layout>
      <HeadingText text="Dashboard" />
      <UsersTable />
    </Layout>
  );
}

export default DashboardHomepage;
