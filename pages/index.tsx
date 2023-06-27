import {
  About,
  Landing,
  Projects,
  BlogsSection,
} from "@/components/HomePageSections";
import { GetStaticProps } from "next";
import prisma from "@/lib/prisma";

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
  let blogposts = await prisma.blogPosts.findMany({
    select: {
      title: true,
      slug: true,
      id: true,
      banner: true,
      bannerAlt: true,
      description: true,
      content: true,
      external: true,
      externalLink: true,
      date: true,
      minuteRead: true,
      topic: {
        select: {
          name: true,
          slug: true,
        },
      },
    },
    where: {
      published: true,
    },
    skip: 0,
    take: 6,
  });

  blogposts = JSON.parse(JSON.stringify(blogposts));

  return {
    props: {
      blogposts: blogposts,
    },
    revalidate: 14400,
  };
};
