import React from "react";
import { AdminHome } from "@/components/layouts";
import prisma from "@/lib/prisma";

const AdminHomePage = () => {
  return (
    // <div className="">
    //   <div className="w-[500px]"></div>
    // </div>
    <AdminHome
      title="New Post"
      showAddNewControls={true}
      addNewHandler={() => alert("To Implement")}
    >
      <div className="border">abc</div>
    </AdminHome>
  );
};

export default AdminHomePage;

AdminHomePage.customProps = {
  displayNavBar: false,
};
