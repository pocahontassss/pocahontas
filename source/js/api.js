export async function getApi(url) {
    const responce = await fetch(url);
    let data = await responce.json(); 
    return data;
}