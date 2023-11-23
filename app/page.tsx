import ProfileClient from "@/components/profile-client";
import UserButton from "@/components/user-button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <a href="/api/auth/login">Login</a>
        </div>
        <div>
          <a href="/api/auth/logout">Logout</a>
        </div>
      </div>
      <ProfileClient />
      <UserButton />
    </>
  );
}
