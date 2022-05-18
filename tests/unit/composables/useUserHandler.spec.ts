import { useUserHandler } from '@/composables/useUserHandler';
import { dummyApiClient } from '@/composables/dummyApiClient';

jest.mock('@/composables/dummyApiClient');

describe('useUserHandler', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('registerUser', () => {
    it('指定したuserがstate.usersに追加されていること', () => {
      const { state, registerUser } = useUserHandler();
      const user = { id: 1, name: 'hiroaki' };
      registerUser(user);

      expect(state.users).toEqual([user]);
      expect(state.users.length).toEqual(1);
      expect(dummyApiClient).toHaveBeenCalledTimes(1);
    });
  });

  describe('unregisterUser', () => {
    it('指定したuserがstate.usersから削除されていること', () => {
      const { state, unregisterUser } = useUserHandler();
      state.users.push({ id: 1, name: 'hiroaki' });
      unregisterUser(1);

      expect(state.users).toEqual([]);
      expect(dummyApiClient).toHaveBeenCalledTimes(1);
    });
  });
});
