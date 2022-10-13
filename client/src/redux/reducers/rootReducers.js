import { combineReducers } from "redux"
import {
    userRegisterCandidatReducer,
    userRegisterRecruiterReducer
} from "./authReducers";
import {
    fetchJobsReducer,
    fetchMyJobOfferReducer,
    fetchSingleJobReducer,
    updateJobReducer,
    deleteJobReducer,
    createJobReducer,
    searchJobsReducer
} from "./jobReducers";
import {
    fetchProfileReducer,
    updateUserProfileReducer
} from "./userReducers";
import {
    fetchRecruiterProfileReducer,
    updateRecruiterProfileReducer
} from './recruiterReducers'
import {
    createPostuReducer, deletePostuReducer, fetchPostuReducer
} from "./postuReducers";

const rootReducer = combineReducers({
    userInfoCandidat: userRegisterCandidatReducer,
    userInfoRecruiter: userRegisterRecruiterReducer,
    userProfile: fetchProfileReducer,
    jobs: fetchJobsReducer,
    job: fetchSingleJobReducer,
    myJobOffer: fetchMyJobOfferReducer,
    updateJob: updateJobReducer,
    deleteJob: deleteJobReducer,
    createJob: createJobReducer,
    searchJobs: searchJobsReducer,
    updateUserProfile: updateUserProfileReducer,
    recruiterProfile: fetchRecruiterProfileReducer,
    updateRecruiterProfile: updateRecruiterProfileReducer,
    createPostu: createPostuReducer,
    postu: fetchPostuReducer,
    deletePostu: deletePostuReducer
})

export default rootReducer;