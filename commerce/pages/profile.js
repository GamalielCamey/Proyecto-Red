import {getSession} from "next-auth/react";

export default function Profile({session}) {
  return (
    <div>
      <h1>Hello World</h1>
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
