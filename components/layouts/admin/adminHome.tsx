import React from "react";
import SideBar from "@/components/elements/sidebar/adminSideBar";
import { cn } from "@/lib/utils";

const AdminHome = ({
  children,
  title,
  showAddNewControls,
  addNewHandler,
}: {
  children?: JSX.Element;
  title?: string;
  count?: number;
  showAddNewControls?: boolean;
  addNewHandler?: () => void;
}) => {
  return (
    <div className="font-primary dark:bg-darkGray flex min-h-screen">
      <SideBar />
      <div className={cn("flex-1 pt-8 pb-48")}>
        <div className="px-5 pr-8 pl-8">
          {/* heading */}
          <div className="flex text-gray-800 dark:text-white">
            {title && (
              <div className="flex-1">
                <h1 className="text-3xl font-black">{title}</h1>
              </div>
            )}
            {showAddNewControls && (
              <button
                onClick={addNewHandler}
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-lg py-2 px-4 font-bold"
              >
                + Add New
              </button>
            )}
          </div>

          <>{children}</>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default AdminHome;
