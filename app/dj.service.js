System.register(['./mock-djs', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_djs_1, core_1;
    var DjService;
    return {
        setters:[
            function (mock_djs_1_1) {
                mock_djs_1 = mock_djs_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DjService = (function () {
                function DjService() {
                }
                DjService.prototype.getDjs = function () {
                    return Promise.resolve(mock_djs_1.Djs);
                };
                DjService.prototype.getDjsSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_djs_1.Djs); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                DjService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DjService);
                return DjService;
            })();
            exports_1("DjService", DjService);
        }
    }
});
//# sourceMappingURL=dj.service.js.map