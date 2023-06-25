import {
  About,
  Landing,
  Projects,
  BlogsSection,
} from "@/components/HomePageSections";
import { GetStaticProps } from "next";

export default function Home({ blogposts }) {
  return (
    <div className="h-screen overflow-y-scroll">
      <Landing />
      <About />
      <Projects />
      {!!blogposts && <BlogsSection data={blogposts} />}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = [
    {
      title: "First Post",
      topic: "Code",
      banner:
        "https://lumbytes-development.s3.eu-west-1.amazonaws.com/Blockchain-1682684704605.jpg",
      bannerAlt: "ABCDE",
      lumbytes: true,
      lumbytesLink: "abcde",
    },
    {
      title: "Second Post",
      topic: "Code",
      banner:
        "https://lumbytes-development.s3.eu-west-1.amazonaws.com/Blockchain-1682684704605.jpg",
      bannerAlt: "ABCDE",
      lumbytes: true,
      lumbytesLink: "abcde",
    },
    {
      title: "First Post",
      topic: "Code",
      banner:
        "https://lumbytes-development.s3.eu-west-1.amazonaws.com/Blockchain-1682684704605.jpg",
      bannerAlt: "ABCDE",
      lumbytes: true,
      lumbytesLink: "abcde",
    },
    {
      title: "First Post",
      topic: "Code",
      banner:
        "https://lumbytes-development.s3.eu-west-1.amazonaws.com/Blockchain-1682684704605.jpg",
      bannerAlt: "ABCDE",
      lumbytes: true,
      lumbytesLink: "abcde",
    },
    {
      title: "First Post",
      topic: "Code",
      banner:
        "https://lumbytes-development.s3.eu-west-1.amazonaws.com/Blockchain-1682684704605.jpg",
      bannerAlt: "ABCDE",
      lumbytes: true,
      lumbytesLink: "abcde",
    },
    {
      title: "First Post",
      topic: "Code",
      banner:
        "https://lumbytes-development.s3.eu-west-1.amazonaws.com/Blockchain-1682684704605.jpg",
      bannerAlt: "ABCDE",
      lumbytes: true,
      lumbytesLink: "abcde",
    },
  ];

  // console.log("apollo data", JSON.stringify(data, null, 4));

  return {
    props: {
      blogposts: data,
    },
    revalidate: 14400,
  };
};