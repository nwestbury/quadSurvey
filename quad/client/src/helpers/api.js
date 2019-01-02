const getCookie = (c_name) => {
    if (document.cookie.length > 0)
    {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start !== -1)
        {
            c_start = c_start + c_name.length + 1;
            var c_end = document.cookie.indexOf(";", c_start);
            if (c_end === -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
 }

export const jsonRequest = (url, method, data) => {
    const dataKey = method === 'GET' ? 'data' : 'body';
    
    const promise = fetch(url, {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'),
        },
        credentials: 'include',
        [dataKey]: JSON.stringify(data),
    });

    return promise.then((resp) => {
        return resp.json();
    });
};
