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
exports.default = (dependencies) => {
    const { adminLoginUseCase } = dependencies.useCase;
    const adminLoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { email, password } = req.body;
        const data = {
            email,
            password,
        };
        const responce = yield adminLoginUseCase(dependencies).executeFunction(data);
        console.log(responce, "use ");
        if (responce.status) {
            res.json({ status: true, data: responce.data });
        }
        else {
            res.json({ status: false, message: responce.message });
        }
    });
    return adminLoginController;
};
