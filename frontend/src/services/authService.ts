interface LoginResponse {
  token: string;
  user: {
    email: string;
    name: string;
  };
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include'
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Login failed');
  }

  return response.json();
}; 