var storageService = {
    query,
}

function query(key) {
    const data = localStorage.getItem(key)
    return Promise.resolve(JSON.parse(data) || [])
}
