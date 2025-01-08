

import { getAllUsers, getUsersCount } from '../_services'
import UserList from "../_components/UserList";
import { User } from "@clerk/nextjs/server";


const UserView = async () => {
  const { data } = await getAllUsers();
  const userCount = await getUsersCount();


  function deepSerialize<T>(data: T): T {
    if (data === null || typeof data !== "object") {
      return data; // Return primitive values (string, number, boolean, null) as is
    }

    if (Array.isArray(data)) {
      return data.map(deepSerialize) as T; // Recursively handle arrays
    }

    return Object.keys(data).reduce((result, key) => {
      (result as Record<string, unknown>)[key] = deepSerialize((data as Record<string, unknown>)[key]); // Type assertion for dynamic keys
      return result;
    }, {} as T);
  }

  function serializeUserList(users: User[]) {
    return users.map((user) => deepSerialize(user));
  }

  const serializedData = serializeUserList(data);

  return (
    <UserList data={serializedData} userCount={userCount} />

  )
}
export default UserView