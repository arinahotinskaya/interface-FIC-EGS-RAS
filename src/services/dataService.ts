import axios from "axios"
import { IGSStation } from "../types/types"

// Для разработки
export const getDataIGS = async (): Promise<IGSStation[]> => {
  try {
    const response = await axios.get<IGSStation[]>("/igs-api/pub/station/general/IGSNetwork.json");
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch IGS data: ${error.message}`);
    }
    throw new Error('Unknown error occurred while fetching IGS data');
  }
};

// Для продакшена
// export const getDataIGS = async (): Promise<IGSStation[]> => {
//   try {
//     const response = await axios.get<IGSStation[]>("https://files.igs.org/pub/station/general/IGSNetwork.json");
//     return response.data;
//   } catch (error) {
//     if (error instanceof Error) {
//       throw new Error(`Failed to fetch IGS data: ${error.message}`);
//     }
//     throw new Error('Unknown error occurred while fetching IGS data');
//   }
// };