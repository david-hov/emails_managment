export interface DatabaseConfig {
    DATABASE_HOST: string;
    DATABASE_PORT: string;
    DATABASE_USERNAME: string;
    DATABASE_PASSWORD: string;
    DATABASE_NAME: string;
}

export interface Filter {
    filter: string;
    limit: string;
    page: string;
    orderBy: string;
    orderDir: 'ASC' | 'DESC';
}