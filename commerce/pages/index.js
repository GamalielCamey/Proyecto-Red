import {getSession} from "next-auth/react";
import Profile from "./profile";

export default function Home({session}) {
  console.log(session);
  return (
    <div>
      <Profile session={session} />
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
