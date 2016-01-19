System.register(['angular2/core', './dj-detail/dj-detail.component', './dj-form/dj-form.component', './dj.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, dj_detail_component_1, dj_form_component_1, dj_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dj_detail_component_1_1) {
                dj_detail_component_1 = dj_detail_component_1_1;
            },
            function (dj_form_component_1_1) {
                dj_form_component_1 = dj_form_component_1_1;
            },
            function (dj_service_1_1) {
                dj_service_1 = dj_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_djService) {
                    this._djService = _djService;
                    this.title = 'Top DJs list of 2015';
                    this.openNewForm = false;
                }
                AppComponent.prototype.getDjs = function () {
                    var _this = this;
                    this._djService.getDjs().then(function (Djs) { return _this.Djs = Djs; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getDjs();
                };
                AppComponent.prototype.onSelect = function (dj) {
                    this.selectedDj = dj;
                };
                AppComponent.prototype.addNewDj = function () {
                    console.log("Open a new form!");
                    this.openNewForm = true;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/dj.html',
                        styleUrls: ['hero-style.css'],
                        directives: [dj_detail_component_1.DjDetailComponent, dj_form_component_1.DjFormComponent],
                        providers: [dj_service_1.DjService]
                    }), 
                    __metadata('design:paramtypes', [dj_service_1.DjService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map