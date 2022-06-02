const { expect, assert } = require("chai")
const { ethers } = require("hardhat")

describe("SimpleSotrage", () => {
    let simpleStorageFactory
    let simpleStorage

    beforeEach(async () => {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("should start with a favorite number of 0", async () => {
        const currentNumber = await simpleStorage.retrieve()
        const expectedNumber = "0"
        assert.equal(currentNumber, expectedNumber)
    })

    it("can store a new favorite number", async () => {
        const expectedNumber = "7"
        const transactionResponse = await simpleStorage.store(expectedNumber)
        transactionResponse.wait(1)
        const newNumber = await simpleStorage.retrieve()

        assert.equal(newNumber, expectedNumber)
    })
})
