"use strict";exports.id=346,exports.ids=[346],exports.modules={26346:(t,n,r)=>{r.d(n,{validateOrReject:()=>E});var e,i,a=function(){function t(){}return t.prototype.toString=function(t,n,r,e){var i=this;void 0===t&&(t=!1),void 0===n&&(n=!1),void 0===r&&(r=""),void 0===e&&(e=!1);var a=t?"\x1b[1m":"",o=t?"\x1b[22m":"",s=function(){var t;return(e?Object.values:Object.keys)(null!==(t=i.constraints)&&void 0!==t?t:{}).join(", ")},c=function(t){return" - property ".concat(a).concat(r).concat(t).concat(o," has failed the following constraints: ").concat(a).concat(s()).concat(o," \n")};if(!n)return"An instance of ".concat(a).concat(this.target?this.target.constructor.name:"an object").concat(o," has failed the validation:\n")+(this.constraints?c(this.property):"")+(this.children?this.children.map(function(n){return n.toString(t,!0,i.property,e)}).join(""):"");var l=Number.isInteger(+this.property)?"[".concat(this.property,"]"):"".concat(r?".":"").concat(this.property);return this.constraints?c(l):this.children?this.children.map(function(n){return n.toString(t,!0,"".concat(r).concat(l),e)}).join(""):""},t}(),o=function(){function t(){}return t.isValid=function(t){var n=this;return"isValid"!==t&&"getMessage"!==t&&-1!==Object.keys(this).map(function(t){return n[t]}).indexOf(t)},t.CUSTOM_VALIDATION="customValidation",t.NESTED_VALIDATION="nestedValidation",t.PROMISE_VALIDATION="promiseValidation",t.CONDITIONAL_VALIDATION="conditionalValidation",t.WHITELIST="whitelistValidation",t.IS_DEFINED="isDefined",t}(),s=function(){function t(){}return t.replaceMessageSpecialTokens=function(t,n){var r;return t instanceof Function?r=t(n):"string"==typeof t&&(r=t),r&&Array.isArray(n.constraints)&&n.constraints.forEach(function(t,n){var e;r=r.replace(RegExp("\\$constraint".concat(n+1),"g"),Array.isArray(e=t)?e.join(", "):("symbol"==typeof e&&(e=e.description),"".concat(e)))}),r&&void 0!==n.value&&null!==n.value&&["string","boolean","number"].includes(typeof n.value)&&(r=r.replace(/\$value/g,n.value)),r&&(r=r.replace(/\$property/g,n.property)),r&&(r=r.replace(/\$target/g,n.targetName)),r},t}();function c(t){return null!==t&&"object"==typeof t&&"function"==typeof t.then}var l=function(t){this.groups=[],this.each=!1,this.context=void 0,this.type=t.type,this.name=t.name,this.target=t.target,this.propertyName=t.propertyName,this.constraints=null==t?void 0:t.constraints,this.constraintCls=t.constraintCls,this.validationTypeOptions=t.validationTypeOptions,t.validationOptions&&(this.message=t.validationOptions.message,this.groups=t.validationOptions.groups,this.always=t.validationOptions.always,this.each=t.validationOptions.each,this.context=t.validationOptions.context)},u=function(){function t(){}return t.prototype.transform=function(t){var n=[];return Object.keys(t.properties).forEach(function(r){t.properties[r].forEach(function(e){var i={message:e.message,groups:e.groups,always:e.always,each:e.each},a={type:e.type,name:e.name,target:t.name,propertyName:r,constraints:e.constraints,validationTypeOptions:e.options,validationOptions:i};n.push(new l(a))})}),n},t}(),p=function(t){var n="function"==typeof Symbol&&Symbol.iterator,r=n&&t[n],e=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&e>=t.length&&(t=void 0),{value:t&&t[e++],done:!t}}};throw TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},d=function(t,n){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var e,i,a=r.call(t),o=[];try{for(;(void 0===n||n-- >0)&&!(e=a.next()).done;)o.push(e.value)}catch(t){i={error:t}}finally{try{e&&!e.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o},f=function(t,n,r){if(r||2==arguments.length)for(var e,i=0,a=n.length;i<a;i++)!e&&i in n||(e||(e=Array.prototype.slice.call(n,0,i)),e[i]=n[i]);return t.concat(e||Array.prototype.slice.call(n))},h=function(){function t(){this.validationMetadatas=new Map,this.constraintMetadatas=new Map}return Object.defineProperty(t.prototype,"hasValidationMetaData",{get:function(){return!!this.validationMetadatas.size},enumerable:!1,configurable:!0}),t.prototype.addValidationSchema=function(t){var n=this;new u().transform(t).forEach(function(t){return n.addValidationMetadata(t)})},t.prototype.addValidationMetadata=function(t){var n=this.validationMetadatas.get(t.target);n?n.push(t):this.validationMetadatas.set(t.target,[t])},t.prototype.addConstraintMetadata=function(t){var n=this.constraintMetadatas.get(t.target);n?n.push(t):this.constraintMetadatas.set(t.target,[t])},t.prototype.groupByPropertyName=function(t){var n={};return t.forEach(function(t){n[t.propertyName]||(n[t.propertyName]=[]),n[t.propertyName].push(t)}),n},t.prototype.getTargetValidationMetadatas=function(t,n,r,e,i){var a,o,s=function(t){return void 0!==t.always?t.always:(!t.groups||!t.groups.length)&&r},c=function(t){return!!e&&(!i||!i.length)&&!!t.groups&&!!t.groups.length},l=(this.validationMetadatas.get(t)||[]).filter(function(r){return(r.target===t||r.target===n)&&(!!s(r)||!c(r)&&(!i||!(i.length>0)||r.groups&&!!r.groups.find(function(t){return -1!==i.indexOf(t)})))}),u=[];try{for(var h=p(this.validationMetadatas.entries()),v=h.next();!v.done;v=h.next()){var y=d(v.value,2),g=y[0],m=y[1];t.prototype instanceof g&&u.push.apply(u,f([],d(m),!1))}}catch(t){a={error:t}}finally{try{v&&!v.done&&(o=h.return)&&o.call(h)}finally{if(a)throw a.error}}var O=u.filter(function(n){return"string"!=typeof n.target&&n.target!==t&&(!(n.target instanceof Function)||t.prototype instanceof n.target)&&(!!s(n)||!c(n)&&(!i||!(i.length>0)||n.groups&&!!n.groups.find(function(t){return -1!==i.indexOf(t)})))}).filter(function(t){return!l.find(function(n){return n.propertyName===t.propertyName&&n.type===t.type})});return l.concat(O)},t.prototype.getTargetValidatorConstraints=function(t){return this.constraintMetadatas.get(t)||[]},t}(),v=function(t,n){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var e,i,a=r.call(t),o=[];try{for(;(void 0===n||n-- >0)&&!(e=a.next()).done;)o.push(e.value)}catch(t){i={error:t}}finally{try{e&&!e.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o},y=function(){function t(t,n){var r;this.validator=t,this.validatorOptions=n,this.awaitingPromises=[],this.ignoreAsyncValidations=!1,this.metadataStorage=((r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:void 0).classValidatorMetadataStorage||(r.classValidatorMetadataStorage=new h),r.classValidatorMetadataStorage)}return t.prototype.execute=function(t,n,r){var e,i,s=this;this.metadataStorage.hasValidationMetaData||(null===(e=this.validatorOptions)||void 0===e?void 0:e.enableDebugMessages)!==!0||console.warn("No validation metadata found. No validation will be  performed. There are multiple possible reasons:\n  - There may be multiple class-validator versions installed. You will need to flatten your dependencies to fix the issue.\n  - This validation runs before any file with validation decorator was parsed by NodeJS.");var c=this.validatorOptions?this.validatorOptions.groups:void 0,l=this.validatorOptions&&this.validatorOptions.strictGroups||!1,u=this.validatorOptions&&this.validatorOptions.always||!1,p=(null===(i=this.validatorOptions)||void 0===i?void 0:i.forbidUnknownValues)===void 0||!1!==this.validatorOptions.forbidUnknownValues,d=this.metadataStorage.getTargetValidationMetadatas(t.constructor,n,u,l,c),f=this.metadataStorage.groupByPropertyName(d);if(this.validatorOptions&&p&&!d.length){var h=new a;this.validatorOptions&&this.validatorOptions.validationError&&void 0!==this.validatorOptions.validationError.target&&!0!==this.validatorOptions.validationError.target||(h.target=t),h.value=void 0,h.property=void 0,h.children=[],h.constraints={unknownValue:"an unknown value was passed to the validate function"},r.push(h);return}this.validatorOptions&&this.validatorOptions.whitelist&&this.whitelist(t,f,r),Object.keys(f).forEach(function(n){var e=t[n],i=f[n].filter(function(t){return t.type===o.IS_DEFINED}),a=f[n].filter(function(t){return t.type!==o.IS_DEFINED&&t.type!==o.WHITELIST});e instanceof Promise&&a.find(function(t){return t.type===o.PROMISE_VALIDATION})?s.awaitingPromises.push(e.then(function(e){s.performValidations(t,e,n,i,a,r)})):s.performValidations(t,e,n,i,a,r)})},t.prototype.whitelist=function(t,n,r){var e=this,i=[];Object.keys(t).forEach(function(t){n[t]&&0!==n[t].length||i.push(t)}),i.length>0&&(this.validatorOptions&&this.validatorOptions.forbidNonWhitelisted?i.forEach(function(n){var i,a=e.generateValidationError(t,t[n],n);a.constraints=((i={})[o.WHITELIST]="property ".concat(n," should not exist"),i),a.children=void 0,r.push(a)}):i.forEach(function(n){return delete t[n]}))},t.prototype.stripEmptyErrors=function(t){var n=this;return t.filter(function(t){if(t.children&&(t.children=n.stripEmptyErrors(t.children)),0===Object.keys(t.constraints).length){if(0===t.children.length)return!1;delete t.constraints}return!0})},t.prototype.performValidations=function(t,n,r,e,i,a){var s=i.filter(function(t){return t.type===o.CUSTOM_VALIDATION}),c=i.filter(function(t){return t.type===o.NESTED_VALIDATION}),l=i.filter(function(t){return t.type===o.CONDITIONAL_VALIDATION}),u=this.generateValidationError(t,n,r);a.push(u),this.conditionalValidations(t,n,l)&&(this.customValidations(t,n,e,u),this.mapContexts(t,n,e,u),void 0===n&&this.validatorOptions&&!0===this.validatorOptions.skipUndefinedProperties||null===n&&this.validatorOptions&&!0===this.validatorOptions.skipNullProperties||null==n&&this.validatorOptions&&!0===this.validatorOptions.skipMissingProperties||(this.customValidations(t,n,s,u),this.nestedValidations(n,c,u),this.mapContexts(t,n,i,u),this.mapContexts(t,n,s,u)))},t.prototype.generateValidationError=function(t,n,r){var e=new a;return this.validatorOptions&&this.validatorOptions.validationError&&void 0!==this.validatorOptions.validationError.target&&!0!==this.validatorOptions.validationError.target||(e.target=t),this.validatorOptions&&this.validatorOptions.validationError&&void 0!==this.validatorOptions.validationError.value&&!0!==this.validatorOptions.validationError.value||(e.value=n),e.property=r,e.children=[],e.constraints={},e},t.prototype.conditionalValidations=function(t,n,r){return r.map(function(r){return r.constraints[0](t,n)}).reduce(function(t,n){return t&&n},!0)},t.prototype.customValidations=function(t,n,r,e){var i=this;r.forEach(function(r){i.metadataStorage.getTargetValidatorConstraints(r.constraintCls).forEach(function(a){if((!a.async||!i.ignoreAsyncValidations)&&(!i.validatorOptions||!i.validatorOptions.stopAtFirstError||!(Object.keys(e.constraints||{}).length>0))){var o={targetName:t.constructor?t.constructor.name:void 0,property:r.propertyName,object:t,value:n,constraints:r.constraints};if(!r.each||!(Array.isArray(n)||n instanceof Set||n instanceof Map)){var s=a.instance.validate(n,o);if(c(s)){var l=s.then(function(o){if(!o){var s=v(i.createValidationError(t,n,r,a),2),c=s[0],l=s[1];e.constraints[c]=l,r.context&&(e.contexts||(e.contexts={}),e.contexts[c]=Object.assign(e.contexts[c]||{},r.context))}});i.awaitingPromises.push(l)}else if(!s){var u=v(i.createValidationError(t,n,r,a),2),p=u[0],d=u[1];e.constraints[p]=d}return}var f=(n instanceof Map?Array.from(n.values()):Array.isArray(n)?n:Array.from(n)).map(function(t){return a.instance.validate(t,o)});if(f.some(function(t){return c(t)})){var h=Promise.all(f.map(function(t){return c(t)?t:Promise.resolve(t)})).then(function(o){if(!o.every(function(t){return t})){var s=v(i.createValidationError(t,n,r,a),2),c=s[0],l=s[1];e.constraints[c]=l,r.context&&(e.contexts||(e.contexts={}),e.contexts[c]=Object.assign(e.contexts[c]||{},r.context))}});i.awaitingPromises.push(h);return}if(!f.every(function(t){return t})){var y=v(i.createValidationError(t,n,r,a),2),p=y[0],d=y[1];e.constraints[p]=d}}})})},t.prototype.nestedValidations=function(t,n,r){var e=this;void 0!==t&&n.forEach(function(i){if((i.type===o.NESTED_VALIDATION||i.type===o.PROMISE_VALIDATION)&&(!e.validatorOptions||!e.validatorOptions.stopAtFirstError||!(Object.keys(r.constraints||{}).length>0))){if(Array.isArray(t)||t instanceof Set||t instanceof Map)(t instanceof Set?Array.from(t):t).forEach(function(i,a){e.performValidations(t,i,a.toString(),[],n,r.children)});else if(t instanceof Object){var a="string"==typeof i.target?i.target:i.target.name;e.execute(t,a,r.children)}else{var s=v(e.createValidationError(i.target,t,i),2),c=s[0],l=s[1];r.constraints[c]=l}}})},t.prototype.mapContexts=function(t,n,r,e){var i=this;return r.forEach(function(t){if(t.context){var n=void 0;t.type===o.CUSTOM_VALIDATION&&(n=i.metadataStorage.getTargetValidatorConstraints(t.constraintCls)[0]);var r=i.getConstraintType(t,n);e.constraints[r]&&(e.contexts||(e.contexts={}),e.contexts[r]=Object.assign(e.contexts[r]||{},t.context))}})},t.prototype.createValidationError=function(t,n,r,e){var i=t.constructor?t.constructor.name:void 0,a=this.getConstraintType(r,e),o={targetName:i,property:r.propertyName,object:t,value:n,constraints:r.constraints},c=r.message||"";return!r.message&&(!this.validatorOptions||this.validatorOptions&&!this.validatorOptions.dismissDefaultMessages)&&e&&e.instance.defaultMessage instanceof Function&&(c=e.instance.defaultMessage(o)),[a,s.replaceMessageSpecialTokens(c,o)]},t.prototype.getConstraintType=function(t,n){return n&&n.name?n.name:t.type},t}(),g=function(t,n){var r,e,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(c){return function(s){if(r)throw TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(o=0)),o;)try{if(r=1,e&&(i=2&s[0]?e.return:s[0]?e.throw||((i=e.return)&&i.call(e),0):e.next)&&!(i=i.call(e,s[1])).done)return i;switch(e=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,e=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=n.call(t,o)}catch(t){s=[6,t],e=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},m=function(){function t(){}return t.prototype.validate=function(t,n,r){return this.coreValidate(t,n,r)},t.prototype.validateOrReject=function(t,n,r){var e,i,a,o;return e=this,i=void 0,a=void 0,o=function(){var e;return g(this,function(i){switch(i.label){case 0:return[4,this.coreValidate(t,n,r)];case 1:if((e=i.sent()).length)return[2,Promise.reject(e)];return[2]}})},new(a||(a=Promise))(function(t,n){function r(t){try{c(o.next(t))}catch(t){n(t)}}function s(t){try{c(o.throw(t))}catch(t){n(t)}}function c(n){var e;n.done?t(n.value):((e=n.value)instanceof a?e:new a(function(t){t(e)})).then(r,s)}c((o=o.apply(e,i||[])).next())})},t.prototype.validateSync=function(t,n,r){var e="string"==typeof t?n:t,i="string"==typeof t?t:void 0,a=new y(this,"string"==typeof t?r:n);a.ignoreAsyncValidations=!0;var o=[];return a.execute(e,i,o),a.stripEmptyErrors(o)},t.prototype.coreValidate=function(t,n,r){var e="string"==typeof t?n:t,i="string"==typeof t?r:n,a="string"==typeof t?t:void 0,o=new y(this,i),s=[];return o.execute(e,a,s),Promise.all(o.awaitingPromises).then(function(){return o.stripEmptyErrors(s)})},t}(),O=new(function(){function t(){this.instances=[]}return t.prototype.get=function(t){var n=this.instances.find(function(n){return n.type===t});return n||(n={type:t,object:new t},this.instances.push(n)),n.object},t}());function b(t){if(e)try{var n=e.get(t);if(n||!i||!i.fallback)return n}catch(t){if(!i||!i.fallbackOnErrors)throw t}return O.get(t)}function E(t,n,r){return"string"==typeof t?b(m).validateOrReject(t,n,r):b(m).validateOrReject(t,n)}}};