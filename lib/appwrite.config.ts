import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT, 
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66cbef94003c9ccaa7f9").setKey("6b22d431f4e11b30a72c65f336f4cc675a358aa8fba90748cd3d3fd918219a328c5cb8900b32a9f4097c92a5151dc2c6da1901de31446c35d4ea8361394c33258e1937c8ab1e03168ab147fde5b839b4e45b0c2bb9e1916daff01464c413bda68493e839ce196fc8504c887a76cd2fe44d8771d877d8c7d84172ea09b413880e");

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
