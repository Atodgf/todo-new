import { CREATE } from "./types";

export function createForm (info) {
    return {
        type: CREATE, 
        payload: info 
    }
}