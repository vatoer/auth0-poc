"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";

import {
  DropdownMenuCheckboxItem,
  DropdownMenuCheckboxItemProps,
} from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, ShipWheel } from "lucide-react";
import { useState } from "react";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false);
  const [showPanel, setShowPanel] = useState<Checked>(false);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Image
            src={user.picture!}
            alt={user.name!}
            width={42}
            height={42}
            className="rounded-full hover:cursor-pointer hover:opacity-75"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full" side="bottom">
          <DropdownMenuLabel>{user.name!}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Button
              variant={"ghost"}
              className="w-full flex items-center justify-between"
            >
              <Link
                href="/api/auth/logout"
                className="flex items-center justify-between gap-x-2"
              >
                <LogOut className="opacity-75" />
                <span>Logout</span>
              </Link>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button
              variant={"ghost"}
              className="w-full flex items-center justify-between"
            >
              <Link
                href="/api/auth/logout"
                className="flex items-center flex-row justify-between gap-x-2"
              >
                <Settings className="opacity-75" />
                <span>Settings</span>
              </Link>
            </Button>
          </DropdownMenuItem>{" "}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
}
