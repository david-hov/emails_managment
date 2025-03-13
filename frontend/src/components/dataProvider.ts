import Axios, { AxiosError, AxiosResponse } from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

interface Filter {
    filter: {
        q?: string;
    }
    pagination: {
        page: string;
        perPage: string;
    }
    sort: {
        field: string;
        order: string;
    }
}

interface CreateParams<T = unknown> {
    data: T;
}

interface EmailData {
    to: string;
    body: string;
    cc: string | null;
    bcc: string | null;
    subject: string | null;
    id: number;
    createdAt: string;
}

interface ApiResponse {
    total: string;
    data: EmailData;
    errors: any
}


export const globalDataProvider: any = {
    getList: async (resource: string, params: Filter) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = `filter=${encodeURIComponent(JSON.stringify(params.filter))}&limit=${perPage}&page=${page}&orderBy=${field}&orderDir=${order}`;
        const url = `${apiUrl}/${resource}?${query}`;
        return Axios.get(url).then(({ data }: AxiosResponse<ApiResponse>) => {
            return ({
                data: data.data,
                total: parseInt(data.total)
            });
        })
    },

    create: async (resource: string, params: CreateParams) => {
        const body = params.data;
        return Axios.post(`${apiUrl}/${resource}`, body).then(({ data }: AxiosResponse<ApiResponse>) => {
            return ({
                data: data.data,
            })
        }).catch((err: AxiosError<ApiResponse>) => {
            return Promise.reject(err.response ? err.response.data.errors.join(',') : err.message);
        });
    },
}
