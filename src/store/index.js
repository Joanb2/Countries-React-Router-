import { createStore } from 'redux';
import reducers from '../reducers/index';
import DevTools from '../devtools';

const store = createStore(
	reducers,
	DevTools.instrument()
);

export default store;