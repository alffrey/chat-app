const generateMessage = (username, text) => {
    return {
        text,
        createdAt: new Date().getTime(),
        username
    };
};

const generateLocationMessage = (username, mapsUrl) => {
    return {
        mapsUrl,
        createdAt: new Date().getTime(),
        username
    };
};

module.exports = {
    generateMessage,
    generateLocationMessage
};