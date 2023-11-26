export interface RepositoryInterface<T> {
  findMany(entityName: string, params?: any): Promise<T[]>;
  findOne(entityName: string, params: any): Promise<T | null>;
  findUnique(entityName: string, params: any): Promise<T | null>;
  create(entityName: string, data: any): Promise<T>;
  update(entityName: string, params: any, data: any): Promise<T>;
  delete(entityName: string, params: any): Promise<void>;
}
