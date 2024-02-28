' use client'

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";

export default function dashborad() {
  return <div>
    <button className=" p-2 rounded bg-cyan-600 m-2">
        <LogoutLink>
            Logout
        </LogoutLink>

    </button>
  </div>;
}
