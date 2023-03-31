import Link from 'next/link';
import Image from 'next/image';
import CategoryLabel from './CategoryLabel';

export default function Post({ post }) {
  return (
    <div className="w-full px-10 py-6 bg-slate-900 rounded-lg shadow-md mt-6 shadow-white">
      <Image
        src={post.frontmatter.cover_image}
        alt=""
        height={210}
        width={300}
        className="mb-4 rounded"
      />

      <div className="flex justify-between items-center">
        <span className="font-light text-gray-400">
          {post.frontmatter.date}
        </span>
        <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
      </div>

      <div className="mt-2">
        <Link href={`/blog/${post.slug}`}>
          <span className="text-2xl text-gray-200 font-bold hover:underline">
            {post.frontmatter.title}
          </span>
        </Link>
      </div>
      <p className="mt-2 text-gray-300">{post.frontmatter.excerpt}</p>

      <div className="flex justify-between items-center mt-6">
        <Link href={`/blog/${post.slug}`}>
          <span className="text-gray-100 hover:text-blue-600">Read more</span>
        </Link>
        <div className="flex items-center">
          <img
            src={post.frontmatter.author_image}
            alt=""
            className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
          />
        </div>
      </div>
    </div>
  );
}
