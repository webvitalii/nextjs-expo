import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  body: string;
}

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="grid gap-4">
        {posts.map((post: Post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 line-clamp-2">{post.body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
