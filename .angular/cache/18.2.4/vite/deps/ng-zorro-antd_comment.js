import {
  CdkPortalOutlet,
  TemplatePortal
} from "./chunk-WQ525UJX.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-W6APIEEI.js";
import {
  Directionality
} from "./chunk-XWIMTWPL.js";
import {
  NgForOf,
  NgIf
} from "./chunk-WKHAHOQ5.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  ContentChildren,
  Directive,
  Input,
  NgModule,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-UPQVIRVK.js";
import "./chunk-SUGG24LA.js";
import "./chunk-AKSWV4DA.js";
import {
  Subject,
  takeUntil
} from "./chunk-6NJUVM7P.js";
import "./chunk-G7KAN2P5.js";
import "./chunk-AIZRGZFI.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-comment.mjs
var _c0 = ["*"];
function NzCommentActionComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c1 = [[["nz-avatar", "nz-comment-avatar", ""]], [["nz-comment-content"]], "*"];
var _c2 = ["nz-avatar[nz-comment-avatar]", "nz-comment-content", "*"];
function NzCommentComponent_Conditional_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzAuthor);
  }
}
function NzCommentComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtemplate(1, NzCommentComponent_Conditional_5_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzAuthor);
  }
}
function NzCommentComponent_Conditional_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzDatetime);
  }
}
function NzCommentComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtemplate(1, NzCommentComponent_Conditional_6_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzDatetime);
  }
}
function NzCommentComponent_Conditional_8_For_2_ng_template_2_Template(rf, ctx) {
}
function NzCommentComponent_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li")(1, "span");
    ɵɵtemplate(2, NzCommentComponent_Conditional_8_For_2_ng_template_2_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const action_r2 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵproperty("nzCommentActionHost", action_r2.content);
  }
}
function NzCommentComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 6);
    ɵɵrepeaterCreate(1, NzCommentComponent_Conditional_8_For_2_Template, 3, 1, "li", null, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.actions);
  }
}
var _NzCommentAvatarDirective = class _NzCommentAvatarDirective {
};
_NzCommentAvatarDirective.ɵfac = function NzCommentAvatarDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzCommentAvatarDirective)();
};
_NzCommentAvatarDirective.ɵdir = ɵɵdefineDirective({
  type: _NzCommentAvatarDirective,
  selectors: [["nz-avatar", "nz-comment-avatar", ""]],
  exportAs: ["nzCommentAvatar"],
  standalone: true
});
var NzCommentAvatarDirective = _NzCommentAvatarDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCommentAvatarDirective, [{
    type: Directive,
    args: [{
      selector: "nz-avatar[nz-comment-avatar]",
      exportAs: "nzCommentAvatar",
      standalone: true
    }]
  }], null, null);
})();
var _NzCommentContentDirective = class _NzCommentContentDirective {
};
_NzCommentContentDirective.ɵfac = function NzCommentContentDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzCommentContentDirective)();
};
_NzCommentContentDirective.ɵdir = ɵɵdefineDirective({
  type: _NzCommentContentDirective,
  selectors: [["nz-comment-content"], ["", "nz-comment-content", ""]],
  hostAttrs: [1, "ant-comment-content-detail"],
  exportAs: ["nzCommentContent"],
  standalone: true
});
var NzCommentContentDirective = _NzCommentContentDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCommentContentDirective, [{
    type: Directive,
    args: [{
      selector: "nz-comment-content, [nz-comment-content]",
      exportAs: "nzCommentContent",
      host: {
        class: "ant-comment-content-detail"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzCommentActionHostDirective = class _NzCommentActionHostDirective extends CdkPortalOutlet {
  constructor(componentFactoryResolver, viewContainerRef) {
    super(componentFactoryResolver, viewContainerRef);
  }
  ngOnInit() {
    super.ngOnInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  ngAfterViewInit() {
    this.attach(this.nzCommentActionHost);
  }
};
_NzCommentActionHostDirective.ɵfac = function NzCommentActionHostDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzCommentActionHostDirective)(ɵɵdirectiveInject(ComponentFactoryResolver$1), ɵɵdirectiveInject(ViewContainerRef));
};
_NzCommentActionHostDirective.ɵdir = ɵɵdefineDirective({
  type: _NzCommentActionHostDirective,
  selectors: [["", "nzCommentActionHost", ""]],
  inputs: {
    nzCommentActionHost: "nzCommentActionHost"
  },
  exportAs: ["nzCommentActionHost"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature]
});
var NzCommentActionHostDirective = _NzCommentActionHostDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCommentActionHostDirective, [{
    type: Directive,
    args: [{
      selector: "[nzCommentActionHost]",
      exportAs: "nzCommentActionHost",
      standalone: true
    }]
  }], () => [{
    type: ComponentFactoryResolver$1
  }, {
    type: ViewContainerRef
  }], {
    nzCommentActionHost: [{
      type: Input
    }]
  });
})();
var _NzCommentActionComponent = class _NzCommentActionComponent {
  get content() {
    return this.contentPortal;
  }
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
    this.contentPortal = null;
  }
  ngOnInit() {
    this.contentPortal = new TemplatePortal(this.implicitContent, this.viewContainerRef);
  }
};
_NzCommentActionComponent.ɵfac = function NzCommentActionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzCommentActionComponent)(ɵɵdirectiveInject(ViewContainerRef));
};
_NzCommentActionComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzCommentActionComponent,
  selectors: [["nz-comment-action"]],
  viewQuery: function NzCommentActionComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(TemplateRef, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.implicitContent = _t.first);
    }
  },
  exportAs: ["nzCommentAction"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzCommentActionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzCommentActionComponent_ng_template_0_Template, 1, 0, "ng-template");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzCommentActionComponent = _NzCommentActionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCommentActionComponent, [{
    type: Component,
    args: [{
      selector: "nz-comment-action",
      exportAs: "nzCommentAction",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-template><ng-content /></ng-template>",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }], {
    implicitContent: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }]
  });
})();
var _NzCommentComponent = class _NzCommentComponent {
  constructor(cdr, directionality) {
    this.cdr = cdr;
    this.directionality = directionality;
    this.dir = "ltr";
    this.destroy$ = new Subject();
  }
  ngOnInit() {
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
};
_NzCommentComponent.ɵfac = function NzCommentComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzCommentComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality));
};
_NzCommentComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzCommentComponent,
  selectors: [["nz-comment"]],
  contentQueries: function NzCommentComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzCommentActionComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actions = _t);
    }
  },
  hostVars: 4,
  hostBindings: function NzCommentComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-comment", true)("ant-comment-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzAuthor: "nzAuthor",
    nzDatetime: "nzDatetime"
  },
  exportAs: ["nzComment"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c2,
  decls: 11,
  vars: 3,
  consts: [[1, "ant-comment-inner"], [1, "ant-comment-avatar"], [1, "ant-comment-content"], [1, "ant-comment-content-author"], [1, "ant-comment-content-author-name"], [1, "ant-comment-content-author-time"], [1, "ant-comment-actions"], [1, "ant-comment-nested"], [4, "nzStringTemplateOutlet"], [3, "nzCommentActionHost"]],
  template: function NzCommentComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵelementStart(0, "div", 0)(1, "div", 1);
      ɵɵprojection(2);
      ɵɵelementEnd();
      ɵɵelementStart(3, "div", 2)(4, "div", 3);
      ɵɵtemplate(5, NzCommentComponent_Conditional_5_Template, 2, 1, "span", 4)(6, NzCommentComponent_Conditional_6_Template, 2, 1, "span", 5);
      ɵɵelementEnd();
      ɵɵprojection(7, 1);
      ɵɵtemplate(8, NzCommentComponent_Conditional_8_Template, 3, 0, "ul", 6);
      ɵɵelementEnd()();
      ɵɵelementStart(9, "div", 7);
      ɵɵprojection(10, 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(5);
      ɵɵconditional(ctx.nzAuthor ? 5 : -1);
      ɵɵadvance();
      ɵɵconditional(ctx.nzDatetime ? 6 : -1);
      ɵɵadvance(2);
      ɵɵconditional((ctx.actions == null ? null : ctx.actions.length) ? 8 : -1);
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NzCommentActionHostDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzCommentComponent = _NzCommentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCommentComponent, [{
    type: Component,
    args: [{
      selector: "nz-comment",
      exportAs: "nzComment",
      template: `
    <div class="ant-comment-inner">
      <div class="ant-comment-avatar">
        <ng-content select="nz-avatar[nz-comment-avatar]"></ng-content>
      </div>
      <div class="ant-comment-content">
        <div class="ant-comment-content-author">
          @if (nzAuthor) {
            <span class="ant-comment-content-author-name">
              <ng-container *nzStringTemplateOutlet="nzAuthor">{{ nzAuthor }}</ng-container>
            </span>
          }
          @if (nzDatetime) {
            <span class="ant-comment-content-author-time">
              <ng-container *nzStringTemplateOutlet="nzDatetime">{{ nzDatetime }}</ng-container>
            </span>
          }
        </div>
        <ng-content select="nz-comment-content" />
        @if (actions?.length) {
          <ul class="ant-comment-actions">
            @for (action of actions; track action) {
              <li>
                <span><ng-template [nzCommentActionHost]="action.content" /></span>
              </li>
            }
          </ul>
        }
      </div>
    </div>
    <div class="ant-comment-nested">
      <ng-content />
    </div>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.ant-comment]": `true`,
        "[class.ant-comment-rtl]": `dir === "rtl"`
      },
      imports: [NgIf, NzOutletModule, NgForOf, NzCommentActionHostDirective],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Directionality
  }], {
    nzAuthor: [{
      type: Input
    }],
    nzDatetime: [{
      type: Input
    }],
    actions: [{
      type: ContentChildren,
      args: [NzCommentActionComponent]
    }]
  });
})();
var NZ_COMMENT_CELLS = [NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective];
var _NzCommentModule = class _NzCommentModule {
};
_NzCommentModule.ɵfac = function NzCommentModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzCommentModule)();
};
_NzCommentModule.ɵmod = ɵɵdefineNgModule({
  type: _NzCommentModule,
  imports: [NzCommentComponent, NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective],
  exports: [NzCommentComponent, NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective]
});
_NzCommentModule.ɵinj = ɵɵdefineInjector({
  imports: [NzCommentComponent]
});
var NzCommentModule = _NzCommentModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCommentModule, [{
    type: NgModule,
    args: [{
      imports: [NzCommentComponent, ...NZ_COMMENT_CELLS],
      exports: [NzCommentComponent, ...NZ_COMMENT_CELLS]
    }]
  }], null, null);
})();
export {
  NzCommentActionComponent,
  NzCommentActionHostDirective,
  NzCommentAvatarDirective,
  NzCommentComponent,
  NzCommentContentDirective,
  NzCommentModule
};
//# sourceMappingURL=ng-zorro-antd_comment.js.map
