export interface User {
  name: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  login: (data: User) => void;
  logout: () => void;
}