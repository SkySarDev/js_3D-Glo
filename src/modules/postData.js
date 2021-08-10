const postData = body =>
    fetch('https://just-mini-server.herokuapp.com/api/callback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

export default postData;
