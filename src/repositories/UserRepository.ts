import { Model } from 'mongoose';
import { IUser } from '../entities/IUser'
import { IRepository } from './IRepository';
import { User } from '../entities/User'

export class UserRepository implements IRepository<IUser> {

    private model: Model<IUser>;

    constructor(){
        this.model = User;
    }

    async createAsync(data: IUser): Promise<IUser>{
        const result = await this.model.create(data);
        return result;
    }

    async findAllAsync(): Promise<Array<IUser> | null> {
        const result = await this.model.find({});
        return result;
    }

    async findByIdAsync(id: string): Promise<IUser | null>{
        const result = await this.model.findById({_id: id});
        return result;
    }

    async updateAsync(id: string, data: IUser): Promise<IUser | null>{
        const result = await this.model.findByIdAndUpdate(id,data);
        return result;
    }

    async deleteAsync(id: string): Promise<IUser | null>{
        const result = await this.model.findByIdAndDelete({_id: id});
        return result;
    }
}
