import Link from 'next/link';

export default function CategoryLabel({ children }) {
  return (
    <div className={`px-2 py-1 bg-white text-gray-900 font-bold rounded`}>
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
}
