import useData from "./useData";

interface Platforms{
    id: number;
    name: string;
    slug: string;
}

const platforms = ()=> useData<Platforms>("/platforms/lists/parents")

export default platforms;