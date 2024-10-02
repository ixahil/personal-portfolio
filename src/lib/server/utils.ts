import { cookies } from "next/headers";
import { Client, Databases } from "node-appwrite";

const APPWRITE_ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "";
const APPWRITE_PROJECT = process.env.NEXT_PUBLIC_APPWRITE_PROJECT || "";

const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT);

const databases = new Databases(client);

export const getProjects = async () => {
  const _ = cookies();
  databases.listDocuments("66fce36200234e0b6158", "66fce37100364fd2637c");
};
