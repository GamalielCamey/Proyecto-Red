import Header from "../components/Header";
import {getSession} from "next-auth/react";

export default function Home({session}) {
  return (
    <div>
      <Header session={session} />
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
