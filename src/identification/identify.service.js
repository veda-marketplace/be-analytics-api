"use strict";
/**
 * Data Model Interfaces
 */
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
exports.identify = void 0;
/**
 * In-Memory Store
 */
const identityRes = {
    ipfsHash: "",
    ipfsUrl: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg",
    metadata: {
        modelVersion: "string",
        captionResult: {
            text: "string",
            confidence: 0.0,
        },
        denseCaptionsResult: {
            values: [
                {
                    text: "string",
                    confidence: 0.0,
                    boundingBox: {
                        x: 0,
                        y: 0,
                        w: 0,
                        h: 0,
                    },
                },
            ],
        },
        metadata: {
            width: 0,
            height: 0,
        },
        tagsResult: {
            values: [
                {
                    name: "string",
                    confidence: 0.0,
                },
            ],
        },
        objectsResult: {
            values: [
                {
                    id: "string",
                    boundingBox: {
                        x: 0,
                        y: 0,
                        w: 0,
                        h: 0,
                    },
                    tags: [
                        {
                            name: "string",
                            confidence: 0.0,
                        },
                    ],
                },
            ],
        },
        readResult: {
            blocks: [
                {
                    lines: [
                        {
                            text: "string",
                            boundingPolygon: [
                                {
                                    x: 0,
                                    y: 0,
                                },
                            ],
                            words: [
                                {
                                    text: "string",
                                    boundingPolygon: [
                                        {
                                            x: 0,
                                            y: 0,
                                        },
                                    ],
                                    confidence: 0.0,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        smartCropsResult: {
            values: [
                {
                    aspectRatio: 0.0,
                    boundingBox: {
                        x: 0,
                        y: 0,
                        w: 0,
                        h: 0,
                    },
                },
            ],
        },
        peopleResult: {
            values: [
                {
                    boundingBox: {
                        x: 0,
                        y: 0,
                        w: 0,
                        h: 0,
                    },
                    confidence: 0.0,
                },
            ],
        },
    },
};
/**
 * Service Methods
 */
const identify = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = Object.assign(Object.assign({}, identityRes), { ipfsUrl: url });
    return response;
});
exports.identify = identify;
