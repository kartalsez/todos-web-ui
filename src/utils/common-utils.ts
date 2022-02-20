export function getServiceOptions(method: 'get' | 'put' | 'post' | 'delete', body?: Object): Object {
    return {
        method,
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: body ? JSON.stringify(body) : undefined
    };
}

export function throwError(resp: { ok: any; status: number; json: () => Promise<any>; }, customMessage?: string) {
    if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
            return resp.json().then(data => {
                let err = {errorMessage: data.message};
                throw err;
            })
        } else {
            let err = {errorMessage: customMessage || 'Please try again later, server is not responding'};
            throw err;
        }
    }
}
