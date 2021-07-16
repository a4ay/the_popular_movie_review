import * as type from '../types';

export function getMovies(movies){
    // API CALL HERE
    return {
        type : type.GET_MOVIES_REQUESTED,
        payload : movies,
    }
}