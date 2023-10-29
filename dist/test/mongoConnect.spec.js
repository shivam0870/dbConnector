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
const mongoConnect_1 = require("../src/mongoConnect");
describe("Testing MongoDB Connector", () => {
    const originaLog = console.log;
    let consoleOut = [];
    it("should successfully connected to mongoDB", () => __awaiter(void 0, void 0, void 0, function* () {
        const uri = 'mongodb://localhost:27017';
        yield (0, mongoConnect_1.connect)(uri);
        // assert.equal(result,"Connected to Database!")
        // assert.equal("Connected to Database!")
    }));
});
//# sourceMappingURL=mongoConnect.spec.js.map