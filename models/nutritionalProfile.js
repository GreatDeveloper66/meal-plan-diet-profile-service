import { mongoose } from 'mongoose';

const nutritionalProfileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    age: { type: Number, required: true },
    sex: { type: String, enum: ['male', 'female'], required: true },
    weight: { type: Number, required: true }, // in kg
    height: { type: Number, required: true }, // in cm
    activityLevel: { type: String, enum: ['sedentary', 'light', 'moderate', 'active', 'very active'], required: true },
    dietaryPreferences: { type: [String], enum: ['Normal', 'Keto', 'High Protein', 'Vegetarian', 'Vegan'], default: ['none'] },
    budgetLevel: { type: String, enum: ['Minimal', 'Normal', 'Premium'], required: true },
    createdAt: { type: Date, default: Date.now },
});


{
    "age": 33,
            "sex": "male",
            "weight": 55,
            "height": 165,
            "activityLevel": "moderate",
            "dietaryPreferences": ["Normal"],
            "budgetLevel": "Normal"
}

