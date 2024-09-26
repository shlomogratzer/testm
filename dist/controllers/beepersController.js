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
exports.changeStatus = exports.deleteBeeper = exports.getByStatus = exports.getById = exports.getAll = exports.create = void 0;
let id = 0;
const beeperDal_1 = require("../dbl/beeperDal");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body)
        return;
    const target = {
        id: id + 1,
        name: req.body.name,
        status: 'manufactured',
        created_at: new Date(),
        detonated_at: 'no detonated',
        latitude: 'no latitude',
        longitude: 'no longitude'
    };
    yield (0, beeperDal_1.createDb)(target);
    id++;
    res.send('manufactured beeper suxsessfuly');
});
exports.create = create;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const targets = yield (0, beeperDal_1.getallBeepers)();
    res.send(targets);
});
exports.getAll = getAll;
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const target = yield (0, beeperDal_1.getBeeperById)(req.params.id);
    res.send(target);
});
exports.getById = getById;
const getByStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const target = yield (0, beeperDal_1.getBeeperByStatus)(req.params.status);
    res.send(target);
});
exports.getByStatus = getByStatus;
const deleteBeeper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const target = yield (0, beeperDal_1.del)(req.params.id);
    res.send('beeper is deleted');
});
exports.deleteBeeper = deleteBeeper;
const changeStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const target = yield (0, beeperDal_1.getBeeperById)(req.params.id);
    if (target) {
        target.status = req.body.status;
        if (req.body.status === "deployed") {
            setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
                target.status = "detonated";
                target.detonated_at = new Date();
                yield (0, beeperDal_1.update)(target);
            }), 10000);
        }
        yield (0, beeperDal_1.update)(target);
        const newTarget = yield (0, beeperDal_1.getBeeperById)(req.params.id);
        res.send(newTarget);
    }
});
exports.changeStatus = changeStatus;
