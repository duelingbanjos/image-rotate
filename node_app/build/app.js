"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var rotation_service_1 = require("./rotation.service");
var image_data_service_1 = require("./image_data.service");
var sizeOf = require("image-size");
var dimensions = sizeOf("miaow.jpeg");
var img_buffer = fs_1.default.readFileSync("miaow.jpeg");
var buf = new Uint8ClampedArray(img_buffer);
var to_rotate = new image_data_service_1.ImageData(dimensions.width, dimensions.height);
to_rotate.data.set(buf);
var rotationService = new rotation_service_1.RotationService();
var start = Date.now();
var rotated = rotationService.rotate(to_rotate, 360);
var end = Date.now();
console.log("__________________________________________________");
console.log("Rotate Operation Completed in " + (end - start) + " ms");
console.log("__________________________________________________");
console.log("Old Dimensions : h " + dimensions.height + ", w " + dimensions.width);
console.log("New Dimensions : h " + rotated.height + ", w " + rotated.width);
