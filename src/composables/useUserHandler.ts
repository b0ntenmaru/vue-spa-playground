import { reactive } from 'vue';
import { dummyApiClient } from '@/composables/dummyApiClient';

type User = {
  id: number;
  name: string;
};

type State = {
  users: Array<User>;
  isOpen: boolean;
};

export const useUserHandler = () => {
  const state = reactive<State>({
    users: [],
    isOpen: true,
  });

  const registerUser = (user: User) => {
    dummyApiClient();
    state.users.push(user);
  };

  const unregisterUser = (userId: number) => {
    dummyApiClient();
    const newUsers = state.users.filter((user) => user.id !== userId);
    state.users = newUsers;
  };

  return {
    state,
    registerUser,
    unregisterUser,
  };
};
