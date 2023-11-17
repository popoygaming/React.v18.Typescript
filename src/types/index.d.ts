interface IBookAuthor{
    name: string;
    gender: string;
    age: number;
    books: IBook[];
}
interface IBook{
    name: string;
    type: string;
}

interface IUseFetchResult{
    retData: any | null;
    isPending: boolean;
    error: any | null;
}