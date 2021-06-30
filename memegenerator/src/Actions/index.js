export const RECIEVE_MEMES = "RECIEVE_MEMES";

function receiveMemes(json){
    const { memes } = json.data;
    
    return {
        type: "RECEIVE_MEMES",
        memes
    }
}