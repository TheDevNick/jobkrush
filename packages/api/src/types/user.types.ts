export interface CreateUserInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UserDocument {
  googleId?: string;
  avatar?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  monthlyBudget?: number;
  plaidAccessTokens?: string[];
  isEmailVerified: boolean;
  location?: string;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
  provider?: "local" | "google";
}
