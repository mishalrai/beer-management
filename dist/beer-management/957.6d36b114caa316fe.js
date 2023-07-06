"use strict";(self.webpackChunkbeer_management=self.webpackChunkbeer_management||[]).push([[957],{8957:(G,f,d)=>{d.r(f),d.d(f,{MyBeersModule:()=>D});var g=d(6814),C=d(594),a=d(95),s=d(2494),v=d(8645),y=d(9773),h=d(8180),e=d(5879),b=d(8062),B=d(8182),M=d(6593);function x(n,i){if(1&n&&(e.TgZ(0,"div",11),e._UZ(1,"img",12),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("src",t.imgUrl,e.LSH)}}function A(n,i){1&n&&(e.TgZ(0,"div",14),e._uU(1," Beer name is required "),e.qZA())}function T(n,i){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,A,2,0,"div",13),e.qZA()),2&n){const t=e.oxw();let o;e.xp6(1),e.Q6J("ngIf",null==(o=t.form.get("name"))||null==o.errors?null:o.errors.required)}}function Z(n,i){1&n&&(e.TgZ(0,"div",14),e._uU(1," Genre is required "),e.qZA())}function w(n,i){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,Z,2,0,"div",13),e.qZA()),2&n){const t=e.oxw();let o;e.xp6(1),e.Q6J("ngIf",null==(o=t.form.get("genre"))||null==o.errors?null:o.errors.required)}}function S(n,i){1&n&&(e.TgZ(0,"div",14),e._uU(1," Description is required "),e.qZA())}function F(n,i){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,S,2,0,"div",13),e.qZA()),2&n){const t=e.oxw();let o;e.xp6(1),e.Q6J("ngIf",null==(o=t.form.get("description"))||null==o.errors?null:o.errors.required)}}let I=(()=>{class n{constructor(t,o){this.fb=t,this.sanitizer=o,this.imgUrl="",this.disabledSubmitButton=!1,this.onSubmit=new e.vpe,this.onCancel=new e.vpe,this.form=this.fb.group({name:["",a.kI.required],genre:["",a.kI.required],description:["",a.kI.required]})}handleSubmit(){if(this.form.valid&&!this.disabledSubmitButton){const t=this.form.value,o=this.sanitizeInput(t.genre),r={id:(new Date).getTime(),name:this.sanitizeInput(t.name),image_url:this.imgUrl,tagline:o,description:this.sanitizeInput(t.description),tooltipText:o};this.onSubmit.emit(r)}}sanitizeInput(t){return t.replace(/[^\w\s]/gi,"")}handleCancel(t){t.preventDefault(),this.onCancel.emit()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.qu),e.Y36(M.H7))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-add-beer-form"]],inputs:{imgUrl:"imgUrl",disabledSubmitButton:"disabledSubmitButton"},outputs:{onSubmit:"onSubmit",onCancel:"onCancel"},decls:17,vars:13,consts:[[1,"add-user-form",3,"formGroup","ngSubmit"],["addBeerForm","ngForm"],["class","add-user-form__image mb-4",4,"ngIf"],[1,"mb-3"],["type","text","id","name","placeholder","Beer name*","formControlName","name",1,"form-control"],[4,"ngIf"],["type","text","name","genre","placeholder","Genre*","formControlName","genre","id","genre",1,"form-control"],["name","description","placeholder","Description*","formControlName","description","cols","20","id","description",1,"form-control"],[1,"add-user-form__button-group","mt-4"],[1,"ui-button-text","me-2",3,"click"],[1,"ui-button",3,"buttonType","disabled"],[1,"add-user-form__image","mb-4"],["height","80","alt","Beer image",3,"src"],["class","invalid-feedback d-block",4,"ngIf"],[1,"invalid-feedback","d-block"]],template:function(t,o){if(1&t&&(e.TgZ(0,"form",0,1),e.NdJ("ngSubmit",function(){return o.handleSubmit()}),e.YNc(2,x,2,1,"div",2),e.TgZ(3,"div",3),e._UZ(4,"input",4),e.YNc(5,T,2,1,"div",5),e.qZA(),e.TgZ(6,"div",3),e._UZ(7,"input",6),e.YNc(8,w,2,1,"div",5),e.qZA(),e.TgZ(9,"div"),e._UZ(10,"textarea",7),e.YNc(11,F,2,1,"div",5),e.qZA(),e.TgZ(12,"div",8)(13,"ui-button",9),e.NdJ("click",function(l){return o.handleCancel(l)}),e._uU(14," Cancel "),e.qZA(),e.TgZ(15,"ui-button",10),e._uU(16," Save "),e.qZA()()()),2&t){const r=e.MAs(1);let l,m,u,c,p,_;e.Q6J("formGroup",o.form),e.xp6(2),e.Q6J("ngIf",o.imgUrl),e.xp6(2),e.ekj("is-invalid",r.submitted&&(null==(l=o.form.get("name"))?null:l.invalid)||(null==(l=o.form.get("name"))?null:l.touched)&&(null==(l=o.form.get("name"))?null:l.invalid)),e.xp6(1),e.Q6J("ngIf",r.submitted||(null==(m=o.form.get("name"))?null:m.touched)&&(null==(m=o.form.get("name"))?null:m.invalid)),e.xp6(2),e.ekj("is-invalid",r.submitted&&(null==(u=o.form.get("genre"))?null:u.invalid)||(null==(u=o.form.get("genre"))?null:u.touched)&&(null==(u=o.form.get("genre"))?null:u.invalid)),e.xp6(1),e.Q6J("ngIf",r.submitted&&(null==(c=o.form.get("genre"))?null:c.invalid)||(null==(c=o.form.get("genre"))?null:c.touched)&&(null==(c=o.form.get("genre"))?null:c.invalid)),e.xp6(2),e.ekj("is-invalid",r.submitted&&(null==(p=o.form.get("description"))?null:p.invalid)||(null==(p=o.form.get("description"))?null:p.touched)&&(null==(p=o.form.get("description"))?null:p.invalid)),e.xp6(1),e.Q6J("ngIf",r.submitted&&(null==(_=o.form.get("description"))?null:_.invalid)||(null==(_=o.form.get("description"))?null:_.touched)&&(null==(_=o.form.get("description"))?null:_.invalid)),e.xp6(4),e.Q6J("buttonType","submit")("disabled",o.disabledSubmitButton)}},dependencies:[g.O5,s.r0,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u],styles:[".add-user-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:45px}.add-user-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:120px}.add-user-form__image[_ngcontent-%COMP%]{width:100px;height:100px;display:flex;justify-content:center;align-items:center;border:1px solid #ddd}.add-user-form__button-group[_ngcontent-%COMP%]{display:flex;justify-content:right}"]}),n})();const J=["*"];let N=(()=>{class n{constructor(){this.title=""}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-modal"]],inputs:{title:"title"},ngContentSelectors:J,decls:5,vars:1,consts:[[1,"modal-header"],[1,"modal-title"],[1,"modal-body"]],template:function(t,o){1&t&&(e.F$t(),e.TgZ(0,"div",0)(1,"h4",1),e._uU(2),e.qZA()(),e.TgZ(3,"div",2),e.Hsn(4),e.qZA()),2&t&&(e.xp6(2),e.Oqu(o.title))},styles:[".modal-body[_ngcontent-%COMP%]{padding:0 2rem 2rem}.modal-header[_ngcontent-%COMP%]{padding:1.5rem 2rem;border:none}"]}),n})();const q=["beerModal"];function U(n,i){if(1&n&&e._UZ(0,"ui-loader",5),2&n){const t=e.oxw();e.Q6J("text",t.loaderText)}}function Q(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"ui-card",10),e.NdJ("onDelete",function(r){e.CHM(t);const l=e.oxw(3);return e.KtG(l.delete(r))}),e.qZA()}2&n&&e.Q6J("item",i.$implicit)("showActions",!0)}function O(n,i){if(1&n&&(e.TgZ(0,"ui-card-list",8),e.YNc(1,Q,1,2,"ng-template",null,9,e.W1O),e.qZA()),2&n){const t=e.oxw(2);e.Q6J("items",t.beers)}}function Y(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"ui-add-new",11),e.NdJ("onAddNew",function(){e.CHM(t);const r=e.oxw(2),l=e.MAs(6);return e.KtG(r.openModal(l))}),e.qZA()}}function E(n,i){if(1&n&&(e.ynx(0),e.YNc(1,O,3,1,"ui-card-list",6),e.YNc(2,Y,1,0,"ng-template",null,7,e.W1O),e.BQk()),2&n){const t=e.MAs(3),o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.beers.length)("ngIfElse",t)}}function k(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"app-modal",12)(1,"app-add-beer-form",13),e.NdJ("onCancel",function(){const l=e.CHM(t).$implicit;return e.KtG(l.close())})("onSubmit",function(r){const m=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.addNewBeer(r,m))}),e.qZA()()}if(2&n){const t=e.oxw();e.Q6J("title",t.modalTitle),e.xp6(1),e.Q6J("imgUrl",t.BEER_IMG)("disabledSubmitButton",t.isAdding)}}const P=[{path:"",component:(()=>{class n{constructor(t,o,r){this.modalService=t,this.beerService=o,this.toastService=r,this.modalTitle="Add a New Beer",this.loaderText="Fetching Beers",this.isFetching=!1,this.isAdding=!1,this.beers=[],this.BEER_IMG="https://raw.githubusercontent.com/mishalrai/beer-management/master/cdn/img/beer.png",this.deleteConfirmMessage="Are you sure you want to delete?",this.onDestroy=new v.x}ngOnInit(){this.isFetching=!0,this.FetchAllBeers()}ngOnDestroy(){this.onDestroy.next(),this.onDestroy.complete()}openModal(t){this.modalService.open(t,{ariaLabelledBy:"modal-basic-title"})}FetchAllBeers(){this.beerService.getMyAll().pipe((0,y.R)(this.onDestroy)).subscribe({next:t=>{t&&(this.beers=t),this.isFetching=!1},error:()=>{this.isFetching=!1,this.toastService.show({body:"Apologies, we encountered an issue while fetching the beers. Please try again later.",type:s.pC.Error})}})}addNewBeer(t,o){this.isAdding=!0,this.beerService.save(t).pipe((0,h.q)(1)).subscribe({next:()=>{this.isAdding=!1,o.close(),this.toastService.show({body:"Cheers! The beer has been added successfully. Enjoy!",type:s.pC.Success})},error:()=>{this.isAdding=!1,this.toastService.show({body:"Oops! We encountered a problem while trying to add the beer. Please try again later.",type:s.pC.Error})}})}delete(t){confirm(this.deleteConfirmMessage)&&this.beerService.delete(t).pipe((0,h.q)(1)).subscribe({next:()=>{this.toastService.show({body:"The beer has been deleted successfully. ",type:s.pC.Success})},error:o=>{this.toastService.show({body:"Uh-oh! We encountered a problem while trying to delete the beer. Please try again later.",type:s.pC.Error})}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(b.FF),e.Y36(B._),e.Y36(s.kl))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-my-beers"]],contentQueries:function(t,o,r){if(1&t&&e.Suo(r,q,5),2&t){let l;e.iGM(l=e.CRH())&&(o.beerModal=l.first)}},decls:7,vars:2,consts:[[1,"add-new-wrapper"],[1,"ui-button",3,"onClicked"],[3,"text",4,"ngIf"],[4,"ngIf"],["addBeerModal",""],[3,"text"],[3,"items",4,"ngIf","ngIfElse"],["addNewBeerBox",""],[3,"items"],["card",""],[3,"item","showActions","onDelete"],[1,"mb-5","d-block",3,"onAddNew"],[3,"title"],[3,"imgUrl","disabledSubmitButton","onCancel","onSubmit"]],template:function(t,o){if(1&t){const r=e.EpF();e.TgZ(0,"div",0)(1,"ui-button",1),e.NdJ("onClicked",function(){e.CHM(r);const m=e.MAs(6);return e.KtG(o.openModal(m))}),e._uU(2,"Add a new beer"),e.qZA(),e.YNc(3,U,1,1,"ui-loader",2),e.YNc(4,E,4,2,"ng-container",3),e.qZA(),e.YNc(5,k,2,3,"ng-template",null,4,e.W1O)}2&t&&(e.xp6(3),e.Q6J("ngIf",o.isFetching),e.xp6(1),e.Q6J("ngIf",!o.isFetching))},dependencies:[g.O5,s.Ak,s.Do,s.rf,s.r0,s.RW,I,N],styles:[".add-new-wrapper[_ngcontent-%COMP%]{position:relative}.add-new-wrapper[_ngcontent-%COMP%]   ui-button[_ngcontent-%COMP%]{position:absolute;right:0;bottom:calc(100% + 18px)}"]}),n})()}];let D=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.ez,C.Bz.forChild(P),s.dT,s.qI,s.hJ,a.UX,s.q,b.aE]}),n})()}}]);