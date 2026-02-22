import dotenv from 'dotenv';
import NutritionalProfile from '../models/nutritionalProfile.js';
import jwt from 'jsonwebtoken';
dotenv.config();

//helper function to verify JWT token
const verifyJwtToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};


//Create a nutritional profile by jwt token
export const createNutritionalProfile = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }
        const decoded = verifyJwtToken(token);
        if (!decoded) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        const {
            age,
            sex,
            weight,
            height,
            activityLevel,
            dietaryPreferences,
            budgetLevel,
        } = req.body;
        const newProfile = new NutritionalProfile({
            userId: decoded.id,
            age,
            sex,
            weight,
            height,
            activityLevel,
            dietaryPreferences,
            budgetLevel,
        });
        const savedProfile = await newProfile.save();
        res.status(201).json(savedProfile);
    } catch (error) {
        res.status(500).json({ message: 'Error creating nutritional profile', error: error.message });
    }
}


// Get a nutritional profile by jwt token
export const getNutritionalProfile = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }
        const decoded = verifyJwtToken(token);
        if (!decoded) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        const profile = await NutritionalProfile.findOne({ userId: decoded.id });
        if (!profile) {
            return res.status(404).json({ message: 'Nutritional profile not found' });
        }
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching nutritional profile', error: error.message });
    }
};

// Update a nutritional profile by jwt token
export const updateNutritionalProfile = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }
        const decoded = verifyJwtToken(token);
        if (!decoded) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        const { age, sex, weight, height, activityLevel, dietaryPreferences, budgetLevel } = req.body;
        const updatedProfile = await NutritionalProfile.findOneAndUpdate(
            { userId: decoded.id },
            { age, sex, weight, height, activityLevel, dietaryPreferences, budgetLevel },
            { new: true }
        );
        if (!updatedProfile) {
            return res.status(404).json({ message: 'Nutritional profile not found' });
        }
        res.status(200).json(updatedProfile);
    } catch (error) {
        res.status(500).json({ message: 'Error updating nutritional profile', error: error.message });
    }
};