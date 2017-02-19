export const store = (resource) => {
    return {
        type: "STORE",
        resource
    }
}

export const consume = (resource) => {
    return {
        type: "CONSUME",
        resource
    }
}