"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const User_1 = require("../entities/User");
class UserRepository {
    constructor() {
        this.model = User_1.User;
    }
    createAsync(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.create(data);
            return result;
        });
    }
    findAllAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.find({});
            return result;
        });
    }
    findByIdAsync(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.findById({ _id: id });
            return result;
        });
    }
    updateAsync(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.findByIdAndUpdate(id, data);
            return result;
        });
    }
    deleteAsync(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.findByIdAndDelete({ _id: id });
            return result;
        });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map