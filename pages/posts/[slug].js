import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/clg9b9s6x25mw01t3fdf1bepc/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function BlogPost({ post }) {
  return (
    <div className="flex flex-col justify-center items-center md:mt-5">
      <img
        className="md:w-[700px] md:rounded-xl"
        src={post.coverPhoto.url}
        alt=""
      />
      <h2 className="ml-4 text-2xl font-bold first-line:capitalize">
        {post.title}
      </h2>
      <div
        className="ml-5 mr-2 mt-10 first-line:uppercase first-line:tracking-widest
        first-letter:text-7xl first-letter:font-bold first-letter:text-black
        first-letter:mr-3 first-letter:float-left"
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      ></div>
      <div className="flex ml-5 mt-10 mb-10 space-x-2">
        <img
          className="w-[30px] h-[30px]"
          src={post.author.avatar.url}
          alt=""
        />
        <div className="flex items-center">
          <h6>By {post.author.name}</h6>
          <h6>By {post.datePublished}</h6>
        </div>
      </div>
    </div>
  );
}
