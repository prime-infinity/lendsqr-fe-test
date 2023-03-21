//self explanatory functions

export const saveAllUsersToLocal = (users: any): void => {
  try {
    const serialisedState: string = JSON.stringify(users);
    localStorage.setItem("lendsqrallusers", serialisedState);
  } catch (e) {
    console.warn(e);
  }
};

export const saveSingleUserToLocal = (user: any, id?: string): void => {
  if (id) {
    try {
      const serialisedState: string = JSON.stringify(user);
      localStorage.setItem(`lendsqruser-${id}`, serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }
};

export const loadSingleUserFromLocal = (id?: string): any[] | null => {
  if (id) {
    try {
      const usersInLocal = localStorage.getItem(`lendsqruser-${id}`)
        ? JSON.parse(localStorage.getItem(`lendsqruser-${id}`) as string)
        : null;
      return usersInLocal;
    } catch (e) {
      return null;
    }
  } else {
    return null;
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
