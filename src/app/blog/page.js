import { posts } from '../../data/posts';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Daftar Blog</h1>
      
      <div className="flex flex-col gap-6">
        {posts.map((post) => {
          const formattedDate = new Date(post.date).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });

          return (
            <article key={post.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2 text-gray-900">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h2>
              
              <div className="text-sm text-gray-600 mb-4">
                <p>Oleh: <span className="font-medium">{post.author}</span></p>
                <p>{formattedDate}</p>
              </div>
              
              <p className="text-gray-700 mb-4 line-clamp-3">
                {post.content}
              </p>
              
              <Link 
                href={`/blog/${post.slug}`} 
                className="text-blue-600 hover:underline font-medium"
              >
                Baca Selengkapnya →
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}