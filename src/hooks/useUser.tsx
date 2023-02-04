import { createContext, useContext, useEffect, useState } from "react";

export interface User {
  id: number;
  email: string;
  password: string;
  token: string;
}

interface UserContext {
  user: User | null;
  isLoggedIn: boolean;
  retry: () => Promise<void>;
}

const UserContext = createContext<UserContext>({
  user: null,
  isLoggedIn: false,
  retry: async () => {},
});

export const useUser = () => useContext(UserContext);

function useUserProvider() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await fetch("/api/user");
      if (!res.ok) throw res;
      setUser(await res.json());
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, loading, retry: fetchUser };
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const { user, retry } = useUserProvider();

  return <UserContext.Provider value={{ user, isLoggedIn: !!user, retry }}>{children}</UserContext.Provider>;
}
