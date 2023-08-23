import Joi from 'joi';
import { Schema } from 'mongoose';

export const TodoDashboard = new Schema({
  title: Joi.string().required(),
});

export const TodoColumn = new Schema({
  title: Joi.string().required(),
});

export const TodoCard = new Schema({
  title: Joi.string().required(),
  description: Joi.string().required(),
  priority: Joi.string().required(),
  deadline: Joi.deadline().required(),
});
