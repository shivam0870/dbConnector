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
const mongoConnect_1 = require("./mongoConnect");
const UserRepository_1 = require("./repositories/UserRepository");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const uri = 'mongodb://localhost:27017';
            yield (0, mongoConnect_1.connect)(uri);
            const userRepository = new UserRepository_1.UserRepository();
            //create-user
            const user = yield userRepository.createAsync({
                userId: 'tensech1',
                email: 'tensech1@gmail.com'
            });
            console.log(user);
            //create-user2
            const user2 = yield userRepository.createAsync({
                userId: 'tensech2',
                email: 'tensech2@gmail.com'
            });
            console.log(user2);
            // //getUser by Id
            // const user3 = await userRepository.findByIdAsync("653a0cdffb2e4a89f699ae80")
            // console.log(user3);
            // // update User by Id
            // const user4 = await userRepository.updateAsync("653a0ce1fb2e4a89f699ae82",{
            //     userId: 'ten2sech',
            //     email: 'ten2sech@gmail.com'
            // })
            // console.log(user4);
            // //retrive all user
            // const user5 = await userRepository.findAllAsync()
            // console.log(user5);
            // //delete user 
            // const user6 = await userRepository.deleteAsync("653a0bcc1b4b4e1eeb9b877a");
            // console.log(user6);
        }
        catch (error) {
            console.log("error: ", error);
        }
    });
}
main();
//# sourceMappingURL=app.js.map