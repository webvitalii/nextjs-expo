import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-6 text-white">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/posts" className="hover:text-gray-300">
              Posts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
