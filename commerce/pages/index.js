import Header from "../components/Header";
import {getSession} from "next-auth/react";
import Profile from "./profile";

export default function Home({session}) {
  return (
    <div>
      <Header session={session}>
        <Profile session={session} />
      </Header>
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
