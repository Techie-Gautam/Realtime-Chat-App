import { Client, Databases, Account } from 'appwrite';

export const PROJECT_ID = '668fd39d00261e34422d'
export const DATABASE_ID = '668fd4b700253de9b4d0'
export const COLLECTION_ID_MESSAGES = '668fd4ca001389c97ad1'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('668fd39d00261e34422d');

export const databases = new Databases(client)    
export const account = new Account(client)    

export default client    