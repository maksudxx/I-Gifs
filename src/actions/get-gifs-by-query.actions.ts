import axios from "axios";
import { Giphy } from "../interfaces/Giphy.response";
import { Gif } from "../interfaces/Gif.interface";

export const getGifByQuery = async (query: string): Promise<Gif[]> => {
  const urlGiphy = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  //!Es de tipo Giphy porque viene de la interface
  const response = await axios.get<Giphy>(`${urlGiphy}/search`, {
    params: {
      q: query,
      limit: 20,
      lang: "es",
      api_key: apiKey,
    },
  });

  //!retornamos solamente lo quu necesitamos de la api, los valores que aparecen aqui estan en base a la interface creada
  return response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    height: Number(gif.images.original.height),
    width: Number(gif.images.original.width),
    size: Number(gif.images.original.size)
  }));
};

