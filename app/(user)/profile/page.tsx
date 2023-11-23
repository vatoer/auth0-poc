"use client";
import { useUser } from "@auth0/nextjs-auth0/client";

const ProfilePage = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <h1>Profile</h1>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.nickname}</p>
        <p>{user.org_id}</p>
      </div>
    )
  );
};

export default ProfilePage;
