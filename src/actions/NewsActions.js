import{
    NEWS_RETRIEVED_FAILED,
	NEWS_RETRIEVED_SUCCESS,
	NEWS_RETRIEVAL_START,
	NEWS_NOT_FOUND,
} from './types';

export const getNews = ()=>{
    const apiURL =`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.pressalert.ro%2Ffeed%2F`
	return dispatch => {
	dispatch({ type: NEWS_RETRIEVAL_START });
    fetch(apiURL,{
        method:'GET'
    })
    .then(response =>
    response.json().then(responseJson => {
				console.log('response COs', responseJson);
				if (responseJson) {
					dispatch({
						type: NEWS_RETRIEVED_SUCCESS,
						payload: {
							news: responseJson
						}
					});
				} else {
					dispatch({ type: NEWS_NOT_FOUND, payload: {}});
				}
			})
		)
		
	}
};