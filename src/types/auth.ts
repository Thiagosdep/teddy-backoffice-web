export interface JwtPayload {
  sub: string;
  username: string;
  iat: number;
  exp: number;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  user: JwtPayload | null;
  login: (token: string) => void;
  logout: () => void;
}

export interface LoginCredentials {
  login: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}
