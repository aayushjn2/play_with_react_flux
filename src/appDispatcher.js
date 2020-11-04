import {Dispatcher} from 'flux';
const dispatcher = new Dispatcher();// instance of dispatcher
export default dispatcher;
//now we have a single dispatcher in the app we can use 
//we have only one dispatcher per application
//dispatcher will hold all the callbacks
//stores will have to register to this dispatcher if any action occurred 


