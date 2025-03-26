import { useQuery } from "@tanstack/react-query";
import fetchWrapper from "./fetcher";
import { ProductT } from "@/app/_components/ProductList";

export const getOneProduct = (id: string) => {
    return useQuery({
        queryKey: ["product_item"],
        queryFn: (): Promise<{
            status_code: number;
            message: string;
            data: ProductT;
        }> => fetchWrapper(`/api/product/${id}`),
    });
};
