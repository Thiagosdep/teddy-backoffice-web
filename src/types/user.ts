export interface UserCompany {
  id: string;
  name: string;
  company_value: number;
  active: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  own_remuneration: number;
  user_companies: UserCompany[];
}

export interface CreateUserRequest {
  name: string;
  email: string;
  own_remuneration: number;
  company_name: string;
  company_value: number;
}

export interface UpdateUserCompany {
  id?: string;
  name?: string;
  company_value?: number;
  active?: boolean;
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
  own_remuneration?: number;
  user_company?: UpdateUserCompany[];
}
