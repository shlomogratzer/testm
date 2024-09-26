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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.del = exports.getBeeperByStatus = exports.getBeeperById = exports.getallBeepers = exports.createDb = void 0;
const fs_1 = __importDefault(require("fs"));
const jsonfile_1 = __importDefault(require("jsonfile"));
const beeperDB = './db/beeperBD';
const createDb = (target) => __awaiter(void 0, void 0, void 0, function* () {
    if (!fs_1.default.existsSync(beeperDB)) {
        yield jsonfile_1.default.writeFile(beeperDB, []);
    }
    let beepers = yield jsonfile_1.default.readFile(beeperDB);
    beepers.push(target);
    yield jsonfile_1.default.writeFile(beeperDB, beepers);
});
exports.createDb = createDb;
const getallBeepers = () => __awaiter(void 0, void 0, void 0, function* () {
    const beepers = yield jsonfile_1.default.readFile(beeperDB);
    return beepers;
});
exports.getallBeepers = getallBeepers;
const getBeeperById = (targetId) => __awaiter(void 0, void 0, void 0, function* () {
    const beepers = yield jsonfile_1.default.readFile(beeperDB);
    if (!beepers || beepers.length === 0) {
        console.log("No beepers found.");
        return null;
    }
    const beeper = beepers.find(target => target.id == targetId);
    if (beeper) {
        return beeper;
    }
    else {
        console.log(`Beeper with ID ${targetId} not found.`);
        return null;
    }
});
exports.getBeeperById = getBeeperById;
const getBeeperByStatus = (targetStatus) => __awaiter(void 0, void 0, void 0, function* () {
    const beepers = yield jsonfile_1.default.readFile(beeperDB);
    if (!beepers || beepers.length === 0) {
        console.log("No beepers found.");
        return null;
    }
    const beeper = beepers.filter(target => target.status === targetStatus);
    if (beeper) {
        return beeper;
    }
    else {
        console.log(`Beeper with ID ${targetStatus} not found.`);
        return null;
    }
});
exports.getBeeperByStatus = getBeeperByStatus;
const del = (targetId) => __awaiter(void 0, void 0, void 0, function* () {
    const beepers = yield jsonfile_1.default.readFile(beeperDB);
    const index = beepers.findIndex(u => u.id == targetId);
    if (index !== -1) {
        beepers.splice(index, 1);
        yield jsonfile_1.default.writeFile(beeperDB, beepers);
    }
});
exports.del = del;
const update = (target) => __awaiter(void 0, void 0, void 0, function* () {
    const beepers = yield jsonfile_1.default.readFile(beeperDB);
    beepers.forEach(beeper => {
        if (target.id === beeper.id) {
            beeper.status = target.status;
        }
    });
    yield jsonfile_1.default.writeFile(beeperDB, beepers);
});
exports.update = update;
