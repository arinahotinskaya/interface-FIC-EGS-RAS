// Для разработки
export const getDataIGS = async () => {
  const data = await fetch("/igs-api/pub/station/general/IGSNetwork.json");
  const json = await data.json();
  return json;
};

// Для продакшена
// export const getDataIGS = async () => {
//   const data = await fetch('https://files.igs.org/pub/station/general/IGSNetwork.json');
//   const json = await data.json();
//   return json;
// };