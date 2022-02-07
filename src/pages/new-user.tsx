import { HeadingText } from "components/heading-text";
import { Layout } from "components/layout";
import { NewUserForm } from "components/new-user-form";

function NewUser() {
  return (
    <Layout>
      <HeadingText text="Dashboard" />
      <NewUserForm />
    </Layout>
  );
}

export default NewUser;
