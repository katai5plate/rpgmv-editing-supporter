"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.debug = exports.setMvClip = exports.getMvClip = exports.pk = exports.fc = exports.el = exports.genKey = void 0;
var react_1 = require("react");
var electron_1 = require("electron");
var react_2 = require("@testing-library/react");
var print = require("q-i").print;
var randomText = function () {
    var gen = function () {
        return Math.random()
            .toString(36)
            .slice(2, 5 + 2);
    };
    return __spreadArrays(gen(), gen().toLocaleUpperCase()).sort(function () { return Math.random() - 0.5; })
        .join("");
};
/** デフォルトで key はランダム生成する */
exports.genKey = function () { return ({
    key: randomText()
}); };
/** DOM を作る */
exports.el = function (type, attr) {
    var node = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        node[_i - 2] = arguments[_i];
    }
    return react_1.createElement.apply(void 0, __spreadArrays([type, __assign(__assign({}, exports.genKey()), attr)], node));
};
/** コンポーネントを作る */
exports.fc = function (fn) { return fn; };
/** コンポーネントをひとまとめにする */
exports.pk = function (node) {
    return react_1.createElement.apply(void 0, __spreadArrays([react_1.Fragment, exports.genKey()], node));
};
var getClipFormat = function (name) {
    return "" + (process.platform === "darwin"
        ? "com.trolltech.anymime.application--"
        : "application/") + name;
};
exports.getMvClip = function (name) {
    return JSON.parse(electron_1.clipboard.readBuffer(getClipFormat(name)).toString());
};
exports.setMvClip = function (name, data) {
    return electron_1.clipboard.writeBuffer(getClipFormat(name), Buffer.from(JSON.stringify(data)));
};
var clone = function (x, rep) {
    return JSON.parse(JSON.stringify(x), rep);
};
/** コンポーネントのデバッグ用 */
exports.debug = function (memo, element) {
    var debug = react_2.render(element, {
        baseElement: document.createElement("div")
    }).debug;
    console.group("DEBUG: " + memo);
    console.groupCollapsed("props");
    print(clone(clone(element), function (_, v) {
        try {
            delete v.ref;
            delete v._owner;
            delete v._store;
            if ("key" in v) {
                v.props.key = v.key;
                delete v.key;
            }
            v =
                v instanceof Array
                    ? v
                    : __assign(__assign({ "</>": v.type || "React.Fragment", key: "" }, v.props), { children: v.props.children });
            delete v.type;
            delete v.props;
        }
        catch (_a) { }
        return v;
    }));
    console.groupEnd();
    console.groupCollapsed("dom");
    debug();
    console.groupEnd();
    console.groupEnd();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBUWU7QUFDZixxQ0FBcUM7QUFDckMsZ0RBQWdEO0FBQ3hDLElBQUEsS0FBSyxHQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBbkIsQ0FBb0I7QUFXakMsSUFBTSxVQUFVLEdBQUc7SUFDakIsSUFBTSxHQUFHLEdBQUc7UUFDVixPQUFBLElBQUksQ0FBQyxNQUFNLEVBQUU7YUFDVixRQUFRLENBQUMsRUFBRSxDQUFDO2FBQ1osS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRmxCLENBRWtCLENBQUM7SUFDckIsT0FBTyxlQUFLLEdBQUcsRUFBVSxFQUFNLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixFQUFVLEVBQzdELElBQUksQ0FBQyxjQUFNLE9BQUEsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBbkIsQ0FBbUIsQ0FBQztTQUMvQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDZCxDQUFDLENBQUM7QUFDRiwyQkFBMkI7QUFDZCxRQUFBLE1BQU0sR0FBRyxjQUFNLE9BQUEsQ0FBQztJQUMzQixHQUFHLEVBQUUsVUFBVSxFQUFFO0NBQ2xCLENBQUMsRUFGMEIsQ0FFMUIsQ0FBQztBQUVILGNBQWM7QUFDRCxRQUFBLEVBQUUsR0FBRyxVQUNoQixJQUFtQyxFQUNuQyxJQUF3QjtJQUN4QixjQUFvQjtTQUFwQixVQUFvQixFQUFwQixxQkFBb0IsRUFBcEIsSUFBb0I7UUFBcEIsNkJBQW9COztJQUNqQixPQUFBLHFCQUFhLCtCQUFDLElBQVcsd0JBQU8sY0FBTSxFQUFFLEdBQUssSUFBSSxJQUFPLElBQUk7QUFBNUQsQ0FBNkQsQ0FBQztBQUNuRSxpQkFBaUI7QUFDSixRQUFBLEVBQUUsR0FBRyxVQUNoQixFQUF1RCxJQUNwRCxPQUFB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