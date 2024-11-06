"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <button
          onClick={() => signOut()}
          className="px-6 py-2 rounded-md bg-red-600 text-white font-semibold shadow-lg hover:bg-red-700 transition-all duration-300"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn()}
      className="px-6 py-2 rounded-md bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-semibold shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
    >
      Autenticación con Google
    </button>
  );
};

export default SigninButton;
