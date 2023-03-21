export const saveAllUsersToLocal = (users: any): void => {
  try {
    const serialisedState: string = JSON.stringify(users);
    localStorage.setItem("lendsqrallusers", serialisedState);
  } catch (e) {
    console.warn(e);
  }
};

export const loadAllUsersFromLocal = (): any[] | null => {
  try {
    const usersInLocal = localStorage.getItem("lendsqrallusers")
      ? JSON.parse(localStorage.getItem("lendsqrallusers") as string)
      : null;
    return usersInLocal;
  } catch (e) {
    return null;
  }
};
