define('@dcl/l2-scene-utils', ['exports', '@decentraland/EthereumController', '@decentraland/web3-provider', 'eth-connect', 'decentraland-transactions'], function (exports, EthereumController, web3Provider, eth, dclTx) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var eth__namespace = /*#__PURE__*/_interopNamespace(eth);
    var dclTx__namespace = /*#__PURE__*/_interopNamespace(dclTx);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var defaultServerURL = 'https://transactions-api.decentraland.org/v1';
    function createMANAComponent(_a) {
        var requestManager = _a.requestManager, metaRequestManager = _a.metaRequestManager, fromAddress = _a.fromAddress;
        function getContract() {
            return __awaiter(this, void 0, void 0, function () {
                var manaConfig, contract;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            manaConfig = dclTx__namespace.getContract(dclTx__namespace.ContractName.MANAToken, 137);
                            return [4 /*yield*/, new eth__namespace.ContractFactory(metaRequestManager, manaConfig.abi).at(manaConfig.address)];
                        case 1:
                            contract = _a.sent();
                            return [2 /*return*/, {
                                    manaConfig: manaConfig,
                                    contract: contract,
                                }];
                    }
                });
            });
        }
        function balance(from) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, contract, res;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, getContract()];
                        case 1:
                            _a = _b.sent(), contract = _a.contract;
                            return [4 /*yield*/, contract.balanceOf(from || fromAddress)];
                        case 2:
                            res = _b.sent();
                            return [2 /*return*/, res];
                    }
                });
            });
        }
        function allowance(spenderAddress, from) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, contract, res;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, getContract()];
                        case 1:
                            _a = _b.sent(), contract = _a.contract;
                            return [4 /*yield*/, contract.allowance(from || fromAddress, spenderAddress)];
                        case 2:
                            res = _b.sent();
                            return [2 /*return*/, res];
                    }
                });
            });
        }
        function approve(spenderAddress, amount, options) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, manaConfig, contract, functionHex, txHash;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, getContract()];
                        case 1:
                            _a = _b.sent(), manaConfig = _a.manaConfig, contract = _a.contract;
                            options = options || { serverURL: defaultServerURL };
                            options.serverURL = options.serverURL || defaultServerURL;
                            functionHex = contract.approve.toPayload(spenderAddress, amount || '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
                            return [4 /*yield*/, dclTx__namespace.sendMetaTransaction(requestManager, metaRequestManager, functionHex.data, manaConfig, { serverURL: options.serverURL })];
                        case 2:
                            txHash = _b.sent();
                            return [2 /*return*/, txHash];
                    }
                });
            });
        }
        function transfer(to, amount, options) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, manaConfig, contract, functionHex, txHash;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, getContract()];
                        case 1:
                            _a = _b.sent(), manaConfig = _a.manaConfig, contract = _a.contract;
                            options = options || { serverURL: defaultServerURL };
                            options.serverURL = options.serverURL || defaultServerURL;
                            functionHex = contract.transfer.toPayload(to, amount);
                            return [4 /*yield*/, dclTx__namespace.sendMetaTransaction(requestManager, metaRequestManager, functionHex.data, manaConfig, { serverURL: options.serverURL })];
                        case 2:
                            txHash = _b.sent();
                            return [2 /*return*/, txHash];
                    }
                });
            });
        }
        return { transfer: transfer, balance: balance, allowance: allowance, approve: approve };
    }

    function createComponents() {
        return __awaiter(this, void 0, void 0, function () {
            var provider, requestManager, metaProvider, fromAddress, metaRequestManager, providers, mana;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, web3Provider.getProvider()];
                    case 1:
                        provider = _a.sent();
                        requestManager = new eth__namespace.RequestManager(provider);
                        metaProvider = new eth__namespace.HTTPProvider('https://polygon-rpc.com');
                        return [4 /*yield*/, EthereumController.getUserAccount()];
                    case 2:
                        fromAddress = _a.sent();
                        metaRequestManager = new eth__namespace.RequestManager(metaProvider);
                        providers = {
                            requestManager: requestManager,
                            metaProvider: metaProvider,
                            metaRequestManager: metaRequestManager,
                            fromAddress: fromAddress,
                        };
                        return [4 /*yield*/, createMANAComponent(providers)];
                    case 3:
                        mana = _a.sent();
                        return [2 /*return*/, { mana: mana }];
                }
            });
        });
    }

    exports.createComponents = createComponents;

    Object.defineProperty(exports, '__esModule', { value: true });

});
//# sourceMappingURL=index.js.map
