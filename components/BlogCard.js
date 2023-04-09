import Link from "next/link";

export default function BlogCard({
  title,
  author,
  coverPhoto,
  datePublished,
  slug,
}) {
  return (
    <div className="w-[300px]">
      <div className="">
        <Link className="" href={"/posts/" + slug}>
          <img
            className="w-[300px] h-[250px] object-cover shadow-xl rounded-md"
            src={coverPhoto.url}
            alt=""
          />
        </Link>
        <div>
          <h2>{title}</h2>
          <div>
            <div className="flex space-x-1 items-center">
              <img
                className="w-[20px] h-[20px] rounded-full"
                src={author.avatar.url}
              />
              <h3>{author.name} </h3>
              <div>
                <h3>{datePublished}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
