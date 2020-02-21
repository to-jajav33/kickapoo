"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = require("./state");
const getters_1 = require("./getters");
const mutations_1 = require("./mutations");
const actions_1 = require("./actions");
exports.default = {
    namespaced: true,
    getters: getters_1.default,
    mutations: mutations_1.default,
    actions: actions_1.default,
    state: state_1.default
};
