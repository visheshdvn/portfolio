import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div>
      <Link href="/admin/panel" passHref={true}>
        <a>Go to admin panel</a>
      </Link>
    </div>
  );
};

export default index;

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/admin/blogposts",
      permanent: false,
    },
  };
}
