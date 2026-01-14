import crypto from "crypto";

export function generateHash() {
    const hashLength = 20;
    const options = "qwertyuiopasdfghjklzxcvbnm1234567890";
    const length = options.length;
    let hash = "";
    const bytes = crypto.randomBytes(hashLength);

    for (let i = 0; i < hashLength; i++) {
        hash += options[bytes[i] % length];
    }

    return hash;
}
