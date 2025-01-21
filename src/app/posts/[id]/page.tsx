import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  return res.json();
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post: Post = await getPost(params.id);

  return (
    <div className="max-w-2xl mx-auto">
      <Link
        href="/posts"
        className="inline-block mb-6 text-blue-600 hover:text-blue-800"
      >
        ← Back to Posts
      </Link>
      <article className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
          {post.body}
        </p>
      </article>
    </div>
  );
}
