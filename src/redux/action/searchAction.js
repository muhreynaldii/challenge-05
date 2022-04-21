import axios from "axios";
import { GET_SEARCH } from "../types"

export const getSearch = () => {
    return(dispatch)=>{
        dispatch({type: `${GET_SEARCH}_LOADING`});

        axios({
            method: "GET",
            url: "https://rent-cars-api.herokuapp.com/admin/car"
        })
        .then((response)=>{
            dispatch({
                type: `${GET_SEARCH}_FULFILLED`,
                payload: response.data,
            });
        })
        .catch((error)=>{
            dispatch({
                type: `${GET_SEARCH}_ERROR`,
                error: error.massage,
            });
        });
    };
}

