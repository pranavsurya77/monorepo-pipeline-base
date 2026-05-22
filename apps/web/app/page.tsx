import { prisma as client } from "db/client";

export const dynamic = "force-dynamic";

export default async function Home() {

  const users = await client.user.findMany();
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.email}</p>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
}
