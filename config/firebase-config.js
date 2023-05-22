import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

// import serviceAccountKey from "../../serviceAccountKey.json" assert { type: "json" };

import { readFile } from "node:fs/promises";
const fileUrl = new URL("../serviceAccountKey.json", import.meta.url);
const serviceAccountKey = JSON.parse(await readFile(fileUrl, "utf8"));

const app = initializeApp({
  credential: cert(serviceAccountKey),
});

const auth = getAuth(app);
export default auth;
