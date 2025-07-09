import * as mongoose from 'mongoose';

export const PokemonSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true },
  type: { 
    type: String, 
    required: true },
  image: { 
    type: String, 
    required: true },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
    required: false,
  }

});