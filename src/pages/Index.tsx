
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusIcon, BookIcon, UserIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <BookIcon className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">MERN Blog</h1>
            </div>
            <nav className="flex space-x-4">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to MERN Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A full-stack blog application built with MongoDB, Express.js, React, and Node.js. 
            Share your thoughts, stories, and ideas with the world.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookIcon className="h-6 w-6 mr-2 text-blue-600" />
                Browse Posts
              </CardTitle>
              <CardDescription>
                Explore a wide variety of blog posts from our community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/posts">
                <Button className="w-full">View All Posts</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <PlusIcon className="h-6 w-6 mr-2 text-green-600" />
                Create Content
              </CardTitle>
              <CardDescription>
                Share your thoughts and stories with the community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/create-post">
                <Button className="w-full" variant="outline">
                  Create Post
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserIcon className="h-6 w-6 mr-2 text-purple-600" />
                User Dashboard
              </CardTitle>
              <CardDescription>
                Manage your profile and track your posts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/dashboard">
                <Button className="w-full" variant="outline">
                  Go to Dashboard
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Recent Posts Preview */}
        <section className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Recent Posts</h3>
            <Link to="/posts">
              <Button variant="link">View All →</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for recent posts - will be populated from API */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Getting Started with MERN</CardTitle>
                <CardDescription>Learn the basics of MERN stack development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  A comprehensive guide to building full-stack applications...
                </p>
                <Button variant="outline" size="sm">Read More</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">React Best Practices</CardTitle>
                <CardDescription>Tips for writing clean React code</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Discover the latest patterns and practices for React development...
                </p>
                <Button variant="outline" size="sm">Read More</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Node.js Performance</CardTitle>
                <CardDescription>Optimizing your backend performance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Learn how to optimize your Node.js applications for better performance...
                </p>
                <Button variant="outline" size="sm">Read More</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
