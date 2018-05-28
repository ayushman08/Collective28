import { combineReducers } from 'redux';
import ContactReducer from '../Components/ContactComponent/ContactReducer';
import ServivePreferenceReducer from '../Components/ServicePreferenceComponent/ServicePreferenceReducer';
import KidsSelectionReducer from '../Components/KidsSelectionComponent/KidsSelectionReducer';

export default combineReducers({

	contactReducer: ContactReducer,
	servivePreferenceReducer:ServivePreferenceReducer,
	kidsSelectionReducer:KidsSelectionReducer
	

});