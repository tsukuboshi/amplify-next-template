import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';
import { myFirstFunction } from './function/resource.js';
import { storage } from './storage/resource';

defineBackend({
  auth,
  data,
  myFirstFunction,
  storage,
});
