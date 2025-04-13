export type User = {
    id: number;
    name: string;
  };

  const users: User[] = [
    { id: 1, name: 'Ana' },
    { id: 2, name: 'Luis' },
  ];

  export const getAllUsers = (): User[] => users;

  export const createUser = (name: string): User => {
    const newUser = { id: Date.now(), name };
    users.push(newUser);
    return newUser;
  };