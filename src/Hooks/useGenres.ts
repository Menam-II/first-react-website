import gernes from "../data/genres.ts"

export interface Genre {
  id: number;
  name: string;
  background_image: string;
}
const useGenres = () => ({data: gernes, isLoading: false, error: null});

export default useGenres;
