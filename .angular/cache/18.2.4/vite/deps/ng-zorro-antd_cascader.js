import {
  NzHighlightModule,
  NzHighlightPipe
} from "./chunk-D4W2AA6U.js";
import {
  NzEmbedEmptyComponent,
  NzEmptyModule
} from "./chunk-UP24WSWS.js";
import {
  NzI18nService
} from "./chunk-AW563NQB.js";
import "./chunk-BGDIO5TJ.js";
import "./chunk-3WYYODMS.js";
import {
  NzFormItemFeedbackIconComponent,
  NzFormNoStatusService,
  NzFormPatchModule,
  NzFormStatusService
} from "./chunk-VZ3BGV6T.js";
import {
  DEFAULT_CASCADER_POSITIONS,
  NzConnectedOverlayDirective,
  NzOverlayModule
} from "./chunk-BCYOJ3UZ.js";
import {
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  OverlayModule
} from "./chunk-XI7VEGUO.js";
import "./chunk-DXE2WUUP.js";
import {
  BACKSPACE,
  DOWN_ARROW,
  ENTER,
  ESCAPE,
  LEFT_ARROW,
  RIGHT_ARROW,
  UP_ARROW
} from "./chunk-H6BS5YIL.js";
import {
  NzNoAnimationDirective
} from "./chunk-IONSZQDY.js";
import "./chunk-WQ525UJX.js";
import {
  slideMotion
} from "./chunk-54OBER76.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-W6APIEEI.js";
import {
  NzDestroyService
} from "./chunk-7LXHVVG6.js";
import "./chunk-3QE43MPJ.js";
import "./chunk-JZCPY7PP.js";
import "./chunk-EGMBOB77.js";
import "./chunk-5BTNXY5M.js";
import "./chunk-VVGJMXEK.js";
import {
  Dir,
  Directionality
} from "./chunk-XWIMTWPL.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-5OZDTYGQ.js";
import {
  _getEventTarget
} from "./chunk-6J2XKIGV.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-2FEUNJXP.js";
import {
  arraysEqual,
  getStatusClassNames,
  isNotNil,
  toArray
} from "./chunk-47CTGUNN.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-EHVDKNZH.js";
import "./chunk-I4DYOS6L.js";
import "./chunk-XIHA2QPQ.js";
import {
  NgClass,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-WKHAHOQ5.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  ViewChild,
  ViewChildren,
  ViewEncapsulation$1,
  booleanAttribute,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-UPQVIRVK.js";
import "./chunk-SUGG24LA.js";
import {
  fromEvent
} from "./chunk-AKSWV4DA.js";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subject,
  distinctUntilChanged,
  finalize,
  from,
  map,
  of,
  startWith,
  switchMap,
  takeUntil,
  withLatestFrom
} from "./chunk-6NJUVM7P.js";
import {
  __decorate
} from "./chunk-G7KAN2P5.js";
import "./chunk-AIZRGZFI.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-cascader.mjs
var _c0 = ["nz-cascader-option", ""];
var _c1 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function NzCascaderOptionComponent_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function NzCascaderOptionComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzCascaderOptionComponent_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.optionTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c1, ctx_r0.option, ctx_r0.columnIndex));
  }
}
function NzCascaderOptionComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 1);
    ɵɵpipe(1, "nzHighlight");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ɵɵpipeBind4(1, 1, ctx_r0.optionLabel, ctx_r0.highlightText, "g", "ant-cascader-menu-item-keyword"), ɵɵsanitizeHtml);
  }
}
function NzCascaderOptionComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 3);
  }
}
function NzCascaderOptionComponent_Conditional_2_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("nzType", ctx_r0.expandIcon);
  }
}
function NzCascaderOptionComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzCascaderOptionComponent_Conditional_2_Conditional_2_ng_container_0_Template, 2, 1, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.expandIcon);
  }
}
function NzCascaderOptionComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, NzCascaderOptionComponent_Conditional_2_Conditional_1_Template, 1, 0, "span", 3)(2, NzCascaderOptionComponent_Conditional_2_Conditional_2_Template, 1, 1, "ng-container");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r0.option.loading ? 1 : 2);
  }
}
var _c2 = ["selectContainer"];
var _c3 = ["input"];
var _c4 = ["menu"];
var _c5 = ["*"];
var _forTrack0 = ($index, $item) => $item.value;
function NzCascaderComponent_Conditional_3_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.labelRenderText);
  }
}
function NzCascaderComponent_Conditional_3_Conditional_5_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function NzCascaderComponent_Conditional_3_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzCascaderComponent_Conditional_3_Conditional_5_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 13);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.nzLabelRender)("ngTemplateOutletContext", ctx_r2.labelRenderContext);
  }
}
function NzCascaderComponent_Conditional_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtemplate(1, NzCascaderComponent_Conditional_3_Conditional_5_Conditional_1_Template, 2, 1, "ng-container")(2, NzCascaderComponent_Conditional_3_Conditional_5_Conditional_2_Template, 1, 2, null, 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("title", ctx_r2.labelRenderText);
    ɵɵadvance();
    ɵɵconditional(!ctx_r2.isLabelRenderTemplate ? 1 : 2);
  }
}
function NzCascaderComponent_Conditional_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleProp("visibility", ctx_r2.isComposing || ctx_r2.inputValue ? "hidden" : "visible");
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.showPlaceholder ? ctx_r2.nzPlaceHolder || (ctx_r2.locale == null ? null : ctx_r2.locale.placeholder) : null);
  }
}
function NzCascaderComponent_Conditional_3_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵclassProp("ant-cascader-picker-arrow-expand", ctx_r2.menuVisible);
    ɵɵproperty("nzType", ctx_r2.nzSuffixIcon);
  }
}
function NzCascaderComponent_Conditional_3_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 17);
  }
}
function NzCascaderComponent_Conditional_3_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-form-item-feedback-icon", 18);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("status", ctx_r2.status);
  }
}
function NzCascaderComponent_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 15);
    ɵɵtemplate(1, NzCascaderComponent_Conditional_3_Conditional_7_Conditional_1_Template, 1, 3, "span", 16)(2, NzCascaderComponent_Conditional_3_Conditional_7_Conditional_2_Template, 1, 0, "span", 17)(3, NzCascaderComponent_Conditional_3_Conditional_7_Conditional_3_Template, 1, 1, "nz-form-item-feedback-icon", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassProp("ant-select-arrow-loading", ctx_r2.isLoading);
    ɵɵadvance();
    ɵɵconditional(!ctx_r2.isLoading ? 1 : 2);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r2.hasFeedback && !!ctx_r2.status ? 3 : -1);
  }
}
function NzCascaderComponent_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 12)(1, "span", 20);
    ɵɵlistener("click", function NzCascaderComponent_Conditional_3_Conditional_8_Template_span_click_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.clearSelection($event));
    });
    ɵɵelementEnd()();
  }
}
function NzCascaderComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6, 1)(2, "span", 7)(3, "input", 8, 2);
    ɵɵtwoWayListener("ngModelChange", function NzCascaderComponent_Conditional_3_Template_input_ngModelChange_3_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r2.inputValue, $event) || (ctx_r2.inputValue = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("blur", function NzCascaderComponent_Conditional_3_Template_input_blur_3_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleInputBlur());
    })("focus", function NzCascaderComponent_Conditional_3_Template_input_focus_3_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleInputFocus());
    })("compositionstart", function NzCascaderComponent_Conditional_3_Template_input_compositionstart_3_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleInputCompositionstart());
    })("compositionend", function NzCascaderComponent_Conditional_3_Template_input_compositionend_3_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleInputCompositionend());
    });
    ɵɵelementEnd()();
    ɵɵtemplate(5, NzCascaderComponent_Conditional_3_Conditional_5_Template, 3, 2, "span", 9)(6, NzCascaderComponent_Conditional_3_Conditional_6_Template, 2, 3, "span", 10);
    ɵɵelementEnd();
    ɵɵtemplate(7, NzCascaderComponent_Conditional_3_Conditional_7_Template, 4, 4, "span", 11)(8, NzCascaderComponent_Conditional_3_Conditional_8_Template, 2, 0, "span", 12);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵstyleProp("opacity", ctx_r2.nzShowSearch ? "" : "0");
    ɵɵproperty("readonly", !ctx_r2.nzShowSearch)("disabled", ctx_r2.nzDisabled);
    ɵɵtwoWayProperty("ngModel", ctx_r2.inputValue);
    ɵɵattribute("autoComplete", "off")("expanded", ctx_r2.menuVisible)("autofocus", ctx_r2.nzAutoFocus ? "autofocus" : null);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r2.showLabelRender ? 5 : 6);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r2.nzShowArrow ? 7 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.clearIconVisible ? 8 : -1);
  }
}
function NzCascaderComponent_ng_template_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 24)(1, "li", 25);
    ɵɵelement(2, "nz-embed-empty", 26);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleProp("width", ctx_r2.dropdownWidthStyle)("height", ctx_r2.dropdownHeightStyle);
    ɵɵadvance(2);
    ɵɵproperty("nzComponentName", "cascader")("specificContent", ctx_r2.nzNotFoundContent);
  }
}
function NzCascaderComponent_ng_template_5_Conditional_4_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 30);
    ɵɵlistener("mouseenter", function NzCascaderComponent_ng_template_5_Conditional_4_For_1_For_2_Template_li_mouseenter_0_listener($event) {
      const option_r7 = ɵɵrestoreView(_r6).$implicit;
      const ɵ$index_56_r8 = ɵɵnextContext().$index;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onOptionMouseEnter(option_r7, ɵ$index_56_r8, $event));
    })("mouseleave", function NzCascaderComponent_ng_template_5_Conditional_4_For_1_For_2_Template_li_mouseleave_0_listener($event) {
      const option_r7 = ɵɵrestoreView(_r6).$implicit;
      const ɵ$index_56_r8 = ɵɵnextContext().$index;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onOptionMouseLeave(option_r7, ɵ$index_56_r8, $event));
    })("click", function NzCascaderComponent_ng_template_5_Conditional_4_For_1_For_2_Template_li_click_0_listener($event) {
      const option_r7 = ɵɵrestoreView(_r6).$implicit;
      const ɵ$index_56_r8 = ɵɵnextContext().$index;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onOptionClick(option_r7, ɵ$index_56_r8, $event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    const ɵ$index_56_r8 = ɵɵnextContext().$index;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("expandIcon", ctx_r2.nzExpandIcon)("columnIndex", ɵ$index_56_r8)("nzLabelProperty", ctx_r2.nzLabelProperty)("optionTemplate", ctx_r2.nzOptionRender)("activated", ctx_r2.isOptionActivated(option_r7, ɵ$index_56_r8))("highlightText", ctx_r2.inSearchingMode ? ctx_r2.inputValue : "")("option", option_r7)("dir", ctx_r2.dir);
  }
}
function NzCascaderComponent_ng_template_5_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 28);
    ɵɵrepeaterCreate(1, NzCascaderComponent_ng_template_5_Conditional_4_For_1_For_2_Template, 1, 8, "li", 29, _forTrack0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const options_r9 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵstyleProp("height", ctx_r2.dropdownHeightStyle)("width", ctx_r2.dropdownWidthStyle);
    ɵɵproperty("ngClass", ctx_r2.menuColumnCls);
    ɵɵadvance();
    ɵɵrepeater(options_r9);
  }
}
function NzCascaderComponent_ng_template_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NzCascaderComponent_ng_template_5_Conditional_4_For_1_Template, 3, 5, "ul", 27, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵrepeater(ctx_r2.cascaderService.columns);
  }
}
function NzCascaderComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 21);
    ɵɵlistener("mouseenter", function NzCascaderComponent_ng_template_5_Template_div_mouseenter_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onTriggerMouseEnter());
    })("mouseleave", function NzCascaderComponent_ng_template_5_Template_div_mouseleave_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onTriggerMouseLeave($event));
    });
    ɵɵelementStart(1, "div", 22, 3);
    ɵɵtemplate(3, NzCascaderComponent_ng_template_5_Conditional_3_Template, 3, 6, "ul", 23)(4, NzCascaderComponent_ng_template_5_Conditional_4_Template, 2, 0);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("ant-cascader-dropdown-rtl", ctx_r2.dir === "rtl");
    ɵɵproperty("@slideMotion", "enter")("@.disabled", !!(ctx_r2.noAnimation == null ? null : ctx_r2.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r2.noAnimation == null ? null : ctx_r2.noAnimation.nzNoAnimation);
    ɵɵadvance();
    ɵɵclassProp("ant-cascader-rtl", ctx_r2.dir === "rtl")("ant-cascader-menus-hidden", !ctx_r2.menuVisible)("ant-cascader-menu-empty", ctx_r2.shouldShowEmpty);
    ɵɵproperty("ngClass", ctx_r2.menuCls)("ngStyle", ctx_r2.nzMenuStyle);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r2.shouldShowEmpty ? 3 : 4);
  }
}
function isShowSearchObject(options) {
  return typeof options !== "boolean";
}
function isChildOption(o) {
  return o.isLeaf || !o.children || !o.children.length;
}
function isParentOption(o) {
  return !!o.children && !!o.children.length && !o.isLeaf;
}
var _NzCascaderOptionComponent = class _NzCascaderOptionComponent {
  constructor(cdr, elementRef) {
    this.cdr = cdr;
    this.optionTemplate = null;
    this.activated = false;
    this.nzLabelProperty = "label";
    this.expandIcon = "";
    this.dir = "ltr";
    this.nativeElement = elementRef.nativeElement;
  }
  ngOnInit() {
    if (this.expandIcon === "" && this.dir === "rtl") {
      this.expandIcon = "left";
    } else if (this.expandIcon === "") {
      this.expandIcon = "right";
    }
  }
  get optionLabel() {
    return this.option[this.nzLabelProperty];
  }
  markForCheck() {
    this.cdr.markForCheck();
  }
};
_NzCascaderOptionComponent.ɵfac = function NzCascaderOptionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzCascaderOptionComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef));
};
_NzCascaderOptionComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzCascaderOptionComponent,
  selectors: [["", "nz-cascader-option", ""]],
  hostAttrs: [1, "ant-cascader-menu-item", "ant-cascader-menu-item-expanded"],
  hostVars: 7,
  hostBindings: function NzCascaderOptionComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("title", ctx.option.title || ctx.optionLabel);
      ɵɵclassProp("ant-cascader-menu-item-active", ctx.activated)("ant-cascader-menu-item-expand", !ctx.option.isLeaf)("ant-cascader-menu-item-disabled", ctx.option.disabled);
    }
  },
  inputs: {
    optionTemplate: "optionTemplate",
    option: "option",
    activated: "activated",
    highlightText: "highlightText",
    nzLabelProperty: "nzLabelProperty",
    columnIndex: [2, "columnIndex", "columnIndex", numberAttribute],
    expandIcon: "expandIcon",
    dir: "dir"
  },
  exportAs: ["nzCascaderOption"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  attrs: _c0,
  decls: 3,
  vars: 2,
  consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-cascader-menu-item-content", 3, "innerHTML"], [1, "ant-cascader-menu-item-expand-icon"], ["nz-icon", "", "nzType", "loading"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]],
  template: function NzCascaderOptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzCascaderOptionComponent_Conditional_0_Template, 1, 5, null, 0)(1, NzCascaderOptionComponent_Conditional_1_Template, 2, 6, "div", 1)(2, NzCascaderOptionComponent_Conditional_2_Template, 3, 1, "div", 2);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.optionTemplate ? 0 : 1);
      ɵɵadvance(2);
      ɵɵconditional(!ctx.option.isLeaf || (ctx.option.children == null ? null : ctx.option.children.length) || ctx.option.loading ? 2 : -1);
    }
  },
  dependencies: [NgTemplateOutlet, NzHighlightModule, NzHighlightPipe, NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzCascaderOptionComponent = _NzCascaderOptionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCascaderOptionComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "[nz-cascader-option]",
      exportAs: "nzCascaderOption",
      template: `
    @if (optionTemplate) {
      <ng-template
        [ngTemplateOutlet]="optionTemplate"
        [ngTemplateOutletContext]="{ $implicit: option, index: columnIndex }"
      />
    } @else {
      <div
        class="ant-cascader-menu-item-content"
        [innerHTML]="optionLabel | nzHighlight: highlightText : 'g' : 'ant-cascader-menu-item-keyword'"
      ></div>
    }

    @if (!option.isLeaf || option.children?.length || option.loading) {
      <div class="ant-cascader-menu-item-expand-icon">
        @if (option.loading) {
          <span nz-icon nzType="loading"></span>
        } @else {
          <ng-container *nzStringTemplateOutlet="expandIcon">
            <span nz-icon [nzType]="$any(expandIcon)"></span>
          </ng-container>
        }
      </div>
    }
  `,
      host: {
        class: "ant-cascader-menu-item ant-cascader-menu-item-expanded",
        "[attr.title]": "option.title || optionLabel",
        "[class.ant-cascader-menu-item-active]": "activated",
        "[class.ant-cascader-menu-item-expand]": "!option.isLeaf",
        "[class.ant-cascader-menu-item-disabled]": "option.disabled"
      },
      imports: [NgTemplateOutlet, NzHighlightModule, NzIconModule, NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }], {
    optionTemplate: [{
      type: Input
    }],
    option: [{
      type: Input
    }],
    activated: [{
      type: Input
    }],
    highlightText: [{
      type: Input
    }],
    nzLabelProperty: [{
      type: Input
    }],
    columnIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    expandIcon: [{
      type: Input
    }],
    dir: [{
      type: Input
    }]
  });
})();
var _NzCascaderService = class _NzCascaderService {
  constructor() {
    this.activatedOptions = [];
    this.columns = [];
    this.inSearchingMode = false;
    this.selectedOptions = [];
    this.values = [];
    this.$loading = new BehaviorSubject(false);
    this.$redraw = new Subject();
    this.$optionSelected = new Subject();
    this.$quitSearching = new Subject();
    this.columnsSnapshot = [[]];
    this.activatedOptionsSnapshot = [];
  }
  /** Return cascader options in the first layer. */
  get nzOptions() {
    return this.columns[0];
  }
  ngOnDestroy() {
    this.$redraw.complete();
    this.$quitSearching.complete();
    this.$optionSelected.complete();
    this.$loading.complete();
  }
  /**
   * Make sure that value matches what is displayed in the dropdown.
   */
  syncOptions(first = false) {
    const values = this.values;
    const hasValue = values && values.length;
    const lastColumnIndex = values.length - 1;
    const initColumnWithIndex = (columnIndex) => {
      const activatedOptionSetter = () => {
        const currentValue = values[columnIndex];
        if (!isNotNil(currentValue)) {
          this.$redraw.next();
          return;
        }
        const option = this.findOptionWithValue(columnIndex, values[columnIndex]) || (typeof currentValue === "object" ? currentValue : {
          [`${this.cascaderComponent.nzValueProperty}`]: currentValue,
          [`${this.cascaderComponent.nzLabelProperty}`]: currentValue
        });
        this.setOptionActivated(option, columnIndex, false, false);
        if (columnIndex < lastColumnIndex) {
          initColumnWithIndex(columnIndex + 1);
        } else {
          this.dropBehindColumns(columnIndex);
          this.selectedOptions = [...this.activatedOptions];
          this.$redraw.next();
        }
      };
      if (this.isLoaded(columnIndex) || !this.cascaderComponent.nzLoadData) {
        activatedOptionSetter();
      } else {
        const option = this.activatedOptions[columnIndex - 1] || {};
        this.loadChildren(option, columnIndex - 1, activatedOptionSetter);
      }
    };
    this.activatedOptions = [];
    this.selectedOptions = [];
    if (first && this.cascaderComponent.nzLoadData && !hasValue) {
      this.$redraw.next();
      return;
    } else {
      initColumnWithIndex(0);
    }
  }
  /**
   * Bind cascader component so this service could use inputs.
   */
  withComponent(cascaderComponent) {
    this.cascaderComponent = cascaderComponent;
  }
  /**
   * Reset all options. Rebuild searching options if in searching mode.
   */
  withOptions(options) {
    this.columnsSnapshot = this.columns = options && options.length ? [options] : [];
    if (this.inSearchingMode) {
      this.prepareSearchOptions(this.cascaderComponent.inputValue);
    } else if (this.columns.length) {
      this.syncOptions();
    }
  }
  /**
   * Try to set a option as activated.
   *
   * @param option Cascader option
   * @param columnIndex Of which column this option is in
   * @param performSelect Select
   * @param loadingChildren Try to load children asynchronously.
   */
  setOptionActivated(option, columnIndex, performSelect = false, loadingChildren = true) {
    if (option.disabled) {
      return;
    }
    this.activatedOptions[columnIndex] = option;
    this.trackAncestorActivatedOptions(columnIndex);
    this.dropBehindActivatedOptions(columnIndex);
    const isParent = isParentOption(option);
    if (isParent) {
      this.setColumnData(option.children, columnIndex + 1, option);
    } else if (!option.isLeaf && loadingChildren) {
      this.loadChildren(option, columnIndex);
    } else if (option.isLeaf) {
      this.dropBehindColumns(columnIndex);
    }
    if (performSelect) {
      this.setOptionSelected(option, columnIndex);
    }
    this.$redraw.next();
  }
  setOptionSelected(option, index) {
    const changeOn = this.cascaderComponent.nzChangeOn;
    const shouldPerformSelection = (o, i) => typeof changeOn === "function" ? changeOn(o, i) : false;
    if (option.isLeaf || this.cascaderComponent.nzChangeOnSelect || shouldPerformSelection(option, index)) {
      this.selectedOptions = [...this.activatedOptions];
      this.prepareEmitValue();
      this.$redraw.next();
      this.$optionSelected.next({
        option,
        index
      });
    }
  }
  setOptionDeactivatedSinceColumn(column) {
    this.dropBehindActivatedOptions(column - 1);
    this.dropBehindColumns(column);
    this.$redraw.next();
  }
  /**
   * Set a searching option as selected, finishing up things.
   *
   * @param option
   */
  setSearchOptionSelected(option) {
    this.activatedOptions = [option];
    this.selectedOptions = [...option.path];
    this.prepareEmitValue();
    this.$redraw.next();
    this.$optionSelected.next({
      option,
      index: 0
    });
    setTimeout(() => {
      this.$quitSearching.next();
      this.$redraw.next();
      this.inSearchingMode = false;
      this.columns = [...this.columnsSnapshot];
      this.activatedOptions = [...this.selectedOptions];
    }, 200);
  }
  /**
   * Filter cascader options to reset `columns`.
   *
   * @param searchValue The string user wants to search.
   */
  prepareSearchOptions(searchValue) {
    const results = [];
    const path = [];
    const defaultFilter = (i, p) => p.some((o) => {
      const label = this.getOptionLabel(o);
      return !!label && label.indexOf(i) !== -1;
    });
    const showSearch = this.cascaderComponent.nzShowSearch;
    const filter = isShowSearchObject(showSearch) && showSearch.filter ? showSearch.filter : defaultFilter;
    const sorter = isShowSearchObject(showSearch) && showSearch.sorter ? showSearch.sorter : null;
    const loopChild = (node, forceDisabled = false) => {
      path.push(node);
      const cPath = Array.from(path);
      if (filter(searchValue, cPath)) {
        const disabled = forceDisabled || node.disabled;
        const option = {
          disabled,
          isLeaf: true,
          path: cPath,
          [this.cascaderComponent.nzLabelProperty]: cPath.map((p) => this.getOptionLabel(p)).join(" / ")
        };
        results.push(option);
      }
      path.pop();
    };
    const loopParent = (node, forceDisabled = false) => {
      const disabled = forceDisabled || node.disabled;
      path.push(node);
      node.children.forEach((sNode) => {
        if (!sNode.parent) {
          sNode.parent = node;
        }
        if (!sNode.isLeaf) {
          loopParent(sNode, disabled);
        }
        if (sNode.isLeaf || !sNode.children || !sNode.children.length) {
          loopChild(sNode, disabled);
        }
      });
      path.pop();
    };
    if (!this.columnsSnapshot.length) {
      this.columns = [[]];
      return;
    }
    this.columnsSnapshot[0].forEach((o) => isChildOption(o) ? loopChild(o) : loopParent(o));
    if (sorter) {
      results.sort((a, b) => sorter(a.path, b.path, searchValue));
    }
    this.columns = [results];
    this.$redraw.next();
  }
  /**
   * Toggle searching mode by UI. It deals with things not directly related to UI.
   *
   * @param toSearching If this cascader is entering searching mode
   */
  toggleSearchingMode(toSearching) {
    this.inSearchingMode = toSearching;
    if (toSearching) {
      this.activatedOptionsSnapshot = [...this.activatedOptions];
      this.activatedOptions = [];
      this.selectedOptions = [];
      this.$redraw.next();
    } else {
      this.activatedOptions = [...this.activatedOptionsSnapshot];
      this.selectedOptions = [...this.activatedOptions];
      this.columns = [...this.columnsSnapshot];
      this.syncOptions();
      this.$redraw.next();
    }
  }
  /**
   * Clear selected options.
   */
  clear() {
    this.values = [];
    this.selectedOptions = [];
    this.activatedOptions = [];
    this.dropBehindColumns(0);
    this.$redraw.next();
    this.$optionSelected.next(null);
  }
  getOptionLabel(o) {
    return o[this.cascaderComponent.nzLabelProperty || "label"];
  }
  getOptionValue(o) {
    return o[this.cascaderComponent.nzValueProperty || "value"];
  }
  /**
   * Try to insert options into a column.
   *
   * @param options Options to insert
   * @param columnIndex Position
   */
  setColumnData(options, columnIndex, parent) {
    const existingOptions = this.columns[columnIndex];
    if (!arraysEqual(existingOptions, options)) {
      options.forEach((o) => o.parent = parent);
      this.columns[columnIndex] = options;
      this.dropBehindColumns(columnIndex);
    }
  }
  /**
   * Set all ancestor options as activated.
   */
  trackAncestorActivatedOptions(startIndex) {
    for (let i = startIndex - 1; i >= 0; i--) {
      if (!this.activatedOptions[i]) {
        this.activatedOptions[i] = this.activatedOptions[i + 1].parent;
      }
    }
  }
  dropBehindActivatedOptions(lastReserveIndex) {
    this.activatedOptions = this.activatedOptions.splice(0, lastReserveIndex + 1);
  }
  dropBehindColumns(lastReserveIndex) {
    if (lastReserveIndex < this.columns.length - 1) {
      this.columns = this.columns.slice(0, lastReserveIndex + 1);
    }
  }
  /**
   * Load children of an option asynchronously.
   */
  loadChildren(option, columnIndex, success, failure) {
    const loadFn = this.cascaderComponent.nzLoadData;
    if (loadFn) {
      this.$loading.next(columnIndex < 0);
      if (typeof option === "object") {
        option.loading = true;
      }
      from(loadFn(option, columnIndex)).pipe(finalize(() => {
        option.loading = false;
        this.$loading.next(false);
        this.$redraw.next();
      })).subscribe({
        next: () => {
          if (option.children) {
            this.setColumnData(option.children, columnIndex + 1, option);
          }
          success?.();
        },
        error: () => {
          option.isLeaf = true;
          failure?.();
        }
      });
    }
  }
  isLoaded(index) {
    return this.columns[index] && this.columns[index].length > 0;
  }
  /**
   * Find a option that has a given value in a given column.
   */
  findOptionWithValue(columnIndex, value) {
    const targetColumn = this.columns[columnIndex];
    if (targetColumn) {
      const v = typeof value === "object" ? this.getOptionValue(value) : value;
      return targetColumn.find((o) => v === this.getOptionValue(o));
    }
    return null;
  }
  prepareEmitValue() {
    this.values = this.selectedOptions.map((o) => this.getOptionValue(o));
  }
};
_NzCascaderService.ɵfac = function NzCascaderService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzCascaderService)();
};
_NzCascaderService.ɵprov = ɵɵdefineInjectable({
  token: _NzCascaderService,
  factory: _NzCascaderService.ɵfac
});
var NzCascaderService = _NzCascaderService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCascaderService, [{
    type: Injectable
  }], null, null);
})();
var NZ_CONFIG_MODULE_NAME = "cascader";
var defaultDisplayRender = (labels) => labels.join(" / ");
var _NzCascaderComponent = class _NzCascaderComponent {
  set input(input) {
    this.input$.next(input);
  }
  get input() {
    return this.input$.getValue();
  }
  get nzOptions() {
    return this.cascaderService.nzOptions;
  }
  set nzOptions(options) {
    this.cascaderService.withOptions(options);
  }
  get inSearchingMode() {
    return this.cascaderService.inSearchingMode;
  }
  set inputValue(inputValue) {
    this.inputString = inputValue;
    this.toggleSearchingMode(!!inputValue);
  }
  get inputValue() {
    return this.inputString;
  }
  get menuCls() {
    return {
      [`${this.nzMenuClassName}`]: !!this.nzMenuClassName
    };
  }
  get menuColumnCls() {
    return {
      [`${this.nzColumnClassName}`]: !!this.nzColumnClassName
    };
  }
  get hasInput() {
    return !!this.inputValue;
  }
  get hasValue() {
    return this.cascaderService.values && this.cascaderService.values.length > 0;
  }
  get showLabelRender() {
    return this.hasValue;
  }
  get showPlaceholder() {
    return !(this.hasInput || this.hasValue);
  }
  get clearIconVisible() {
    return this.nzAllowClear && !this.nzDisabled && (this.hasValue || this.hasInput);
  }
  get isLabelRenderTemplate() {
    return !!this.nzLabelRender;
  }
  constructor(cascaderService, nzConfigService, ngZone, cdr, i18nService, destroy$, elementRef, renderer, directionality) {
    this.cascaderService = cascaderService;
    this.nzConfigService = nzConfigService;
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.i18nService = i18nService;
    this.destroy$ = destroy$;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.input$ = new BehaviorSubject(void 0);
    this.nzOptionRender = null;
    this.nzShowInput = true;
    this.nzShowArrow = true;
    this.nzAllowClear = true;
    this.nzAutoFocus = false;
    this.nzChangeOnSelect = false;
    this.nzDisabled = false;
    this.nzExpandTrigger = "click";
    this.nzValueProperty = "value";
    this.nzLabelRender = null;
    this.nzLabelProperty = "label";
    this.nzSize = "default";
    this.nzBackdrop = false;
    this.nzShowSearch = false;
    this.nzPlaceHolder = "";
    this.nzMenuStyle = null;
    this.nzMouseEnterDelay = 150;
    this.nzMouseLeaveDelay = 150;
    this.nzStatus = "";
    this.nzTriggerAction = ["click"];
    this.nzSuffixIcon = "down";
    this.nzExpandIcon = "";
    this.nzVisibleChange = new EventEmitter();
    this.nzSelectionChange = new EventEmitter();
    this.nzSelect = new EventEmitter();
    this.nzClear = new EventEmitter();
    this.prefixCls = "ant-select";
    this.statusCls = {};
    this.status = "";
    this.hasFeedback = false;
    this.shouldShowEmpty = false;
    this.menuVisible = false;
    this.isLoading = false;
    this.labelRenderContext = {};
    this.onChange = Function.prototype;
    this.onTouched = Function.prototype;
    this.positions = [...DEFAULT_CASCADER_POSITIONS];
    this.dropdownHeightStyle = "";
    this.isFocused = false;
    this.dir = "ltr";
    this.isComposing = false;
    this.inputString = "";
    this.isOpening = false;
    this.isNzDisableFirstChange = true;
    this.noAnimation = inject(NzNoAnimationDirective, {
      host: true,
      optional: true
    });
    this.nzFormStatusService = inject(NzFormStatusService, {
      optional: true
    });
    this.nzFormNoStatusService = inject(NzFormNoStatusService, {
      optional: true
    });
    this.el = elementRef.nativeElement;
    this.cascaderService.withComponent(this);
    this.renderer.addClass(this.elementRef.nativeElement, "ant-select");
    this.renderer.addClass(this.elementRef.nativeElement, "ant-cascader");
  }
  ngOnInit() {
    this.nzFormStatusService?.formStatusChanges.pipe(distinctUntilChanged((pre, cur) => {
      return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
    }), withLatestFrom(this.nzFormNoStatusService ? this.nzFormNoStatusService.noFormStatus : of(false)), map(([{
      status,
      hasFeedback
    }, noStatus]) => ({
      status: noStatus ? "" : status,
      hasFeedback
    })), takeUntil(this.destroy$)).subscribe(({
      status,
      hasFeedback
    }) => {
      this.setStatusStyles(status, hasFeedback);
    });
    const srv = this.cascaderService;
    srv.$redraw.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.checkChildren();
      this.setDisplayLabel();
      this.cdr.detectChanges();
      this.reposition();
      this.setDropdownStyles();
    });
    srv.$loading.pipe(takeUntil(this.destroy$)).subscribe((loading) => {
      this.isLoading = loading;
    });
    srv.$optionSelected.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      if (!data) {
        this.onChange([]);
        this.nzSelect.emit(null);
        this.nzSelectionChange.emit([]);
      } else {
        const {
          option,
          index
        } = data;
        const shouldClose = option.isLeaf || this.nzChangeOnSelect && this.nzExpandTrigger === "hover";
        if (shouldClose) {
          this.delaySetMenuVisible(false);
        }
        this.onChange(this.cascaderService.values);
        this.nzSelectionChange.emit(this.cascaderService.selectedOptions);
        this.nzSelect.emit({
          option,
          index
        });
        this.cdr.markForCheck();
      }
    });
    srv.$quitSearching.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.inputString = "";
      this.dropdownWidthStyle = "";
    });
    this.i18nService.localeChange.pipe(startWith(), takeUntil(this.destroy$)).subscribe(() => {
      this.setLocale();
    });
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
    this.dir = this.directionality.value;
    this.directionality.change.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.dir = this.directionality.value;
      srv.$redraw.next();
    });
    this.setupChangeListener();
    this.setupKeydownListener();
  }
  ngOnChanges(changes) {
    const {
      nzStatus
    } = changes;
    if (nzStatus) {
      this.setStatusStyles(this.nzStatus, this.hasFeedback);
    }
  }
  ngOnDestroy() {
    this.clearDelayMenuTimer();
    this.clearDelaySelectTimer();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  writeValue(value) {
    this.cascaderService.values = toArray(value);
    this.cascaderService.syncOptions(true);
  }
  delaySetMenuVisible(visible, delay = 100, setOpening = false) {
    this.clearDelayMenuTimer();
    if (delay) {
      if (visible && setOpening) {
        this.isOpening = true;
      }
      this.delayMenuTimer = setTimeout(() => {
        this.setMenuVisible(visible);
        this.cdr.detectChanges();
        this.clearDelayMenuTimer();
        if (visible) {
          setTimeout(() => {
            this.isOpening = false;
          }, 100);
        }
      }, delay);
    } else {
      this.setMenuVisible(visible);
    }
  }
  setMenuVisible(visible) {
    if (this.nzDisabled || this.menuVisible === visible) {
      return;
    }
    if (visible) {
      this.cascaderService.syncOptions();
      this.scrollToActivatedOptions();
    }
    if (!visible) {
      this.inputValue = "";
    }
    this.menuVisible = visible;
    this.nzVisibleChange.emit(visible);
    this.cdr.detectChanges();
  }
  clearDelayMenuTimer() {
    if (this.delayMenuTimer) {
      clearTimeout(this.delayMenuTimer);
      this.delayMenuTimer = void 0;
    }
  }
  clearSelection(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.labelRenderText = "";
    this.labelRenderContext = {};
    this.inputValue = "";
    this.setMenuVisible(false);
    this.cascaderService.clear();
    this.nzClear.emit();
  }
  getSubmitValue() {
    return this.cascaderService.selectedOptions.map((o) => this.cascaderService.getOptionValue(o));
  }
  focus() {
    if (!this.isFocused) {
      (this.input?.nativeElement || this.el).focus();
      this.isFocused = true;
    }
  }
  blur() {
    if (this.isFocused) {
      (this.input?.nativeElement || this.el).blur();
      this.isFocused = false;
    }
  }
  handleInputBlur() {
    this.menuVisible ? this.focus() : this.blur();
  }
  handleInputFocus() {
    this.focus();
  }
  handleInputCompositionstart() {
    this.isComposing = true;
  }
  handleInputCompositionend() {
    this.isComposing = false;
  }
  onTriggerClick() {
    if (this.nzDisabled) {
      return;
    }
    if (this.nzShowSearch) {
      this.focus();
    }
    if (this.isActionTrigger("click")) {
      this.delaySetMenuVisible(!this.menuVisible, 100);
    }
    this.onTouched();
  }
  onTriggerMouseEnter() {
    if (this.nzDisabled || !this.isActionTrigger("hover")) {
      return;
    }
    this.delaySetMenuVisible(true, this.nzMouseEnterDelay, true);
  }
  onTriggerMouseLeave(event) {
    if (this.nzDisabled || !this.menuVisible || this.isOpening || !this.isActionTrigger("hover")) {
      event.preventDefault();
      return;
    }
    const mouseTarget = event.relatedTarget;
    const hostEl = this.el;
    const menuEl = this.menu && this.menu.nativeElement;
    if (hostEl.contains(mouseTarget) || menuEl && menuEl.contains(mouseTarget)) {
      return;
    }
    this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
  }
  onOptionMouseEnter(option, columnIndex, event) {
    event.preventDefault();
    if (this.nzExpandTrigger === "hover") {
      if (!option.isLeaf) {
        this.delaySetOptionActivated(option, columnIndex, false);
      } else {
        this.cascaderService.setOptionDeactivatedSinceColumn(columnIndex);
      }
    }
  }
  onOptionMouseLeave(option, _columnIndex, event) {
    event.preventDefault();
    if (this.nzExpandTrigger === "hover" && !option.isLeaf) {
      this.clearDelaySelectTimer();
    }
  }
  onOptionClick(option, columnIndex, event) {
    if (event) {
      event.preventDefault();
    }
    if (option && option.disabled) {
      return;
    }
    this.el.focus();
    this.inSearchingMode ? this.cascaderService.setSearchOptionSelected(option) : this.cascaderService.setOptionActivated(option, columnIndex, true);
  }
  onClickOutside(event) {
    const target = _getEventTarget(event);
    if (!this.el.contains(target)) {
      this.closeMenu();
    }
  }
  isActionTrigger(action) {
    return typeof this.nzTriggerAction === "string" ? this.nzTriggerAction === action : this.nzTriggerAction.indexOf(action) !== -1;
  }
  onEnter() {
    const columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
    const option = this.cascaderService.activatedOptions[columnIndex];
    if (option && !option.disabled) {
      this.inSearchingMode ? this.cascaderService.setSearchOptionSelected(option) : this.cascaderService.setOptionActivated(option, columnIndex, true);
    }
  }
  moveUpOrDown(isUp) {
    const columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
    const activeOption = this.cascaderService.activatedOptions[columnIndex];
    const options = this.cascaderService.columns[columnIndex] || [];
    const length = options.length;
    let nextIndex = -1;
    if (!activeOption) {
      nextIndex = isUp ? length : -1;
    } else {
      nextIndex = options.indexOf(activeOption);
    }
    while (true) {
      nextIndex = isUp ? nextIndex - 1 : nextIndex + 1;
      if (nextIndex < 0 || nextIndex >= length) {
        break;
      }
      const nextOption = options[nextIndex];
      if (!nextOption || nextOption.disabled) {
        continue;
      }
      this.cascaderService.setOptionActivated(nextOption, columnIndex);
      break;
    }
  }
  moveLeft() {
    const options = this.cascaderService.activatedOptions;
    if (options.length) {
      options.pop();
    }
  }
  moveRight() {
    const length = this.cascaderService.activatedOptions.length;
    const options = this.cascaderService.columns[length];
    if (options && options.length) {
      const nextOpt = options.find((o) => !o.disabled);
      if (nextOpt) {
        this.cascaderService.setOptionActivated(nextOpt, length);
      }
    }
  }
  clearDelaySelectTimer() {
    if (this.delaySelectTimer) {
      clearTimeout(this.delaySelectTimer);
      this.delaySelectTimer = void 0;
    }
  }
  delaySetOptionActivated(option, columnIndex, performSelect) {
    this.clearDelaySelectTimer();
    this.delaySelectTimer = setTimeout(() => {
      this.cascaderService.setOptionActivated(option, columnIndex, performSelect);
      this.delaySelectTimer = void 0;
    }, 150);
  }
  toggleSearchingMode(toSearching) {
    if (this.inSearchingMode !== toSearching) {
      this.cascaderService.toggleSearchingMode(toSearching);
    }
    if (this.inSearchingMode) {
      this.cascaderService.prepareSearchOptions(this.inputValue);
    }
  }
  isOptionActivated(option, index) {
    const activeOpt = this.cascaderService.activatedOptions[index];
    return activeOpt === option;
  }
  setDisabledState(isDisabled) {
    this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || isDisabled;
    this.isNzDisableFirstChange = false;
    if (this.nzDisabled) {
      this.closeMenu();
    }
  }
  closeMenu() {
    this.blur();
    this.clearDelayMenuTimer();
    this.setMenuVisible(false);
  }
  /**
   * Reposition the cascader panel. When a menu opens, the cascader expands
   * and may exceed the boundary of browser's window.
   */
  reposition() {
    if (this.overlay && this.overlay.overlayRef && this.menuVisible) {
      Promise.resolve().then(() => {
        this.overlay.overlayRef.updatePosition();
        this.cdr.markForCheck();
      });
    }
  }
  /**
   * When a cascader options is changed, a child needs to know that it should re-render.
   */
  checkChildren() {
    if (this.cascaderItems) {
      this.cascaderItems.forEach((item) => item.markForCheck());
    }
  }
  setDisplayLabel() {
    const selectedOptions = this.cascaderService.selectedOptions;
    const labels = selectedOptions.map((o) => this.cascaderService.getOptionLabel(o));
    if (this.isLabelRenderTemplate) {
      this.labelRenderContext = {
        labels,
        selectedOptions
      };
    }
    this.labelRenderText = defaultDisplayRender.call(this, labels);
  }
  setDropdownStyles() {
    const firstColumn = this.cascaderService.columns[0];
    this.shouldShowEmpty = this.inSearchingMode && (!firstColumn || !firstColumn.length) || // Should show empty when there's no searching result
    !(this.nzOptions && this.nzOptions.length) && !this.nzLoadData;
    this.dropdownHeightStyle = this.shouldShowEmpty ? "auto" : "";
    if (this.input) {
      this.dropdownWidthStyle = this.inSearchingMode || this.shouldShowEmpty ? `${this.selectContainer.nativeElement.offsetWidth}px` : "";
    }
  }
  setStatusStyles(status, hasFeedback) {
    this.status = status;
    this.hasFeedback = hasFeedback;
    this.cdr.markForCheck();
    this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
    Object.keys(this.statusCls).forEach((status2) => {
      if (this.statusCls[status2]) {
        this.renderer.addClass(this.elementRef.nativeElement, status2);
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, status2);
      }
    });
  }
  setLocale() {
    this.locale = this.i18nService.getLocaleData("global");
    this.cdr.markForCheck();
  }
  scrollToActivatedOptions() {
    this.ngZone.runOutsideAngular(() => {
      Promise.resolve().then(() => {
        this.cascaderItems.toArray().filter((e) => e.activated).forEach((e) => {
          e.nativeElement.scrollIntoView({
            block: "start",
            inline: "nearest"
          });
        });
      });
    });
  }
  setupChangeListener() {
    this.input$.pipe(switchMap((input) => input ? new Observable((subscriber) => this.ngZone.runOutsideAngular(() => fromEvent(input.nativeElement, "change").subscribe(subscriber))) : EMPTY), takeUntil(this.destroy$)).subscribe((event) => event.stopPropagation());
  }
  setupKeydownListener() {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.el, "keydown").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        const keyCode = event.keyCode;
        if (keyCode !== DOWN_ARROW && keyCode !== UP_ARROW && keyCode !== LEFT_ARROW && keyCode !== RIGHT_ARROW && keyCode !== ENTER && keyCode !== BACKSPACE && keyCode !== ESCAPE) {
          return;
        }
        if (!this.menuVisible && keyCode !== BACKSPACE && keyCode !== ESCAPE) {
          return this.ngZone.run(() => this.setMenuVisible(true));
        }
        if (this.inSearchingMode && (keyCode === BACKSPACE || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW)) {
          return;
        }
        if (!this.menuVisible) {
          return;
        }
        event.preventDefault();
        this.ngZone.run(() => {
          if (keyCode === DOWN_ARROW) {
            this.moveUpOrDown(false);
          } else if (keyCode === UP_ARROW) {
            this.moveUpOrDown(true);
          } else if (keyCode === LEFT_ARROW) {
            this.moveLeft();
          } else if (keyCode === RIGHT_ARROW) {
            this.moveRight();
          } else if (keyCode === ENTER) {
            this.onEnter();
          }
          this.cdr.markForCheck();
        });
      });
    });
  }
};
_NzCascaderComponent.ɵfac = function NzCascaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzCascaderComponent)(ɵɵdirectiveInject(NzCascaderService), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(NzDestroyService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Directionality));
};
_NzCascaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzCascaderComponent,
  selectors: [["nz-cascader"], ["", "nz-cascader", ""]],
  viewQuery: function NzCascaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c2, 5);
      ɵɵviewQuery(_c3, 5);
      ɵɵviewQuery(_c4, 5);
      ɵɵviewQuery(CdkConnectedOverlay, 5);
      ɵɵviewQuery(NzCascaderOptionComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.selectContainer = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.menu = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlay = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cascaderItems = _t);
    }
  },
  hostVars: 23,
  hostBindings: function NzCascaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function NzCascaderComponent_click_HostBindingHandler() {
        return ctx.onTriggerClick();
      })("mouseenter", function NzCascaderComponent_mouseenter_HostBindingHandler() {
        return ctx.onTriggerMouseEnter();
      })("mouseleave", function NzCascaderComponent_mouseleave_HostBindingHandler($event) {
        return ctx.onTriggerMouseLeave($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("tabIndex", "0");
      ɵɵclassProp("ant-select-in-form-item", !!ctx.nzFormStatusService)("ant-select-lg", ctx.nzSize === "large")("ant-select-sm", ctx.nzSize === "small")("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-show-arrow", ctx.nzShowArrow)("ant-select-show-search", !!ctx.nzShowSearch)("ant-select-disabled", ctx.nzDisabled)("ant-select-open", ctx.menuVisible)("ant-select-focused", ctx.isFocused)("ant-select-single", true)("ant-select-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzOptionRender: "nzOptionRender",
    nzShowInput: [2, "nzShowInput", "nzShowInput", booleanAttribute],
    nzShowArrow: [2, "nzShowArrow", "nzShowArrow", booleanAttribute],
    nzAllowClear: [2, "nzAllowClear", "nzAllowClear", booleanAttribute],
    nzAutoFocus: [2, "nzAutoFocus", "nzAutoFocus", booleanAttribute],
    nzChangeOnSelect: [2, "nzChangeOnSelect", "nzChangeOnSelect", booleanAttribute],
    nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
    nzColumnClassName: "nzColumnClassName",
    nzExpandTrigger: "nzExpandTrigger",
    nzValueProperty: "nzValueProperty",
    nzLabelRender: "nzLabelRender",
    nzLabelProperty: "nzLabelProperty",
    nzNotFoundContent: "nzNotFoundContent",
    nzSize: "nzSize",
    nzBackdrop: "nzBackdrop",
    nzShowSearch: "nzShowSearch",
    nzPlaceHolder: "nzPlaceHolder",
    nzMenuClassName: "nzMenuClassName",
    nzMenuStyle: "nzMenuStyle",
    nzMouseEnterDelay: [2, "nzMouseEnterDelay", "nzMouseEnterDelay", numberAttribute],
    nzMouseLeaveDelay: [2, "nzMouseLeaveDelay", "nzMouseLeaveDelay", numberAttribute],
    nzStatus: "nzStatus",
    nzTriggerAction: "nzTriggerAction",
    nzChangeOn: "nzChangeOn",
    nzLoadData: "nzLoadData",
    nzSuffixIcon: "nzSuffixIcon",
    nzExpandIcon: "nzExpandIcon",
    nzOptions: "nzOptions"
  },
  outputs: {
    nzVisibleChange: "nzVisibleChange",
    nzSelectionChange: "nzSelectionChange",
    nzSelect: "nzSelect",
    nzClear: "nzClear"
  },
  exportAs: ["nzCascader"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _NzCascaderComponent),
    multi: true
  }, NzCascaderService, NzDestroyService]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c5,
  decls: 6,
  vars: 6,
  consts: [["origin", "cdkOverlayOrigin", "trigger", ""], ["selectContainer", ""], ["input", ""], ["menu", ""], ["cdkOverlayOrigin", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "overlayOutsideClick", "detach", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayOpen"], [1, "ant-select-selector"], [1, "ant-select-selection-search"], ["type", "search", 1, "ant-select-selection-search-input", 3, "ngModelChange", "blur", "focus", "compositionstart", "compositionend", "readonly", "disabled", "ngModel"], [1, "ant-select-selection-item", 3, "title"], [1, "ant-select-selection-placeholder", 3, "visibility"], [1, "ant-select-arrow", 3, "ant-select-arrow-loading"], [1, "ant-select-clear"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-select-selection-placeholder"], [1, "ant-select-arrow"], ["nz-icon", "", 3, "nzType", "ant-cascader-picker-arrow-expand"], ["nz-icon", "", "nzType", "loading"], [3, "status"], ["nz-icon", "", 3, "nzType"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 3, "click"], [1, "ant-select-dropdown", "ant-cascader-dropdown", "ant-select-dropdown-placement-bottomLeft", 3, "mouseenter", "mouseleave", "nzNoAnimation"], [1, "ant-cascader-menus", 3, "ngClass", "ngStyle"], [1, "ant-cascader-menu", 3, "width", "height"], [1, "ant-cascader-menu"], [1, "ant-cascader-menu-item", "ant-cascader-menu-item-disabled"], [1, "ant-cascader-menu-item-content", 3, "nzComponentName", "specificContent"], ["role", "menuitemcheckbox", 1, "ant-cascader-menu", 3, "ngClass", "height", "width"], ["role", "menuitemcheckbox", 1, "ant-cascader-menu", 3, "ngClass"], ["nz-cascader-option", "", 3, "expandIcon", "columnIndex", "nzLabelProperty", "optionTemplate", "activated", "highlightText", "option", "dir"], ["nz-cascader-option", "", 3, "mouseenter", "mouseleave", "click", "expandIcon", "columnIndex", "nzLabelProperty", "optionTemplate", "activated", "highlightText", "option", "dir"]],
  template: function NzCascaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 4, 0);
      ɵɵtemplate(3, NzCascaderComponent_Conditional_3_Template, 9, 11);
      ɵɵprojection(4);
      ɵɵelementEnd();
      ɵɵtemplate(5, NzCascaderComponent_ng_template_5_Template, 5, 14, "ng-template", 5);
      ɵɵlistener("overlayOutsideClick", function NzCascaderComponent_Template_ng_template_overlayOutsideClick_5_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onClickOutside($event));
      })("detach", function NzCascaderComponent_Template_ng_template_detach_5_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.closeMenu());
      });
    }
    if (rf & 2) {
      const origin_r10 = ɵɵreference(1);
      ɵɵadvance(3);
      ɵɵconditional(ctx.nzShowInput ? 3 : -1);
      ɵɵadvance(2);
      ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayOrigin", origin_r10)("cdkConnectedOverlayPositions", ctx.positions)("cdkConnectedOverlayTransformOriginOn", ".ant-cascader-dropdown")("cdkConnectedOverlayOpen", ctx.menuVisible);
    }
  },
  dependencies: [OverlayModule, CdkConnectedOverlay, CdkOverlayOrigin, Dir, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgTemplateOutlet, NzIconModule, NzIconDirective, NzFormPatchModule, NzFormItemFeedbackIconComponent, NzOverlayModule, NzConnectedOverlayDirective, NzNoAnimationDirective, NgClass, NgStyle, NzEmptyModule, NzEmbedEmptyComponent, NzCascaderOptionComponent],
  encapsulation: 2,
  data: {
    animation: [slideMotion]
  },
  changeDetection: 0
});
var NzCascaderComponent = _NzCascaderComponent;
__decorate([WithConfig()], NzCascaderComponent.prototype, "nzSize", void 0);
__decorate([WithConfig()], NzCascaderComponent.prototype, "nzBackdrop", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCascaderComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-cascader, [nz-cascader]",
      exportAs: "nzCascader",
      preserveWhitespaces: false,
      template: `
    <div cdkOverlayOrigin #origin="cdkOverlayOrigin" #trigger>
      @if (nzShowInput) {
        <div #selectContainer class="ant-select-selector">
          <span class="ant-select-selection-search">
            <input
              #input
              type="search"
              class="ant-select-selection-search-input"
              [style.opacity]="nzShowSearch ? '' : '0'"
              [attr.autoComplete]="'off'"
              [attr.expanded]="menuVisible"
              [attr.autofocus]="nzAutoFocus ? 'autofocus' : null"
              [readonly]="!nzShowSearch"
              [disabled]="nzDisabled"
              [(ngModel)]="inputValue"
              (blur)="handleInputBlur()"
              (focus)="handleInputFocus()"
              (compositionstart)="handleInputCompositionstart()"
              (compositionend)="handleInputCompositionend()"
            />
          </span>
          @if (showLabelRender) {
            <span class="ant-select-selection-item" [title]="labelRenderText">
              @if (!isLabelRenderTemplate) {
                <ng-container>{{ labelRenderText }}</ng-container>
              } @else {
                <ng-template
                  [ngTemplateOutlet]="nzLabelRender"
                  [ngTemplateOutletContext]="labelRenderContext"
                ></ng-template>
              }
            </span>
          } @else {
            <span
              class="ant-select-selection-placeholder"
              [style.visibility]="isComposing || inputValue ? 'hidden' : 'visible'"
              >{{ showPlaceholder ? nzPlaceHolder || locale?.placeholder : null }}</span
            >
          }
        </div>
        @if (nzShowArrow) {
          <span class="ant-select-arrow" [class.ant-select-arrow-loading]="isLoading">
            @if (!isLoading) {
              <span nz-icon [nzType]="$any(nzSuffixIcon)" [class.ant-cascader-picker-arrow-expand]="menuVisible"></span>
            } @else {
              <span nz-icon nzType="loading"></span>
            }

            @if (hasFeedback && !!status) {
              <nz-form-item-feedback-icon [status]="status" />
            }
          </span>
        }
        @if (clearIconVisible) {
          <span class="ant-select-clear">
            <span nz-icon nzType="close-circle" nzTheme="fill" (click)="clearSelection($event)"></span>
          </span>
        }
      }
      <ng-content></ng-content>
    </div>
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayPositions]="positions"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-cascader-dropdown'"
      [cdkConnectedOverlayOpen]="menuVisible"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="closeMenu()"
    >
      <div
        class="ant-select-dropdown ant-cascader-dropdown ant-select-dropdown-placement-bottomLeft"
        [class.ant-cascader-dropdown-rtl]="dir === 'rtl'"
        [@slideMotion]="'enter'"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        (mouseenter)="onTriggerMouseEnter()"
        (mouseleave)="onTriggerMouseLeave($event)"
      >
        <div
          #menu
          class="ant-cascader-menus"
          [class.ant-cascader-rtl]="dir === 'rtl'"
          [class.ant-cascader-menus-hidden]="!menuVisible"
          [class.ant-cascader-menu-empty]="shouldShowEmpty"
          [ngClass]="menuCls"
          [ngStyle]="nzMenuStyle"
        >
          @if (shouldShowEmpty) {
            <ul class="ant-cascader-menu" [style.width]="dropdownWidthStyle" [style.height]="dropdownHeightStyle">
              <li class="ant-cascader-menu-item ant-cascader-menu-item-disabled">
                <nz-embed-empty
                  class="ant-cascader-menu-item-content"
                  [nzComponentName]="'cascader'"
                  [specificContent]="nzNotFoundContent"
                />
              </li>
            </ul>
          } @else {
            @for (options of cascaderService.columns; track options; let i = $index) {
              <ul
                class="ant-cascader-menu"
                role="menuitemcheckbox"
                [ngClass]="menuColumnCls"
                [style.height]="dropdownHeightStyle"
                [style.width]="dropdownWidthStyle"
              >
                @for (option of options; track option.value) {
                  <li
                    nz-cascader-option
                    [expandIcon]="nzExpandIcon"
                    [columnIndex]="i"
                    [nzLabelProperty]="nzLabelProperty"
                    [optionTemplate]="nzOptionRender"
                    [activated]="isOptionActivated(option, i)"
                    [highlightText]="inSearchingMode ? inputValue : ''"
                    [option]="option"
                    [dir]="dir"
                    (mouseenter)="onOptionMouseEnter(option, i, $event)"
                    (mouseleave)="onOptionMouseLeave(option, i, $event)"
                    (click)="onOptionClick(option, i, $event)"
                  ></li>
                }
              </ul>
            }
          }
        </div>
      </div>
    </ng-template>
  `,
      animations: [slideMotion],
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzCascaderComponent),
        multi: true
      }, NzCascaderService, NzDestroyService],
      host: {
        "[attr.tabIndex]": '"0"',
        "[class.ant-select-in-form-item]": "!!nzFormStatusService",
        "[class.ant-select-lg]": 'nzSize === "large"',
        "[class.ant-select-sm]": 'nzSize === "small"',
        "[class.ant-select-allow-clear]": "nzAllowClear",
        "[class.ant-select-show-arrow]": "nzShowArrow",
        "[class.ant-select-show-search]": "!!nzShowSearch",
        "[class.ant-select-disabled]": "nzDisabled",
        "[class.ant-select-open]": "menuVisible",
        "[class.ant-select-focused]": "isFocused",
        "[class.ant-select-single]": "true",
        "[class.ant-select-rtl]": `dir === 'rtl'`
      },
      imports: [OverlayModule, FormsModule, NgTemplateOutlet, NzIconModule, NzFormPatchModule, NzOverlayModule, NzNoAnimationDirective, NgClass, NgStyle, NzEmptyModule, NzCascaderOptionComponent],
      standalone: true
    }]
  }], () => [{
    type: NzCascaderService
  }, {
    type: NzConfigService
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzI18nService
  }, {
    type: NzDestroyService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: Directionality
  }], {
    selectContainer: [{
      type: ViewChild,
      args: ["selectContainer", {
        static: false
      }]
    }],
    input: [{
      type: ViewChild,
      args: ["input", {
        static: false
      }]
    }],
    menu: [{
      type: ViewChild,
      args: ["menu", {
        static: false
      }]
    }],
    overlay: [{
      type: ViewChild,
      args: [CdkConnectedOverlay, {
        static: false
      }]
    }],
    cascaderItems: [{
      type: ViewChildren,
      args: [NzCascaderOptionComponent]
    }],
    nzOptionRender: [{
      type: Input
    }],
    nzShowInput: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowArrow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzAllowClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzAutoFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzChangeOnSelect: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzColumnClassName: [{
      type: Input
    }],
    nzExpandTrigger: [{
      type: Input
    }],
    nzValueProperty: [{
      type: Input
    }],
    nzLabelRender: [{
      type: Input
    }],
    nzLabelProperty: [{
      type: Input
    }],
    nzNotFoundContent: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzBackdrop: [{
      type: Input
    }],
    nzShowSearch: [{
      type: Input
    }],
    nzPlaceHolder: [{
      type: Input
    }],
    nzMenuClassName: [{
      type: Input
    }],
    nzMenuStyle: [{
      type: Input
    }],
    nzMouseEnterDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzMouseLeaveDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzStatus: [{
      type: Input
    }],
    nzTriggerAction: [{
      type: Input
    }],
    nzChangeOn: [{
      type: Input
    }],
    nzLoadData: [{
      type: Input
    }],
    nzSuffixIcon: [{
      type: Input
    }],
    nzExpandIcon: [{
      type: Input
    }],
    nzOptions: [{
      type: Input
    }],
    nzVisibleChange: [{
      type: Output
    }],
    nzSelectionChange: [{
      type: Output
    }],
    nzSelect: [{
      type: Output
    }],
    nzClear: [{
      type: Output
    }],
    onTriggerClick: [{
      type: HostListener,
      args: ["click"]
    }],
    onTriggerMouseEnter: [{
      type: HostListener,
      args: ["mouseenter"]
    }],
    onTriggerMouseLeave: [{
      type: HostListener,
      args: ["mouseleave", ["$event"]]
    }]
  });
})();
var _NzCascaderModule = class _NzCascaderModule {
};
_NzCascaderModule.ɵfac = function NzCascaderModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzCascaderModule)();
};
_NzCascaderModule.ɵmod = ɵɵdefineNgModule({
  type: _NzCascaderModule,
  imports: [NzCascaderComponent, NzCascaderOptionComponent],
  exports: [NzCascaderComponent]
});
_NzCascaderModule.ɵinj = ɵɵdefineInjector({
  imports: [NzCascaderComponent, NzCascaderOptionComponent]
});
var NzCascaderModule = _NzCascaderModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCascaderModule, [{
    type: NgModule,
    args: [{
      imports: [NzCascaderComponent, NzCascaderOptionComponent],
      exports: [NzCascaderComponent]
    }]
  }], null, null);
})();
export {
  NzCascaderComponent,
  NzCascaderModule,
  NzCascaderOptionComponent,
  NzCascaderService,
  isChildOption,
  isParentOption,
  isShowSearchObject
};
//# sourceMappingURL=ng-zorro-antd_cascader.js.map
