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

// {
//   "data": {
//     "blogs": {
//       "data": [
//         {
//           "attributes": {
//             "topic": "WEB",
//             "title": "Second Post",
//             "slug": "second-post",
//             "description": "Post is on lumbytes.",
//             "lumbytes": true,
//             "lumbytesLink": "https://lumbytes.com/code/top-10-best-backend-development-frameworks-to-build-modern-web-applications",
//             "banner": {
//               "data": {
//                 "attributes": {
//                   "url": "https://visheshdvn-media.s3.eu-west-1.amazonaws.com/yrobot_c9818dfd72.jpg",
//                   "alternativeText": "a cute robot",
//                   "caption": null
//                 }
//               }
//             }
//           }
//         },
//         {
//           "attributes": {
//             "topic": "MACHINE_LEARNING",
//             "title": "Top 10 best backend development frameworks to build modern web applications.",
//             "slug": "first-post",
//             "description": "The first test post written",
//             "lumbytes": false,
//             "lumbytesLink": null,
//             "banner": {
//               "data": {
//                 "attributes": {
//                   "url": "https://visheshdvn-media.s3.eu-west-1.amazonaws.com/yrobot_c9818dfd72.jpg",
//                   "alternativeText": "a cute robot",
//                   "caption": null
//                 }
//               }
//             }
//           }
//         }
//       ]
//     }
//   }
// }
