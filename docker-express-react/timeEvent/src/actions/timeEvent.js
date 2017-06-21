export const addToTimeEvent = (item) => {
    return {
        type: 'ADD_TIMEEVENT',
        item
    };
};

export const initTimeEventsWhenFetchSucceed = (item) => {
    return {
        type: 'INI_TIMEEVENT',
        item
    };
};

export const TimeEventsIsLoading = (bool) => {
    return {
        type: 'SET_LOADING_FLAG',
        isLoading: bool
    };
};

export const TimeEventsLoadingError = (bool) => {
    return {
        type: 'SET_LOADING_RESULT',
        hasError: bool
    };
};

export function fetchData(url) {
    return (dispatch) => {
        dispatch(TimeEventsIsLoading(true));

        fetch(url, {
            method: 'GET'
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(TimeEventsIsLoading(false));
                return response.json();
            })
            .then((items) => dispatch(initTimeEventsWhenFetchSucceed(items)))
            .catch((error) => dispatch(TimeEventsLoadingError(true)))
            ;
    };
}
