/*! elementor - v3.6.7 - 03-07-2022 */
(()=>{"use strict";var __webpack_modules__=({"../assets/dev/js/admin/new-template/layout.js":
/*!*****************************************************!*\
  !*** ../assets/dev/js/admin/new-template/layout.js ***!
  \*****************************************************/
((module,__unused_webpack_exports,__webpack_require__)=>{var __=__webpack_require__(/*! @wordpress/i18n */"@wordpress/i18n")["__"];var NewTemplateView=__webpack_require__(/*! elementor-admin/new-template/view */"../assets/dev/js/admin/new-template/view.js");module.exports=elementorModules.common.views.modal.Layout.extend({getModalOptions:function getModalOptions(){return{id:'elementor-new-template-modal'};},getLogoOptions:function getLogoOptions(){return{title:__('New Template','elementor')};},initialize:function initialize(){elementorModules.common.views.modal.Layout.prototype.initialize.apply(this,arguments);this.showLogo();this.showContentView();},showContentView:function showContentView(){this.modalContent.show(new NewTemplateView());}});}),"../assets/dev/js/admin/new-template/view.js":
/*!***************************************************!*\
  !*** ../assets/dev/js/admin/new-template/view.js ***!
  \***************************************************/
((module)=>{module.exports=Marionette.ItemView.extend({id:'elementor-new-template-dialog-content',template:'#tmpl-elementor-new-template',ui:{},events:{},onRender:function onRender(){}});}),"@wordpress/i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
((module)=>{module.exports=wp.i18n;})});var __webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(cachedModule!==undefined){return cachedModule.exports;}
var module=__webpack_module_cache__[moduleId]={exports:{}};__webpack_modules__[moduleId](module,module.exports,__webpack_require__);return module.exports;}
var __webpack_exports__={};(()=>{
/*!***********************************************************!*\
  !*** ../assets/dev/js/admin/new-template/new-template.js ***!
  \***********************************************************/
var NewTemplateLayout=__webpack_require__(/*! elementor-admin/new-template/layout */"../assets/dev/js/admin/new-template/layout.js");var NewTemplateModule=elementorModules.ViewModule.extend({getDefaultSettings:function getDefaultSettings(){return{selectors:{addButton:'.page-title-action:first, #elementor-template-library-add-new'}};},getDefaultElements:function getDefaultElements(){var selectors=this.getSettings('selectors');return{$addButton:jQuery(selectors.addButton)};},bindEvents:function bindEvents(){this.elements.$addButton.on('click',this.onAddButtonClick);elementorCommon.elements.$window.on('hashchange',this.showModalByHash.bind(this));},showModalByHash:function showModalByHash(){if('#add_new'===location.hash){this.layout.showModal();location.hash='';}},onInit:function onInit(){elementorModules.ViewModule.prototype.onInit.apply(this,arguments);this.layout=new NewTemplateLayout();this.showModalByHash();},onAddButtonClick:function onAddButtonClick(event){event.preventDefault();this.layout.showModal();}});jQuery(function(){window.elementorNewTemplate=new NewTemplateModule();});})();})();