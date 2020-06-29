"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Base_1 = __importDefault(require("./Base"));
var HelloWorld_1 = __importDefault(require("../templates/HelloWorld"));
var utils_1 = require("../../utils");
var SendEventButton = utils_1.fc(function () {
    return utils_1.pk([
        utils_1.el("button", {
            onClick: function () {
                utils_1.setMvClip("rpgmv-EventCommand", [
                    { code: 105, indent: 0, parameters: [2, false] },
                    { code: 405, indent: 0, parameters: [""] },
                    { code: 405, indent: 0, parameters: [""] },
                    { code: 405, indent: 0, parameters: ["CLIPBOARD IS OKEY"] },
                ]);
                alert("コピーしました");
            },
            children: "動作テスト用にイベントコマンドをコピーする"
        }),
    ]);
});
exports["default"] = utils_1.fc(function () {
    return utils_1.pk([
        //
        Base_1["default"]({ heading: "Test", children: [HelloWorld_1["default"](), SendEventButton()] }),
    ]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhwZXJpbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL0V4cGVyaW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBMEI7QUFDMUIsdUVBQWlEO0FBQ2pELHFDQUFvRDtBQUVwRCxJQUFNLGVBQWUsR0FBRyxVQUFFLENBQUM7SUFDekIsT0FBQSxVQUFFLENBQUM7UUFDRCxVQUFFLENBQUMsUUFBUSxFQUFFO1lBQ1gsT0FBTyxFQUFFO2dCQUNQLGlCQUFTLENBQUMsb0JBQW9CLEVBQUU7b0JBQzlCLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRTtvQkFDaEQsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQzFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO29CQUMxQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO2lCQUM1RCxDQUFDLENBQUM7Z0JBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25CLENBQUM7WUFDRCxRQUFRLEVBQUUsdUJBQXVCO1NBQ2xDLENBQUM7S0FDSCxDQUFDO0FBYkYsQ0FhRSxDQUNILENBQUM7QUFFRixxQkFBZSxVQUFFLENBQUM7SUFDaEIsT0FBQSxVQUFFLENBQUM7UUFDRCxFQUFFO1FBQ0YsaUJBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsdUJBQVUsRUFBRSxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsQ0FBQztLQUN2RSxDQUFDO0FBSEYsQ0FHRSxDQUNILENBQUMifQ==