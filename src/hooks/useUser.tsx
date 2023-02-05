import { createContext, useContext, useEffect, useState } from "react";

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  surname: string;
  phone: string;
  token: string;
}

interface UserContext {
  user: User | null;
  isLoggedIn: boolean;
  retry: () => Promise<void>;
}

const UserContext = createContext<UserContext>({
  user: null,
  isLoggedIn: true,
  retry: async () => {},
});

export const useUser = () => useContext(UserContext);

function useUserProvider() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await fetch("/api/user");
      if (!res.ok) throw res;

      const data = await res.json();

      setUser(data.user);
      setIsLoggedIn(true);
    } catch (error) {
      setUser(null);
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, isLoggedIn, retry: fetchUser };
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const { user, isLoggedIn, retry } = useUserProvider();

  return <UserContext.Provider value={{ user, isLoggedIn, retry }}>{children}</UserContext.Provider>;
}
