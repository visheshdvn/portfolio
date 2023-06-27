import React, { useState, useRef, useEffect } from "react";
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
import { Combobox } from "@/components/ui/combobox";
import { HiExternalLink as ExternalLinkIcon } from "react-icons/hi";
import Link from "next/link";
import { fetchTopics } from "@/services/topics";
import { TopicOptions } from "@/types/globals";
import { title } from "process";
import { isValidURL } from "@/utils/utilityFunctions";

const AdminHomePage = ({ blogposts }) => {
  const sheetTriggerRef = useRef(null);
  const [sheetMode, setSheetMode] = useState<"create" | "edit">("create");
  const [actionId, setActionId] = useState<number | undefined>(undefined);
  const [topics, setTopics] = useState<
    Array<{ name: string; slug: string; id: number }>
  >([]);

  const [blogData, setBlogData] = useState<{
    title: string;
    external: boolean;
    externalLink: string;
    topicId: number | null;
  }>({
    title: "",
    external: true,
    externalLink: "",
    topicId: null,
  });

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

  const emulateSheetTrigger = async () => {
    if (sheetTriggerRef.current) {
      (sheetTriggerRef.current as HTMLButtonElement).click();
    }

    if (topics.length == 0) {
      const res = await fetchTopics();
      setTopics([...topics, ...res.data]);
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
        topicId: -1,
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
      external: true,
      externalLink: "",
      topicId: null,
    });
  }

  async function saveBlogHandler() {
    // console.log("saving");
    // console.log(sheetMode);
    // console.log(blogData);
    if (blogData.external) {
      if (!blogData.externalLink || !isValidURL(blogData.externalLink)) {
        return alert("Provide a valid link to the content.");
      }
    } else {
      if (!blogData.title.trim()) {
        return alert("Invalid title");
      }
    }
    if (!blogData.topicId) {
      return alert("Select a topic");
    }

    try {
      const res = await axios.post("/blogpost/create", blogData);
      if (res.data.success === 1) {
        alert("Created");
      }
    } catch (e) {
      console.error(e);
      alert("Error creating post");
    }
  }
  // console.log(JSON.stringify(blogData));

  return (
    <>
      <AdminHome
        title="Blogposts"
        showAddNewControls={true}
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
              {blogposts.map((data, idx) => (
                <Peek data={data} key={data.title + idx} />
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
        saveHandler={saveBlogHandler}
        data={blogData}
        changeHandler={updateBlogData}
        triggerRef={sheetTriggerRef}
        topics={topics.map((t) => {
          return {
            value: t.id,
            label: t.name,
          };
        })}
        updateTopic={(val) => {
          setBlogData({
            ...blogData,
            topicId: +val,
          });
        }}
      />
    </>
  );
};

function Peek({ data }) {
  const { title, topic, published, slug, external, externalLink } = data;

  return (
    <article className="font-primary grid h-16 grid-cols-7 gap-4 border-t border-[#f0f0f0] px-8">
      <div className="col-span-3 flex h-full flex-col justify-center">
        <h1 className="font-primary line-clamp-2 pr-5 text-base font-semibold leading-tight">
          {title}
        </h1>
      </div>
      <div className="col-span-1 flex items-center text-sm font-medium">
        {topic?.name ? (
          <span className="line-clamp-1">{topic?.name}</span>
        ) : (
          <span>--</span>
        )}
      </div>
      {/*  */}
      <div className="flex items-center">
        {external ? (
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
        {external && externalLink && (
          <Link href={externalLink || ""} target="_blank">
            <ExternalLinkIcon className="h-5 w-5 fill-neutral-500 hover:fill-neutral-600 transform transition-all duration-200" />
          </Link>
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
  topics,
  updateTopic,
}: {
  saveHandler;
  changeHandler;
  data;
  triggerRef?: React.Ref<HTMLButtonElement>;
  topics: TopicOptions[];
  updateTopic: (e: any) => void;
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
              defaultChecked={data.external}
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
              disabled={data.external}
            />
          </div>

          <div className="flex space-x-2 items-center">
            <Label htmlFor="externalLink" className="text-base font-semibold">
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
          <div className="flex space-x-2 items-center">
            <Label className="text-base font-semibold">Topic</Label>
            <Combobox
              options={topics}
              getValue={(val) => {
                updateTopic(val);
              }}
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
