
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, PlusIcon } from "lucide-react";

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  excerpt?: string;
}

const BlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    // Simulating API call with mock data
    setTimeout(() => {
      setPosts([
        {
          _id: "1",
          title: "Getting Started with MERN Stack",
          content: "Lorem ipsum dolor sit amet...",
          author: "John Doe",
          createdAt: "2024-01-15",
          excerpt: "A comprehensive guide to building full-stack applications with MongoDB, Express.js, React, and Node.js."
        },
        {
          _id: "2",
          title: "React Best Practices for 2024",
          content: "Lorem ipsum dolor sit amet...",
          author: "Jane Smith",
          createdAt: "2024-01-14",
          excerpt: "Discover the latest patterns and practices for React development in modern applications."
        },
        {
          _id: "3",
          title: "Node.js Performance Optimization",
          content: "Lorem ipsum dolor sit amet...",
          author: "Mike Johnson",
          createdAt: "2024-01-13",
          excerpt: "Learn how to optimize your Node.js applications for better performance and scalability."
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">All Blog Posts</h1>
            <Link to="/create-post">
              <Button>
                <PlusIcon className="h-4 w-4 mr-2" />
                Create Post
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Card key={post._id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription>
                  By {post.author} • {new Date(post.createdAt).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {post.excerpt || post.content.substring(0, 150) + "..."}
                </p>
                <Link to={`/posts/${post._id}`}>
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">No posts found</p>
            {searchTerm && (
              <p className="text-gray-400">
                Try adjusting your search terms or{" "}
                <button
                  onClick={() => setSearchTerm("")}
                  className="text-blue-600 hover:underline"
                >
                  clear the search
                </button>
              </p>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default BlogPosts;
