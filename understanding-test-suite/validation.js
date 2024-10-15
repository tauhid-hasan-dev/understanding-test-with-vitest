export function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(email)){
        throw new Error("Invalid email address");
    }
}

export function validateArrayNotEmpty(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error("Array must not be empty");
    }
}