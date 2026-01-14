import crypto from "crypto";

export function generateHash(len: number) {
    const options = "qwertyuiopasdfghjklzxcvbnm1234567890";
    const length = options.length;
    let hash = "";
    const bytes = crypto.randomBytes(len);

    for (let i = 0; i < len; i++) {
        hash += options[bytes[i] % length];
    }

    return hash;
}
