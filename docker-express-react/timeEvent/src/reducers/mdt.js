export const mdtshow = (state = true, payload) => {
    switch (payload.type) {
        case 'SHOW_TIMEEVENT':
            return payload.isShowTimeEvent;
        default:
            return state;
    }
};
