
import { useState, useEffect } from 'react';
import { apiService } from '@/services/api';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  excerpt?: string;
  author: {
    name: string;
    email: string;
  };
  createdAt: string;
  updatedAt: string;
}

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await apiService.getPosts();
      if (response.success && response.data) {
        setPosts(response.data as BlogPost[]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const refetch = () => {
    fetchPosts();
  };

  return {
    posts,
    loading,
    error,
    refetch,
  };
};

export const useUserPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUserPosts = async () => {
    try {
      setLoading(true);
      const response = await apiService.getUserPosts();
      if (response.success && response.data) {
        setPosts(response.data as BlogPost[]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch user posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserPosts();
  }, []);

  const refetch = () => {
    fetchUserPosts();
  };

  return {
    posts,
    loading,
    error,
    refetch,
  };
};
