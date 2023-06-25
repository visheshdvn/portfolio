import React, { useState, useRef } from "react";
import { AdminHome } from "@/components/layouts";
import prisma from "@/lib/prisma";
import Router from "next/router";
import axios from "@/lib/axios";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

const AdminHomePage = ({ blogposts }) => {
  const sheetTriggerRef = useRef(null);
  const [sheetMode, setSheetMode] = useState<"create" | "edit">("create");
  const [actionId, setActionId] = useState<number | undefined>(undefined);

  const [blogData, setBlogData] = useState({
    title: "",
    external: false,
    externalLink: "",
  });

  console.log(blogData);
  
  function updateBlogData(e) {
    if (e.target) {
      setBlogData({
        ...blogData,
        [e.target.name]: e.target.value,
      });
    } else if (typeof e === "boolean") {
      setBlogData({
        ...blogData,
        external: e,
      });
    }
  }

  const emulateSheetTrigger = () => {
    if (sheetTriggerRef.current) {
      (sheetTriggerRef.current as HTMLButtonElement).click();
    }
  };

  async function openSheetInEditMode(id: number) {
    // console.log("for id", id);
    setActionId(+id);
    setSheetMode("edit");
    emulateSheetTrigger();
    try {
      const {
        data: { channels },
      } = await axios.get(`/channels?_where[id]=${id}`);

      setBlogData({
        title: channels[0].title,
        external: channels[0].color,
        externalLink: channels[0].metaDescription || "",
      });
    } catch (error) {
      // toast.error("Cannot perform this action. Please try again later.", {
      //   theme: theme as Theme,
      // });
      alert("Error");
    }
  }

  function clearSheetData() {
    setBlogData({
      title: "",
      external: false,
      externalLink: "",
    });
  }

  return (
    <>
      <AdminHome
        title="Blogposts"
        showAddNewControls={true}
        // addNewHandler={() => Router.push("/admin/blogposts/new-post")}
        addNewHandler={() => {
          if (sheetMode !== "create") {
            setSheetMode("create");
          }
          clearSheetData();
          emulateSheetTrigger();
        }}
      >
        {/* all blogpost grid */}
        <div
          style={{ boxShadow: "0 0 4px 1px #f0f0f0" }}
          className="mt-10 overflow-hidden rounded-[33px] border border-[#f0f0f0] bg-[#fefefe]"
        >
          <div className="">
            {/* headings */}
            <div className="font-primary grid h-12 grid-cols-7 gap-4 bg-[#f5f5f5] px-8 pb-1 text-[15px] font-black uppercase">
              <h3 className="col-span-3 flex items-center">Title</h3>
              <h3 className="flex items-center">Topic</h3>
              <h3 className="flex items-center">External</h3>
              {/* <h3>Tags</h3> */}
              <h3 className="flex items-center">Published</h3>
            </div>

            <div className="">
              {blogposts.map((data) => (
                <Peek data={data} key={data.title} peek={true} />
              ))}
            </div>
          </div>
        </div>
      </AdminHome>
      <ControlSheet
        // saveHandler={
        //   sheetMode === "create"
        //     ? createChannel
        //     : sheetMode === "edit"
        //     ? saveChannel
        //     : null
        // }
        // sheetOpen={sheetVisibility}
        saveHandler={() => alert("ToDo")}
        data={blogData}
        changeHandler={updateBlogData}
        triggerRef={sheetTriggerRef}
      />
    </>
  );
};

function Peek({ data, peek }) {
  const { title, topic, published, slug, external, externalLink } = data;
  // console.log(external);

  return (
    <article className="font-primary grid h-16 grid-cols-7 gap-4 border-t border-[#f0f0f0] px-8">
      <div className="col-span-3 flex h-full flex-col justify-center">
        <h1 className="font-primary line-clamp-2 pr-5 text-base font-semibold leading-tight">
          {title}
        </h1>
      </div>
      <div className="col-span-1 flex items-center text-sm font-medium">
        {/* {featuredStatus ? (
          <TrueButton name={tick} onClickHandler={featuredToggler} />
        ) : (
          <CrossButton name={cross} onClickHandler={featuredToggler} />
        )} */}
        {topic?.name ? (
          <span className="line-clamp-1">{topic?.name}</span>
        ) : (
          <span>--</span>
        )}
      </div>
      {/*  */}
      <div className="flex items-center">
        {published ? (
          <span className="text-green-600 text-sm font-semibold">True</span>
        ) : (
          <span className="">--</span>
        )}
      </div>
      {/*  */}
      <div className="flex items-center">
        {published ? (
          <span className="text-green-600 text-sm font-semibold">
            Published
          </span>
        ) : (
          <span className="text-red-600 text-sm font-semibold">Draft</span>
        )}
      </div>
      <div className="col-span-1 flex items-center font-semibold text-neutral-400">
        {peek ? (
          <button
            onClick={() => {
              Router.push(`/admin/blogposts/${slug}`);
            }}
            title="open post"
          >
            {/* <HiEye className="h-4 fill-neutral-500" /> */}
          </button>
        ) : (
          "--"
        )}
      </div>
    </article>
  );
}

function ControlSheet({
  saveHandler,
  changeHandler,
  data,
  triggerRef,
}: {
  saveHandler;
  changeHandler;
  data;
  triggerRef?: React.Ref<HTMLButtonElement>;
}): JSX.Element {
  return (
    <Sheet>
      <SheetTrigger ref={triggerRef} className="hidden"></SheetTrigger>
      <SheetContent className="">
        <SheetHeader>
          <SheetTitle>New Blogpost</SheetTitle>
        </SheetHeader>
        <Separator className="my-1" />
        <div className="mt-10 space-y-8">
          <div className="flex space-x-2 items-center">
            <Label htmlFor="external">External</Label>
            <Switch
              id="external"
              onCheckedChange={changeHandler}
              value={data.external}
              name="external"
            ></Switch>
          </div>
          <div className="flex space-x-2 items-center">
            <Label htmlFor="title" className="text-base font-semibold">
              Title
            </Label>
            <Input
              id="title"
              name="title"
              type="text"
              placeholder="Enter title."
              className="mt-1"
              value={data.title}
              onChange={changeHandler}
              required
            />
          </div>

          <div className="flex space-x-2 items-center">
            <Label
              htmlFor="externalLink"
              className="mb-1 text-base font-semibold"
            >
              Link
            </Label>
            <Input
              id="externalLink"
              name="externalLink"
              type="text"
              placeholder="Enter link"
              value={data.externalLink}
              onChange={changeHandler}
              className="mt-1"
              disabled={!data.external}
            />
          </div>
        </div>
        <div className="mt-10">
          <Button
            variant="default"
            className="px-5 font-semibold"
            onClick={saveHandler}
          >
            Save
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default AdminHomePage;

AdminHomePage.customProps = {
  displayNavBar: false,
};

export async function getServerSideProps(context) {
  // const { query } = context;
  // console.log("para", query);

  // @ts-ignore
  BigInt.prototype.toJSON = function () {
    return Number(this);
  };

  let data = await prisma.blogPosts.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      published: true,
      topic: {
        select: {
          name: true,
        },
      },
      external: true,
      externalLink: true,
    },
    orderBy: {
      id: "desc",
    },
  });

  await prisma.$disconnect();
  let json = JSON.stringify(data);
  json = JSON.parse(json);

  return {
    props: { blogposts: json, success: 1 },
  };
}
