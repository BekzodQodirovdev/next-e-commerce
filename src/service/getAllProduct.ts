import { useQuery } from "@tanstack/react-query";
import fetchWrapper from "./fetcher";
import { ProductT } from "@/app/_components/ProductList";

export const getAllProduct = (fillter?: object) => {
    return useQuery({
        queryKey: ["products"],
        queryFn: (): Promise<{
            status_code: number;
            message: string;
            data: ProductT[];
        }> => fetchWrapper("/api/product"),
    });
};
