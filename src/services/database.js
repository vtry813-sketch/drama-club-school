import { MongoClient } from 'mongodb';

const MONGODB_URI = 'mongodb+srv://nimatest:nimatest@nimatest.bdf6c2a.mongodb.net/';
const DATABASE_NAME = 'drama_club';
const COLLECTION_NAME = 'students';

let client;
let database;

export const connectToDatabase = async () => {
  if (database) return database;

  try {
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    database = client.db(DATABASE_NAME);
    console.log('Connected to MongoDB successfully');
    return database;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

export const getStudents = async () => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection(COLLECTION_NAME);
    const students = await collection.find({}).toArray();
    return students;
  } catch (error) {
    console.error('Error fetching students:', error);
    return [];
  }
};

export const addStudent = async (studentData) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection(COLLECTION_NAME);
    
    const studentDocument = {
      ...studentData,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await collection.insertOne(studentDocument);
    return result;
  } catch (error) {
    console.error('Error adding student:', error);
    throw error;
  }
};

export const closeConnection = async () => {
  if (client) {
    await client.close();
  }
};
