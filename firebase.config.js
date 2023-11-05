
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:"AIzaSyCaJ-eyWDSsV8AARkcYxUCsx_RRFx6ctx4" ,
  authDomain:"digim-19266.firebaseapp.com" ,
  projectId:"digim-19266",
  storageBucket:"digim-19266.appspot.com" ,
  messagingSenderId:"1072989359958" ,
  appId:"1:1072989359958:web:52c54a676e7ba66056d0f7" 
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;