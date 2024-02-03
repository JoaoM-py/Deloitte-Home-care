export const getLastThirtyMinutes = () => {
    const thirtyMinutesAgo = new Date(Date.now() - 30 * 60000);

    return thirtyMinutesAgo
}

export const LastThirtyMinutesInMinutes = (date:Date) => {
    const toTimestamp = new Date(date).getTime();
    const inMinutes = Math.floor( toTimestamp / (1000 * 60));

    return inMinutes    
}
