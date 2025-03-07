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
const utils_1 = require("../../../../utils");
exports.default = (dependencies) => {
    const { changePasswordUseCase } = dependencies.useCase;
    const changePasswordController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, newPassword, currentPassword } = req.body;
            const hashedNewPassword = yield (0, utils_1.hashPassword)(newPassword);
            const data = {
                email, currentPassword, hashedNewPassword
            };
            const response = yield changePasswordUseCase(dependencies).executeFunction(data);
            console.log(response, "contro res");
            if (response && response.status && response.data) {
                res.json({ status: true, data: response.data });
            }
            else {
                res.json({ status: false, data: response.data });
            }
        }
        catch (error) {
            res.json({ status: false, data: "somehting went wrong" });
        }
    });
    return changePasswordController;
};
