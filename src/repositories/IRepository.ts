export interface IRepository<T>{

    createAsync(data: T): Promise<T>;

    findAllAsync(): Promise<Array<T> | null>;

    findByIdAsync(id: string): Promise<T | null>;

    updateAsync(id: string, data: T): Promise<T | null>;

    deleteAsync(id: string): Promise<T | null>;

}
