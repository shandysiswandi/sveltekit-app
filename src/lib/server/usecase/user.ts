import type { User } from "$lib/model/user";
import { userDataSource, type UserDataSource } from "../data/user";

export interface UserService {
  login(identity: string, password: string): Promise<User>;
}

export class UserServiceImpl implements UserService {
  private readonly data: UserDataSource;

  constructor(data: UserDataSource) {
    this.data = data;
  }

  async login(identity: string, password: string): Promise<User> {
    const user = await this.data.getByIdentity(identity);

    // validate password

    return user;
  }
}

// Export a pre-built instance for convenience
export const userService = new UserServiceImpl(userDataSource);