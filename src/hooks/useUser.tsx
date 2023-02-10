import { createContext, useContext, useEffect, useState } from "react";
import { MongoClient } from "@mongodb";

interface User {
  _id: string;
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

async function fetchUser() {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017/areba/user");
    const db = client.db("mydb");
    const users = db.collection<User>("users");
    const user = await users.findOne({});

    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function useUserProvider() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const doFetchUser = async () => {
      const data = await fetchUser();

      setUser(data);
      setIsLoggedIn(data != null);
    };

    doFetchUser();
  }, []);

  return { user, isLoggedIn, retry: () => {} };
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const { user, isLoggedIn, retry } = useUserProvider();

  return <UserContext.Provider value={{ user, isLoggedIn, retry }}>{children}</UserContext.Provider>;
}
