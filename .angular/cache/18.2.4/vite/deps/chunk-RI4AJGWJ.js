import {
  NzOptionComponent,
  NzSelectComponent,
  NzSelectModule
} from "./chunk-UNXTBZ2K.js";
import {
  NzI18nService
} from "./chunk-AW563NQB.js";
import {
  NzBreakpointEnum,
  NzBreakpointService,
  gridResponsiveMap
} from "./chunk-7LXHVVG6.js";
import {
  Directionality
} from "./chunk-XWIMTWPL.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-5OZDTYGQ.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-2FEUNJXP.js";
import {
  toNumber
} from "./chunk-47CTGUNN.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-EHVDKNZH.js";
import {
  NgTemplateOutlet
} from "./chunk-WKHAHOQ5.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  numberAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-UPQVIRVK.js";
import {
  ReplaySubject,
  Subject,
  takeUntil
} from "./chunk-6NJUVM7P.js";
import {
  __decorate
} from "./chunk-G7KAN2P5.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-pagination.mjs
var _c0 = ["nz-pagination-item", ""];
var _c1 = (a0, a1) => ({
  $implicit: a0,
  page: a1
});
function NzPaginationItemComponent_ng_template_0_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const page_r1 = ɵɵnextContext().page;
    ɵɵadvance();
    ɵɵtextInterpolate(page_r1);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 5);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 2);
    ɵɵtemplate(1, NzPaginationItemComponent_ng_template_0_Case_1_Conditional_1_Template, 1, 0, "span", 4)(2, NzPaginationItemComponent_ng_template_0_Case_1_Conditional_2_Template, 1, 0, "span", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r1.disabled);
    ɵɵattribute("title", ctx_r1.locale.prev_page);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.direction === "rtl" ? 1 : 2);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 5);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 2);
    ɵɵtemplate(1, NzPaginationItemComponent_ng_template_0_Case_2_Conditional_1_Template, 1, 0, "span", 5)(2, NzPaginationItemComponent_ng_template_0_Case_2_Conditional_2_Template, 1, 0, "span", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r1.disabled);
    ɵɵattribute("title", ctx_r1.locale.next_page);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.direction === "rtl" ? 1 : 2);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 9);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Conditional_0_Template, 1, 0, "span", 8)(1, NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Conditional_1_Template, 1, 0, "span", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵconditional(ctx_r1.direction === "rtl" ? 0 : 1);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 9);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Conditional_0_Template, 1, 0, "span", 9)(1, NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Conditional_1_Template, 1, 0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵconditional(ctx_r1.direction === "rtl" ? 0 : 1);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 3)(1, "div", 6);
    ɵɵtemplate(2, NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Template, 2, 1)(3, NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Template, 2, 1);
    ɵɵelementStart(4, "span", 7);
    ɵɵtext(5, "•••");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const type_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵconditional((tmp_5_0 = type_r3) === "prev_5" ? 2 : tmp_5_0 === "next_5" ? 3 : -1);
  }
}
function NzPaginationItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzPaginationItemComponent_ng_template_0_Case_0_Template, 2, 1, "a")(1, NzPaginationItemComponent_ng_template_0_Case_1_Template, 3, 3, "button", 2)(2, NzPaginationItemComponent_ng_template_0_Case_2_Template, 3, 3, "button", 2)(3, NzPaginationItemComponent_ng_template_0_Case_3_Template, 6, 1, "a", 3);
  }
  if (rf & 2) {
    let tmp_4_0;
    const type_r3 = ctx.$implicit;
    ɵɵconditional((tmp_4_0 = type_r3) === "page" ? 0 : tmp_4_0 === "prev" ? 1 : tmp_4_0 === "next" ? 2 : 3);
  }
}
function NzPaginationItemComponent_ng_template_2_Template(rf, ctx) {
}
var _c2 = ["nz-pagination-options", ""];
var _forTrack0 = ($index, $item) => $item.value;
function NzPaginationOptionsComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-option", 3);
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    ɵɵproperty("nzLabel", option_r3.label)("nzValue", option_r3.value);
  }
}
function NzPaginationOptionsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-select", 2);
    ɵɵlistener("ngModelChange", function NzPaginationOptionsComponent_Conditional_0_Template_nz_select_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPageSizeChange($event));
    });
    ɵɵrepeaterCreate(1, NzPaginationOptionsComponent_Conditional_0_For_2_Template, 1, 2, "nz-option", 3, _forTrack0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("nzDisabled", ctx_r1.disabled)("nzSize", ctx_r1.nzSize)("ngModel", ctx_r1.pageSize);
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.listOfPageSizeOption);
  }
}
function NzPaginationOptionsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵtext(1);
    ɵɵelementStart(2, "input", 4);
    ɵɵlistener("keydown.enter", function NzPaginationOptionsComponent_Conditional_1_Template_input_keydown_enter_2_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.jumpToPageViaInput($event));
    });
    ɵɵelementEnd();
    ɵɵtext(3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.locale.jump_to, " ");
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.disabled);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.locale.page, " ");
  }
}
var _c3 = ["containerTemplate"];
var _c4 = (a0, a1) => ({
  $implicit: a0,
  range: a1
});
function NzPaginationDefaultComponent_ng_template_0_Conditional_1_ng_template_1_Template(rf, ctx) {
}
function NzPaginationDefaultComponent_ng_template_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 1);
    ɵɵtemplate(1, NzPaginationDefaultComponent_ng_template_0_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.showTotal)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c4, ctx_r0.total, ctx_r0.ranges));
  }
}
function NzPaginationDefaultComponent_ng_template_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 5);
    ɵɵlistener("gotoIndex", function NzPaginationDefaultComponent_ng_template_0_For_3_Template_li_gotoIndex_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.jumpPage($event));
    })("diffIndex", function NzPaginationDefaultComponent_ng_template_0_For_3_Template_li_diffIndex_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.jumpDiff($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const page_r3 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("locale", ctx_r0.locale)("type", page_r3.type)("index", page_r3.index)("disabled", !!page_r3.disabled)("itemRender", ctx_r0.itemRender)("active", ctx_r0.pageIndex === page_r3.index)("direction", ctx_r0.dir);
  }
}
function NzPaginationDefaultComponent_ng_template_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 6);
    ɵɵlistener("pageIndexChange", function NzPaginationDefaultComponent_ng_template_0_Conditional_4_Template_li_pageIndexChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onPageIndexChange($event));
    })("pageSizeChange", function NzPaginationDefaultComponent_ng_template_0_Conditional_4_Template_li_pageSizeChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onPageSizeChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("total", ctx_r0.total)("locale", ctx_r0.locale)("disabled", ctx_r0.disabled)("nzSize", ctx_r0.nzSize)("showSizeChanger", ctx_r0.showSizeChanger)("showQuickJumper", ctx_r0.showQuickJumper)("pageIndex", ctx_r0.pageIndex)("pageSize", ctx_r0.pageSize)("pageSizeOptions", ctx_r0.pageSizeOptions);
  }
}
function NzPaginationDefaultComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul");
    ɵɵtemplate(1, NzPaginationDefaultComponent_ng_template_0_Conditional_1_Template, 2, 5, "li", 1);
    ɵɵrepeaterCreate(2, NzPaginationDefaultComponent_ng_template_0_For_3_Template, 1, 7, "li", 2, ɵɵcomponentInstance().trackByPageItem, true);
    ɵɵtemplate(4, NzPaginationDefaultComponent_ng_template_0_Conditional_4_Template, 1, 9, "li", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r0.showTotal ? 1 : -1);
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.listOfPageItem);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r0.showQuickJumper || ctx_r0.showSizeChanger ? 4 : -1);
  }
}
function NzPaginationSimpleComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul")(1, "li", 1);
    ɵɵlistener("click", function NzPaginationSimpleComponent_ng_template_0_Template_li_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.prePage());
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "li", 2)(3, "input", 3);
    ɵɵlistener("keydown.enter", function NzPaginationSimpleComponent_ng_template_0_Template_input_keydown_enter_3_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.jumpToPageViaInput($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 4);
    ɵɵtext(5, "/");
    ɵɵelementEnd();
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "li", 5);
    ɵɵlistener("click", function NzPaginationSimpleComponent_ng_template_0_Template_li_click_7_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.nextPage());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("locale", ctx_r1.locale)("disabled", ctx_r1.isFirstIndex)("direction", ctx_r1.dir)("itemRender", ctx_r1.itemRender);
    ɵɵattribute("title", ctx_r1.locale.prev_page);
    ɵɵadvance();
    ɵɵattribute("title", ctx_r1.pageIndex + "/" + ctx_r1.lastIndex);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.disabled)("value", ctx_r1.pageIndex);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r1.lastIndex, " ");
    ɵɵadvance();
    ɵɵproperty("locale", ctx_r1.locale)("disabled", ctx_r1.isLastIndex)("direction", ctx_r1.dir)("itemRender", ctx_r1.itemRender);
    ɵɵattribute("title", ctx_r1.locale == null ? null : ctx_r1.locale.next_page);
  }
}
function NzPaginationComponent_Conditional_0_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function NzPaginationComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzPaginationComponent_Conditional_0_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const simplePagination_r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", simplePagination_r2.template);
  }
}
function NzPaginationComponent_Conditional_0_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzPaginationComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzPaginationComponent_Conditional_0_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const defaultPagination_r3 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", defaultPagination_r3.template);
  }
}
function NzPaginationComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzPaginationComponent_Conditional_0_Conditional_0_Template, 1, 1, null, 4)(1, NzPaginationComponent_Conditional_0_Conditional_1_Template, 1, 1, null, 4);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵconditional(ctx_r3.nzSimple ? 0 : 1);
  }
}
var _NzPaginationItemComponent = class _NzPaginationItemComponent {
  constructor() {
    this.active = false;
    this.index = null;
    this.disabled = false;
    this.direction = "ltr";
    this.type = null;
    this.itemRender = null;
    this.diffIndex = new EventEmitter();
    this.gotoIndex = new EventEmitter();
    this.title = null;
  }
  clickItem() {
    if (!this.disabled) {
      if (this.type === "page") {
        this.gotoIndex.emit(this.index);
      } else {
        this.diffIndex.emit({
          next: 1,
          prev: -1,
          prev_5: -5,
          next_5: 5
        }[this.type]);
      }
    }
  }
  ngOnChanges(changes) {
    const {
      locale,
      index,
      type
    } = changes;
    if (locale || index || type) {
      this.title = {
        page: `${this.index}`,
        next: this.locale?.next_page,
        prev: this.locale?.prev_page,
        prev_5: this.locale?.prev_5,
        next_5: this.locale?.next_5
      }[this.type];
    }
  }
};
_NzPaginationItemComponent.ɵfac = function NzPaginationItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzPaginationItemComponent)();
};
_NzPaginationItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzPaginationItemComponent,
  selectors: [["li", "nz-pagination-item", ""]],
  hostVars: 19,
  hostBindings: function NzPaginationItemComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function NzPaginationItemComponent_click_HostBindingHandler() {
        return ctx.clickItem();
      });
    }
    if (rf & 2) {
      ɵɵattribute("title", ctx.title);
      ɵɵclassProp("ant-pagination-prev", ctx.type === "prev")("ant-pagination-next", ctx.type === "next")("ant-pagination-item", ctx.type === "page")("ant-pagination-jump-prev", ctx.type === "prev_5")("ant-pagination-jump-prev-custom-icon", ctx.type === "prev_5")("ant-pagination-jump-next", ctx.type === "next_5")("ant-pagination-jump-next-custom-icon", ctx.type === "next_5")("ant-pagination-disabled", ctx.disabled)("ant-pagination-item-active", ctx.active);
    }
  },
  inputs: {
    active: "active",
    locale: "locale",
    index: "index",
    disabled: "disabled",
    direction: "direction",
    type: "type",
    itemRender: "itemRender"
  },
  outputs: {
    diffIndex: "diffIndex",
    gotoIndex: "gotoIndex"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c0,
  decls: 3,
  vars: 5,
  consts: [["renderItemTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", 1, "ant-pagination-item-link", 3, "disabled"], [1, "ant-pagination-item-link"], ["nz-icon", "", "nzType", "right"], ["nz-icon", "", "nzType", "left"], [1, "ant-pagination-item-container"], [1, "ant-pagination-item-ellipsis"], ["nz-icon", "", "nzType", "double-right", 1, "ant-pagination-item-link-icon"], ["nz-icon", "", "nzType", "double-left", 1, "ant-pagination-item-link-icon"]],
  template: function NzPaginationItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzPaginationItemComponent_ng_template_0_Template, 4, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NzPaginationItemComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }
    if (rf & 2) {
      const renderItemTemplate_r4 = ɵɵreference(1);
      ɵɵadvance(2);
      ɵɵproperty("ngTemplateOutlet", ctx.itemRender || renderItemTemplate_r4)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c1, ctx.type, ctx.index));
    }
  },
  dependencies: [NzIconModule, NzIconDirective, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var NzPaginationItemComponent = _NzPaginationItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationItemComponent, [{
    type: Component,
    args: [{
      selector: "li[nz-pagination-item]",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-template #renderItemTemplate let-type let-page="page">
      @switch (type) {
        @case ('page') {
          <a>{{ page }}</a>
        }
        @case ('prev') {
          <button type="button" [disabled]="disabled" [attr.title]="locale.prev_page" class="ant-pagination-item-link">
            @if (direction === 'rtl') {
              <span nz-icon nzType="right"></span>
            } @else {
              <span nz-icon nzType="left"></span>
            }
          </button>
        }
        @case ('next') {
          <button type="button" [disabled]="disabled" [attr.title]="locale.next_page" class="ant-pagination-item-link">
            @if (direction === 'rtl') {
              <span nz-icon nzType="left"></span>
            } @else {
              <span nz-icon nzType="right"></span>
            }
          </button>
        }
        @default {
          <a class="ant-pagination-item-link">
            <div class="ant-pagination-item-container">
              @switch (type) {
                @case ('prev_5') {
                  @if (direction === 'rtl') {
                    <span
                      nz-icon
                      nzType="double-right"
                      class="ant-pagination-item-link-icon"
                    ></span>
                  } @else {
                    <span nz-icon nzType="double-left" class="ant-pagination-item-link-icon"></span>
                  }
                }
                @case ('next_5') {
                  @if (direction === 'rtl') {
                    <span nz-icon nzType="double-left"
                          class="ant-pagination-item-link-icon"></span>
                  } @else {
                    <span nz-icon nzType="double-right" class="ant-pagination-item-link-icon"></span>
                  }
                }
              }
              <span class="ant-pagination-item-ellipsis">•••</span>
            </div>
          </a>
        }
      }
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="itemRender || renderItemTemplate"
      [ngTemplateOutletContext]="{ $implicit: type, page: index }"
    />
  `,
      host: {
        "[class.ant-pagination-prev]": `type === 'prev'`,
        "[class.ant-pagination-next]": `type === 'next'`,
        "[class.ant-pagination-item]": `type === 'page'`,
        "[class.ant-pagination-jump-prev]": `type === 'prev_5'`,
        "[class.ant-pagination-jump-prev-custom-icon]": `type === 'prev_5'`,
        "[class.ant-pagination-jump-next]": `type === 'next_5'`,
        "[class.ant-pagination-jump-next-custom-icon]": `type === 'next_5'`,
        "[class.ant-pagination-disabled]": "disabled",
        "[class.ant-pagination-item-active]": "active",
        "[attr.title]": "title",
        "(click)": "clickItem()"
      },
      imports: [NzIconModule, NgTemplateOutlet],
      standalone: true
    }]
  }], null, {
    active: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    direction: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    itemRender: [{
      type: Input
    }],
    diffIndex: [{
      type: Output
    }],
    gotoIndex: [{
      type: Output
    }]
  });
})();
var _NzPaginationOptionsComponent = class _NzPaginationOptionsComponent {
  constructor() {
    this.nzSize = "default";
    this.disabled = false;
    this.showSizeChanger = false;
    this.showQuickJumper = false;
    this.total = 0;
    this.pageIndex = 1;
    this.pageSize = 10;
    this.pageSizeOptions = [];
    this.pageIndexChange = new EventEmitter();
    this.pageSizeChange = new EventEmitter();
    this.listOfPageSizeOption = [];
  }
  onPageSizeChange(size) {
    if (this.pageSize !== size) {
      this.pageSizeChange.next(size);
    }
  }
  jumpToPageViaInput($event) {
    const target = $event.target;
    const index = Math.floor(toNumber(target.value, this.pageIndex));
    this.pageIndexChange.next(index);
    target.value = "";
  }
  ngOnChanges(changes) {
    const {
      pageSize,
      pageSizeOptions,
      locale
    } = changes;
    if (pageSize || pageSizeOptions || locale) {
      this.listOfPageSizeOption = [.../* @__PURE__ */ new Set([...this.pageSizeOptions, this.pageSize])].map((item) => ({
        value: item,
        label: `${item} ${this.locale.items_per_page}`
      }));
    }
  }
};
_NzPaginationOptionsComponent.ɵfac = function NzPaginationOptionsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzPaginationOptionsComponent)();
};
_NzPaginationOptionsComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzPaginationOptionsComponent,
  selectors: [["li", "nz-pagination-options", ""]],
  hostAttrs: [1, "ant-pagination-options"],
  inputs: {
    nzSize: "nzSize",
    disabled: "disabled",
    showSizeChanger: "showSizeChanger",
    showQuickJumper: "showQuickJumper",
    locale: "locale",
    total: "total",
    pageIndex: "pageIndex",
    pageSize: "pageSize",
    pageSizeOptions: "pageSizeOptions"
  },
  outputs: {
    pageIndexChange: "pageIndexChange",
    pageSizeChange: "pageSizeChange"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c2,
  decls: 2,
  vars: 2,
  consts: [[1, "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel"], [1, "ant-pagination-options-quick-jumper"], [1, "ant-pagination-options-size-changer", 3, "ngModelChange", "nzDisabled", "nzSize", "ngModel"], [3, "nzLabel", "nzValue"], [3, "keydown.enter", "disabled"]],
  template: function NzPaginationOptionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzPaginationOptionsComponent_Conditional_0_Template, 3, 3, "nz-select", 0)(1, NzPaginationOptionsComponent_Conditional_1_Template, 4, 3, "div", 1);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.showSizeChanger ? 0 : -1);
      ɵɵadvance();
      ɵɵconditional(ctx.showQuickJumper ? 1 : -1);
    }
  },
  dependencies: [NzSelectModule, NzOptionComponent, NzSelectComponent, FormsModule, NgControlStatus, NgModel],
  encapsulation: 2,
  changeDetection: 0
});
var NzPaginationOptionsComponent = _NzPaginationOptionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationOptionsComponent, [{
    type: Component,
    args: [{
      selector: "li[nz-pagination-options]",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (showSizeChanger) {
      <nz-select
        class="ant-pagination-options-size-changer"
        [nzDisabled]="disabled"
        [nzSize]="nzSize"
        [ngModel]="pageSize"
        (ngModelChange)="onPageSizeChange($event)"
      >
        @for (option of listOfPageSizeOption; track option.value) {
          <nz-option [nzLabel]="option.label" [nzValue]="option.value" />
        }
      </nz-select>
    }

    @if (showQuickJumper) {
      <div class="ant-pagination-options-quick-jumper">
        {{ locale.jump_to }}
        <input [disabled]="disabled" (keydown.enter)="jumpToPageViaInput($event)" />
        {{ locale.page }}
      </div>
    }
  `,
      host: {
        class: "ant-pagination-options"
      },
      imports: [NzSelectModule, FormsModule],
      standalone: true
    }]
  }], () => [], {
    nzSize: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    showSizeChanger: [{
      type: Input
    }],
    showQuickJumper: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    total: [{
      type: Input
    }],
    pageIndex: [{
      type: Input
    }],
    pageSize: [{
      type: Input
    }],
    pageSizeOptions: [{
      type: Input
    }],
    pageIndexChange: [{
      type: Output
    }],
    pageSizeChange: [{
      type: Output
    }]
  });
})();
var _NzPaginationDefaultComponent = class _NzPaginationDefaultComponent {
  constructor(cdr, renderer, elementRef, directionality) {
    this.cdr = cdr;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.directionality = directionality;
    this.nzSize = "default";
    this.itemRender = null;
    this.showTotal = null;
    this.disabled = false;
    this.showSizeChanger = false;
    this.showQuickJumper = false;
    this.total = 0;
    this.pageIndex = 1;
    this.pageSize = 10;
    this.pageSizeOptions = [10, 20, 30, 40];
    this.pageIndexChange = new EventEmitter();
    this.pageSizeChange = new EventEmitter();
    this.ranges = [0, 0];
    this.listOfPageItem = [];
    this.dir = "ltr";
    this.destroy$ = new Subject();
    renderer.removeChild(renderer.parentNode(elementRef.nativeElement), elementRef.nativeElement);
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.updateRtlStyle();
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.updateRtlStyle();
  }
  updateRtlStyle() {
    if (this.dir === "rtl") {
      this.renderer.addClass(this.elementRef.nativeElement, "ant-pagination-rtl");
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, "ant-pagination-rtl");
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  jumpPage(index) {
    this.onPageIndexChange(index);
  }
  jumpDiff(diff) {
    this.jumpPage(this.pageIndex + diff);
  }
  trackByPageItem(_, value) {
    return `${value.type}-${value.index}`;
  }
  onPageIndexChange(index) {
    this.pageIndexChange.next(index);
  }
  onPageSizeChange(size) {
    this.pageSizeChange.next(size);
  }
  getLastIndex(total, pageSize) {
    return Math.ceil(total / pageSize);
  }
  buildIndexes() {
    const lastIndex = this.getLastIndex(this.total, this.pageSize);
    this.listOfPageItem = this.getListOfPageItem(this.pageIndex, lastIndex);
  }
  getListOfPageItem(pageIndex, lastIndex) {
    const concatWithPrevNext = (listOfPage) => {
      const prevItem = {
        type: "prev",
        disabled: pageIndex === 1
      };
      const nextItem = {
        type: "next",
        disabled: pageIndex === lastIndex
      };
      return [prevItem, ...listOfPage, nextItem];
    };
    const generatePage = (start, end) => {
      const list = [];
      for (let i = start; i <= end; i++) {
        list.push({
          index: i,
          type: "page"
        });
      }
      return list;
    };
    if (lastIndex <= 9) {
      return concatWithPrevNext(generatePage(1, lastIndex));
    } else {
      const generateRangeItem = (selected, last) => {
        let listOfRange = [];
        const prevFiveItem = {
          type: "prev_5"
        };
        const nextFiveItem = {
          type: "next_5"
        };
        const firstPageItem = generatePage(1, 1);
        const lastPageItem = generatePage(lastIndex, lastIndex);
        if (selected < 5) {
          const maxLeft = selected === 4 ? 6 : 5;
          listOfRange = [...generatePage(2, maxLeft), nextFiveItem];
        } else if (selected < last - 3) {
          listOfRange = [prevFiveItem, ...generatePage(selected - 2, selected + 2), nextFiveItem];
        } else {
          const minRight = selected === last - 3 ? last - 5 : last - 4;
          listOfRange = [prevFiveItem, ...generatePage(minRight, last - 1)];
        }
        return [...firstPageItem, ...listOfRange, ...lastPageItem];
      };
      return concatWithPrevNext(generateRangeItem(pageIndex, lastIndex));
    }
  }
  ngOnChanges(changes) {
    const {
      pageIndex,
      pageSize,
      total
    } = changes;
    if (pageIndex || pageSize || total) {
      this.ranges = [(this.pageIndex - 1) * this.pageSize + 1, Math.min(this.pageIndex * this.pageSize, this.total)];
      this.buildIndexes();
    }
  }
};
_NzPaginationDefaultComponent.ɵfac = function NzPaginationDefaultComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzPaginationDefaultComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality));
};
_NzPaginationDefaultComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzPaginationDefaultComponent,
  selectors: [["nz-pagination-default"]],
  viewQuery: function NzPaginationDefaultComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c3, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
    }
  },
  inputs: {
    nzSize: "nzSize",
    itemRender: "itemRender",
    showTotal: "showTotal",
    disabled: "disabled",
    locale: "locale",
    showSizeChanger: "showSizeChanger",
    showQuickJumper: "showQuickJumper",
    total: "total",
    pageIndex: "pageIndex",
    pageSize: "pageSize",
    pageSizeOptions: "pageSizeOptions"
  },
  outputs: {
    pageIndexChange: "pageIndexChange",
    pageSizeChange: "pageSizeChange"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 0,
  consts: [["containerTemplate", ""], [1, "ant-pagination-total-text"], ["nz-pagination-item", "", 3, "locale", "type", "index", "disabled", "itemRender", "active", "direction"], ["nz-pagination-options", "", 3, "total", "locale", "disabled", "nzSize", "showSizeChanger", "showQuickJumper", "pageIndex", "pageSize", "pageSizeOptions"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-pagination-item", "", 3, "gotoIndex", "diffIndex", "locale", "type", "index", "disabled", "itemRender", "active", "direction"], ["nz-pagination-options", "", 3, "pageIndexChange", "pageSizeChange", "total", "locale", "disabled", "nzSize", "showSizeChanger", "showQuickJumper", "pageIndex", "pageSize", "pageSizeOptions"]],
  template: function NzPaginationDefaultComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzPaginationDefaultComponent_ng_template_0_Template, 5, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [NgTemplateOutlet, NzPaginationItemComponent, NzPaginationOptionsComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzPaginationDefaultComponent = _NzPaginationDefaultComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationDefaultComponent, [{
    type: Component,
    args: [{
      selector: "nz-pagination-default",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-template #containerTemplate>
      <ul>
        @if (showTotal) {
          <li class="ant-pagination-total-text">
            <ng-template
              [ngTemplateOutlet]="showTotal"
              [ngTemplateOutletContext]="{ $implicit: total, range: ranges }"
            />
          </li>
        }

        @for (page of listOfPageItem; track trackByPageItem($index, page)) {
          <li
            nz-pagination-item
            [locale]="locale"
            [type]="page.type"
            [index]="page.index"
            [disabled]="!!page.disabled"
            [itemRender]="itemRender"
            [active]="pageIndex === page.index"
            (gotoIndex)="jumpPage($event)"
            (diffIndex)="jumpDiff($event)"
            [direction]="dir"
          ></li>
        }

        @if (showQuickJumper || showSizeChanger) {
          <li
            nz-pagination-options
            [total]="total"
            [locale]="locale"
            [disabled]="disabled"
            [nzSize]="nzSize"
            [showSizeChanger]="showSizeChanger"
            [showQuickJumper]="showQuickJumper"
            [pageIndex]="pageIndex"
            [pageSize]="pageSize"
            [pageSizeOptions]="pageSizeOptions"
            (pageIndexChange)="onPageIndexChange($event)"
            (pageSizeChange)="onPageSizeChange($event)"
          ></li>
        }
      </ul>
    </ng-template>
  `,
      imports: [NgTemplateOutlet, NzPaginationItemComponent, NzPaginationOptionsComponent],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: Directionality
  }], {
    template: [{
      type: ViewChild,
      args: ["containerTemplate", {
        static: true
      }]
    }],
    nzSize: [{
      type: Input
    }],
    itemRender: [{
      type: Input
    }],
    showTotal: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    showSizeChanger: [{
      type: Input
    }],
    showQuickJumper: [{
      type: Input
    }],
    total: [{
      type: Input
    }],
    pageIndex: [{
      type: Input
    }],
    pageSize: [{
      type: Input
    }],
    pageSizeOptions: [{
      type: Input
    }],
    pageIndexChange: [{
      type: Output
    }],
    pageSizeChange: [{
      type: Output
    }]
  });
})();
var _NzPaginationSimpleComponent = class _NzPaginationSimpleComponent {
  constructor(cdr, renderer, elementRef, directionality) {
    this.cdr = cdr;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.directionality = directionality;
    this.itemRender = null;
    this.disabled = false;
    this.total = 0;
    this.pageIndex = 1;
    this.pageSize = 10;
    this.pageIndexChange = new EventEmitter();
    this.lastIndex = 0;
    this.isFirstIndex = false;
    this.isLastIndex = false;
    this.dir = "ltr";
    this.destroy$ = new Subject();
    renderer.removeChild(renderer.parentNode(elementRef.nativeElement), elementRef.nativeElement);
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.updateRtlStyle();
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.updateRtlStyle();
  }
  updateRtlStyle() {
    if (this.dir === "rtl") {
      this.renderer.addClass(this.elementRef.nativeElement, "ant-pagination-rtl");
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, "ant-pagination-rtl");
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  jumpToPageViaInput($event) {
    const target = $event.target;
    const index = toNumber(target.value, this.pageIndex);
    this.onPageIndexChange(index);
    target.value = `${this.pageIndex}`;
  }
  prePage() {
    this.onPageIndexChange(this.pageIndex - 1);
  }
  nextPage() {
    this.onPageIndexChange(this.pageIndex + 1);
  }
  onPageIndexChange(index) {
    this.pageIndexChange.next(index);
  }
  updateBindingValue() {
    this.lastIndex = Math.ceil(this.total / this.pageSize);
    this.isFirstIndex = this.pageIndex === 1;
    this.isLastIndex = this.pageIndex === this.lastIndex;
  }
  ngOnChanges(changes) {
    const {
      pageIndex,
      total,
      pageSize
    } = changes;
    if (pageIndex || total || pageSize) {
      this.updateBindingValue();
    }
  }
};
_NzPaginationSimpleComponent.ɵfac = function NzPaginationSimpleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzPaginationSimpleComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality));
};
_NzPaginationSimpleComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzPaginationSimpleComponent,
  selectors: [["nz-pagination-simple"]],
  viewQuery: function NzPaginationSimpleComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c3, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
    }
  },
  inputs: {
    itemRender: "itemRender",
    disabled: "disabled",
    locale: "locale",
    total: "total",
    pageIndex: "pageIndex",
    pageSize: "pageSize"
  },
  outputs: {
    pageIndexChange: "pageIndexChange"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 0,
  consts: [["containerTemplate", ""], ["nz-pagination-item", "", "type", "prev", 3, "click", "locale", "disabled", "direction", "itemRender"], [1, "ant-pagination-simple-pager"], ["size", "3", 3, "keydown.enter", "disabled", "value"], [1, "ant-pagination-slash"], ["nz-pagination-item", "", "type", "next", 3, "click", "locale", "disabled", "direction", "itemRender"]],
  template: function NzPaginationSimpleComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzPaginationSimpleComponent_ng_template_0_Template, 8, 14, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [NzPaginationItemComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzPaginationSimpleComponent = _NzPaginationSimpleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationSimpleComponent, [{
    type: Component,
    args: [{
      selector: "nz-pagination-simple",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-template #containerTemplate>
      <ul>
        <li
          nz-pagination-item
          [locale]="locale"
          [attr.title]="locale.prev_page"
          [disabled]="isFirstIndex"
          [direction]="dir"
          (click)="prePage()"
          type="prev"
          [itemRender]="itemRender"
        ></li>
        <li [attr.title]="pageIndex + '/' + lastIndex" class="ant-pagination-simple-pager">
          <input [disabled]="disabled" [value]="pageIndex" (keydown.enter)="jumpToPageViaInput($event)" size="3" />
          <span class="ant-pagination-slash">/</span>
          {{ lastIndex }}
        </li>
        <li
          nz-pagination-item
          [locale]="locale"
          [attr.title]="locale?.next_page"
          [disabled]="isLastIndex"
          [direction]="dir"
          (click)="nextPage()"
          type="next"
          [itemRender]="itemRender"
        ></li>
      </ul>
    </ng-template>
  `,
      imports: [NzPaginationItemComponent],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: Directionality
  }], {
    template: [{
      type: ViewChild,
      args: ["containerTemplate", {
        static: true
      }]
    }],
    itemRender: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    total: [{
      type: Input
    }],
    pageIndex: [{
      type: Input
    }],
    pageSize: [{
      type: Input
    }],
    pageIndexChange: [{
      type: Output
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "pagination";
var _NzPaginationComponent = class _NzPaginationComponent {
  validatePageIndex(value, lastIndex) {
    if (value > lastIndex) {
      return lastIndex;
    } else if (value < 1) {
      return 1;
    } else {
      return value;
    }
  }
  onPageIndexChange(index) {
    const lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);
    const validIndex = this.validatePageIndex(index, lastIndex);
    if (validIndex !== this.nzPageIndex && !this.nzDisabled) {
      this.nzPageIndex = validIndex;
      this.nzPageIndexChange.emit(this.nzPageIndex);
    }
  }
  onPageSizeChange(size) {
    this.nzPageSize = size;
    this.nzPageSizeChange.emit(size);
    const lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);
    if (this.nzPageIndex > lastIndex) {
      this.onPageIndexChange(lastIndex);
    }
  }
  onTotalChange(total) {
    const lastIndex = this.getLastIndex(total, this.nzPageSize);
    if (this.nzPageIndex > lastIndex) {
      Promise.resolve().then(() => {
        this.onPageIndexChange(lastIndex);
        this.cdr.markForCheck();
      });
    }
  }
  getLastIndex(total, pageSize) {
    return Math.ceil(total / pageSize);
  }
  constructor(i18n, cdr, breakpointService, nzConfigService, directionality) {
    this.i18n = i18n;
    this.cdr = cdr;
    this.breakpointService = breakpointService;
    this.nzConfigService = nzConfigService;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzPageSizeChange = new EventEmitter();
    this.nzPageIndexChange = new EventEmitter();
    this.nzShowTotal = null;
    this.nzItemRender = null;
    this.nzSize = "default";
    this.nzPageSizeOptions = [10, 20, 30, 40];
    this.nzShowSizeChanger = false;
    this.nzShowQuickJumper = false;
    this.nzSimple = false;
    this.nzDisabled = false;
    this.nzResponsive = false;
    this.nzHideOnSinglePage = false;
    this.nzTotal = 0;
    this.nzPageIndex = 1;
    this.nzPageSize = 10;
    this.showPagination = true;
    this.size = "default";
    this.dir = "ltr";
    this.destroy$ = new Subject();
    this.total$ = new ReplaySubject(1);
  }
  ngOnInit() {
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Pagination");
      this.cdr.markForCheck();
    });
    this.total$.pipe(takeUntil(this.destroy$)).subscribe((total) => {
      this.onTotalChange(total);
    });
    this.breakpointService.subscribe(gridResponsiveMap).pipe(takeUntil(this.destroy$)).subscribe((bp) => {
      if (this.nzResponsive) {
        this.size = bp === NzBreakpointEnum.xs ? "small" : "default";
        this.cdr.markForCheck();
      }
    });
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnChanges(changes) {
    const {
      nzHideOnSinglePage,
      nzTotal,
      nzPageSize,
      nzSize
    } = changes;
    if (nzTotal) {
      this.total$.next(this.nzTotal);
    }
    if (nzHideOnSinglePage || nzTotal || nzPageSize) {
      this.showPagination = this.nzHideOnSinglePage && this.nzTotal > this.nzPageSize || this.nzTotal > 0 && !this.nzHideOnSinglePage;
    }
    if (nzSize) {
      this.size = nzSize.currentValue;
    }
  }
};
_NzPaginationComponent.ɵfac = function NzPaginationComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzPaginationComponent)(ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzBreakpointService), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Directionality));
};
_NzPaginationComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzPaginationComponent,
  selectors: [["nz-pagination"]],
  hostAttrs: [1, "ant-pagination"],
  hostVars: 8,
  hostBindings: function NzPaginationComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-pagination-simple", ctx.nzSimple)("ant-pagination-disabled", ctx.nzDisabled)("ant-pagination-mini", !ctx.nzSimple && ctx.size === "small")("ant-pagination-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzShowTotal: "nzShowTotal",
    nzItemRender: "nzItemRender",
    nzSize: "nzSize",
    nzPageSizeOptions: "nzPageSizeOptions",
    nzShowSizeChanger: [2, "nzShowSizeChanger", "nzShowSizeChanger", booleanAttribute],
    nzShowQuickJumper: [2, "nzShowQuickJumper", "nzShowQuickJumper", booleanAttribute],
    nzSimple: [2, "nzSimple", "nzSimple", booleanAttribute],
    nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
    nzResponsive: [2, "nzResponsive", "nzResponsive", booleanAttribute],
    nzHideOnSinglePage: [2, "nzHideOnSinglePage", "nzHideOnSinglePage", booleanAttribute],
    nzTotal: [2, "nzTotal", "nzTotal", numberAttribute],
    nzPageIndex: [2, "nzPageIndex", "nzPageIndex", numberAttribute],
    nzPageSize: [2, "nzPageSize", "nzPageSize", numberAttribute]
  },
  outputs: {
    nzPageSizeChange: "nzPageSizeChange",
    nzPageIndexChange: "nzPageIndexChange"
  },
  exportAs: ["nzPagination"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 5,
  vars: 18,
  consts: [["simplePagination", ""], ["defaultPagination", ""], [3, "pageIndexChange", "disabled", "itemRender", "locale", "pageSize", "total", "pageIndex"], [3, "pageIndexChange", "pageSizeChange", "nzSize", "itemRender", "showTotal", "disabled", "locale", "showSizeChanger", "showQuickJumper", "total", "pageIndex", "pageSize", "pageSizeOptions"], [3, "ngTemplateOutlet"]],
  template: function NzPaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵtemplate(0, NzPaginationComponent_Conditional_0_Template, 2, 1);
      ɵɵelementStart(1, "nz-pagination-simple", 2, 0);
      ɵɵlistener("pageIndexChange", function NzPaginationComponent_Template_nz_pagination_simple_pageIndexChange_1_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onPageIndexChange($event));
      });
      ɵɵelementEnd();
      ɵɵelementStart(3, "nz-pagination-default", 3, 1);
      ɵɵlistener("pageIndexChange", function NzPaginationComponent_Template_nz_pagination_default_pageIndexChange_3_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onPageIndexChange($event));
      })("pageSizeChange", function NzPaginationComponent_Template_nz_pagination_default_pageSizeChange_3_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onPageSizeChange($event));
      });
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵconditional(ctx.showPagination ? 0 : -1);
      ɵɵadvance();
      ɵɵproperty("disabled", ctx.nzDisabled)("itemRender", ctx.nzItemRender)("locale", ctx.locale)("pageSize", ctx.nzPageSize)("total", ctx.nzTotal)("pageIndex", ctx.nzPageIndex);
      ɵɵadvance(2);
      ɵɵproperty("nzSize", ctx.size)("itemRender", ctx.nzItemRender)("showTotal", ctx.nzShowTotal)("disabled", ctx.nzDisabled)("locale", ctx.locale)("showSizeChanger", ctx.nzShowSizeChanger)("showQuickJumper", ctx.nzShowQuickJumper)("total", ctx.nzTotal)("pageIndex", ctx.nzPageIndex)("pageSize", ctx.nzPageSize)("pageSizeOptions", ctx.nzPageSizeOptions);
    }
  },
  dependencies: [NgTemplateOutlet, NzPaginationSimpleComponent, NzPaginationDefaultComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzPaginationComponent = _NzPaginationComponent;
__decorate([WithConfig()], NzPaginationComponent.prototype, "nzSize", void 0);
__decorate([WithConfig()], NzPaginationComponent.prototype, "nzPageSizeOptions", void 0);
__decorate([WithConfig()], NzPaginationComponent.prototype, "nzShowSizeChanger", void 0);
__decorate([WithConfig()], NzPaginationComponent.prototype, "nzShowQuickJumper", void 0);
__decorate([WithConfig()], NzPaginationComponent.prototype, "nzSimple", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationComponent, [{
    type: Component,
    args: [{
      selector: "nz-pagination",
      exportAs: "nzPagination",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (showPagination) {
      @if (nzSimple) {
        <ng-template [ngTemplateOutlet]="simplePagination.template" />
      } @else {
        <ng-template [ngTemplateOutlet]="defaultPagination.template" />
      }
    }

    <nz-pagination-simple
      #simplePagination
      [disabled]="nzDisabled"
      [itemRender]="nzItemRender"
      [locale]="locale"
      [pageSize]="nzPageSize"
      [total]="nzTotal"
      [pageIndex]="nzPageIndex"
      (pageIndexChange)="onPageIndexChange($event)"
    ></nz-pagination-simple>
    <nz-pagination-default
      #defaultPagination
      [nzSize]="size"
      [itemRender]="nzItemRender"
      [showTotal]="nzShowTotal"
      [disabled]="nzDisabled"
      [locale]="locale"
      [showSizeChanger]="nzShowSizeChanger"
      [showQuickJumper]="nzShowQuickJumper"
      [total]="nzTotal"
      [pageIndex]="nzPageIndex"
      [pageSize]="nzPageSize"
      [pageSizeOptions]="nzPageSizeOptions"
      (pageIndexChange)="onPageIndexChange($event)"
      (pageSizeChange)="onPageSizeChange($event)"
    ></nz-pagination-default>
  `,
      host: {
        class: "ant-pagination",
        "[class.ant-pagination-simple]": "nzSimple",
        "[class.ant-pagination-disabled]": "nzDisabled",
        "[class.ant-pagination-mini]": `!nzSimple && size === 'small'`,
        "[class.ant-pagination-rtl]": `dir === 'rtl'`
      },
      imports: [NgTemplateOutlet, NzPaginationSimpleComponent, NzPaginationDefaultComponent],
      standalone: true
    }]
  }], () => [{
    type: NzI18nService
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzBreakpointService
  }, {
    type: NzConfigService
  }, {
    type: Directionality
  }], {
    nzPageSizeChange: [{
      type: Output
    }],
    nzPageIndexChange: [{
      type: Output
    }],
    nzShowTotal: [{
      type: Input
    }],
    nzItemRender: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzPageSizeOptions: [{
      type: Input
    }],
    nzShowSizeChanger: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowQuickJumper: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSimple: [{
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
    nzResponsive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzHideOnSinglePage: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzTotal: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzPageIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzPageSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }]
  });
})();
var _NzPaginationModule = class _NzPaginationModule {
};
_NzPaginationModule.ɵfac = function NzPaginationModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzPaginationModule)();
};
_NzPaginationModule.ɵmod = ɵɵdefineNgModule({
  type: _NzPaginationModule,
  imports: [NzPaginationComponent, NzPaginationSimpleComponent, NzPaginationOptionsComponent, NzPaginationItemComponent, NzPaginationDefaultComponent],
  exports: [NzPaginationComponent]
});
_NzPaginationModule.ɵinj = ɵɵdefineInjector({
  imports: [NzPaginationComponent, NzPaginationSimpleComponent, NzPaginationOptionsComponent, NzPaginationItemComponent, NzPaginationDefaultComponent]
});
var NzPaginationModule = _NzPaginationModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationModule, [{
    type: NgModule,
    args: [{
      imports: [NzPaginationComponent, NzPaginationSimpleComponent, NzPaginationOptionsComponent, NzPaginationItemComponent, NzPaginationDefaultComponent],
      exports: [NzPaginationComponent]
    }]
  }], null, null);
})();

export {
  NzPaginationItemComponent,
  NzPaginationOptionsComponent,
  NzPaginationDefaultComponent,
  NzPaginationSimpleComponent,
  NzPaginationComponent,
  NzPaginationModule
};
//# sourceMappingURL=chunk-RI4AJGWJ.js.map
