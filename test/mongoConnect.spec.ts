import { assert } from "chai";
import { connect } from "../src/mongoConnect";

describe("Testing MongoDB Connector",()=>{

    const originaLog = console.log;
    let consoleOut = [];

    it("should successfully connected to mongoDB", async()=>{
        const uri = 'mongodb://localhost:27017';
        await connect(uri);
        // assert.equal(result,"Connected to Database!")
        // assert.equal("Connected to Database!")
    })
})