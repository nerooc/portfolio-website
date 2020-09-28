import ReactGA from 'react-ga';
import auth from './auth.ts'; // Sample authentication provider

import {trackingId} from './src/keys'; 

ReactGA.initialize(trackingId);
ReactGA.set({
  userId: auth.currentUserId(),
})