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
exports.getallBeepers = exports.createDb = void 0;
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
