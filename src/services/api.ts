
// API configuration and service functions
// This will be used to communicate with your Express.js backend

const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:5000/api';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

class ApiService {
  private getAuthHeaders(): HeadersInit {
    const token = localStorage.getItem('authToken');
    return {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    };
  }

  private async handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }
    
    return data;
  }

  // Auth endpoints
  async login(email: string, password: string) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ email, password }),
    });
    
    const result = await this.handleResponse<{ user: any; token: string }>(response);
    
    // Store token in localStorage
    if (result.data?.token) {
      localStorage.setItem('authToken', result.data.token);
    }
    
    return result;
  }

  async register(name: string, email: string, password: string) {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ name, email, password }),
    });
    
    return this.handleResponse(response);
  }

  async logout() {
    localStorage.removeItem('authToken');
  }

  // Blog post endpoints
  async getPosts() {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      headers: this.getAuthHeaders(),
    });
    
    return this.handleResponse(response);
  }

  async getPost(id: string) {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
      headers: this.getAuthHeaders(),
    });
    
    return this.handleResponse(response);
  }

  async createPost(postData: { title: string; content: string; excerpt?: string }) {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(postData),
    });
    
    return this.handleResponse(response);
  }

  async updatePost(id: string, postData: { title: string; content: string; excerpt?: string }) {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(postData),
    });
    
    return this.handleResponse(response);
  }

  async deletePost(id: string) {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
      method: 'DELETE',
      headers: this.getAuthHeaders(),
    });
    
    return this.handleResponse(response);
  }

  // User endpoints
  async getUserPosts() {
    const response = await fetch(`${API_BASE_URL}/users/posts`, {
      headers: this.getAuthHeaders(),
    });
    
    return this.handleResponse(response);
  }

  async getUserProfile() {
    const response = await fetch(`${API_BASE_URL}/users/profile`, {
      headers: this.getAuthHeaders(),
    });
    
    return this.handleResponse(response);
  }
}

export const apiService = new ApiService();
export default apiService;
