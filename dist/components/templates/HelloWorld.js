"use strict";
exports.__esModule = true;
var utils_1 = require("../../utils");
var Version = utils_1.fc(function (props) {
    return utils_1.pk([
        //
        utils_1.el("span", { name: props.name }, process.versions[props.name]),
    ]);
});
exports["default"] = utils_1.fc(function () {
    return utils_1.pk([
        utils_1.el("h2", {}, "Hello World!"),
        "We are using Node.js ",
        Version({ name: "node" }),
        ", Chromium ",
        Version({ name: "chrome" }),
        ", and Electron ",
        Version({ name: "electron" }),
    ]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG9Xb3JsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9IZWxsb1dvcmxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXlDO0FBRXpDLElBQU0sT0FBTyxHQUFHLFVBQUUsQ0FBbUIsVUFBQyxLQUFLO0lBQ3pDLE9BQUEsVUFBRSxDQUFDO1FBQ0QsRUFBRTtRQUNGLFVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFHLE9BQU8sQ0FBQyxRQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN4RSxDQUFDO0FBSEYsQ0FHRSxDQUNILENBQUM7QUFFRixxQkFBZSxVQUFFLENBQUM7SUFDaEIsT0FBQSxVQUFFLENBQUM7UUFDRCxVQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxjQUFjLENBQUM7UUFDNUIsdUJBQXVCO1FBQ3ZCLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUN6QixhQUFhO1FBQ2IsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQzNCLGlCQUFpQjtRQUNqQixPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7S0FDOUIsQ0FBQztBQVJGLENBUUUsQ0FDSCxDQUFDIn0=