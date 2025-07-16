export const getDataIGS = async () => {
    const data = await fetch('/igs-api/pub/station/general/IGSNetwork.json');
    const json = await data.json();
    return json;
};