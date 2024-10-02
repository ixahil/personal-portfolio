"use server";
import { Client, Account, Databases } from "node-appwrite";
import { cookies } from "next/headers";

const APPWRITE_ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "";
const APPWRITE_PROJECT = process.env.NEXT_PUBLIC_APPWRITE_PROJECT || "";
const APPWRITE_KEY = process.env.NEXT_APPWRITE_KEY || "";

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT);

  const session = cookies().get("my-custom-session");
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT)
    .setKey(APPWRITE_KEY);

  return {
    get account() {
      return new Account(client);
    },
  };
}
