import {
  About,
  Landing,
  Projects,
  BlogsSection,
} from "@/components/HomePageSections";
import { gql } from "@apollo/client";
import client from "@/lib/apollo-client";
import { GetStaticProps } from "next";

export default function Home({ blogposts }) {
  return (
    <div className="snap- snap-mandatory snap-always h-screen overflow-y-scroll">
      <Landing />
      <About />
      <Projects />
      {!!blogposts?.blogs?.data && <BlogsSection data={blogposts.blogs.data} />}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        blogs(
          sort: ["id:desc"]
          publicationState: LIVE
          pagination: { start: 0, limit: 6 }
        ) {
          data {
            attributes {
              topic
              title
              slug
              description
              lumbytes
              lumbytesLink
              banner {
                data {
                  attributes {
                    url
                    alternativeText
                    caption
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

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