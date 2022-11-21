import {getSession} from "next-auth/react";
import LayoutPage from "../components/LayoutPage";

export default function Main({session}) {
  return (
    <div>
      <LayoutPage session={session} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      session: session,
    },
  };
};
