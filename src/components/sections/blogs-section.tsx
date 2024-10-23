import { data } from "@/config/site";
import Link from "next/link";
import SectionLayout from "../layouts/section-layout";

const BlogSection = async () => {
  return (
    <SectionLayout id="blogs" title="Blogs">
      <div className="flex flex-col space-y-8">
        {data.blogs.map((post) => (
          <Link
            key={post.slug}
            href={post.url}
            target="__blank"
            passHref
            nonce=""
            rel="noopener noreferrer"
          >
            <h3 className="text-xl md:text-2xl font-semibold">{post.title}</h3>
            <p className="md:text-medium font-light">{post.description}</p>
            <div className="flex items-center gap-4">
              <p className="text-sm font-medium text-gray-500 mt-2">
                Published at: {post.publishDate}
              </p>
              <p className="text-sm font-bold text-gray-500 mt-2">
                Source: {post.source}
              </p>
            </div>
            <div className="flex gap-2 mt-2 flex-wrap">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-200 dark:bg-gray-500 dark:text-white rounded-full px-3 py-1 text-xs font-light text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </SectionLayout>
  );
};

export default BlogSection;
