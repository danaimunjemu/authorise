import {
  NzHighlightModule,
  NzHighlightPipe
} from "./chunk-D4W2AA6U.js";
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport
} from "./chunk-DXE2WUUP.js";
import {
  NzNoAnimationDirective
} from "./chunk-IONSZQDY.js";
import {
  treeCollapseMotion
} from "./chunk-54OBER76.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-W6APIEEI.js";
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
  NG_VALUE_ACCESSOR
} from "./chunk-EHVDKNZH.js";
import {
  NgStyle,
  NgTemplateOutlet
} from "./chunk-WKHAHOQ5.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  ViewChild,
  booleanAttribute,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵcontentQuery,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-UPQVIRVK.js";
import {
  fromEvent
} from "./chunk-AKSWV4DA.js";
import {
  BehaviorSubject,
  Subject,
  takeUntil
} from "./chunk-6NJUVM7P.js";
import {
  __decorate
} from "./chunk-G7KAN2P5.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-tree.mjs
var NzTreeNode = class _NzTreeNode {
  get treeService() {
    return this.service || this.parentNode && this.parentNode.treeService;
  }
  /**
   * Init nzTreeNode
   *
   * @param option: user's input
   * @param parent
   * @param service: base nzTreeService
   */
  constructor(option, parent = null, service = null) {
    this._title = "";
    this.level = 0;
    this.parentNode = null;
    this._icon = "";
    this._children = [];
    this._isLeaf = false;
    this._isChecked = false;
    this._isSelectable = false;
    this._isDisabled = false;
    this._isDisableCheckbox = false;
    this._isExpanded = false;
    this._isHalfChecked = false;
    this._isSelected = false;
    this._isLoading = false;
    this.canHide = false;
    this.isMatched = false;
    this.service = null;
    if (option instanceof _NzTreeNode) {
      return option;
    }
    this.service = service || null;
    this.origin = option;
    this.key = option.key;
    this.parentNode = parent;
    this._title = option.title || "---";
    this._icon = option.icon || "";
    this._isLeaf = option.isLeaf || false;
    this._children = [];
    this._isChecked = option.checked || false;
    this._isSelectable = option.disabled || option.selectable !== false;
    this._isDisabled = option.disabled || false;
    this._isDisableCheckbox = option.disableCheckbox || false;
    this._isExpanded = option.isLeaf ? false : option.expanded || false;
    this._isHalfChecked = false;
    this._isSelected = !option.disabled && option.selected || false;
    this._isLoading = false;
    this.isMatched = false;
    if (parent) {
      this.level = parent.level + 1;
    } else {
      this.level = 0;
    }
    if (typeof option.children !== "undefined" && option.children !== null) {
      option.children.forEach((nodeOptions) => {
        const s = this.treeService;
        if (s && !s.isCheckStrictly && option.checked && !option.disabled && !nodeOptions.disabled && !nodeOptions.disableCheckbox) {
          nodeOptions.checked = option.checked;
        }
        this._children.push(new _NzTreeNode(nodeOptions, this));
      });
    }
  }
  /**
   * auto generate
   * get
   * set
   */
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
    this.update();
  }
  get icon() {
    return this._icon;
  }
  set icon(value) {
    this._icon = value;
    this.update();
  }
  get children() {
    return this._children;
  }
  set children(value) {
    this._children = value;
    this.update();
  }
  get isLeaf() {
    return this._isLeaf;
  }
  set isLeaf(value) {
    this._isLeaf = value;
    this.update();
  }
  get isChecked() {
    return this._isChecked;
  }
  set isChecked(value) {
    this._isChecked = value;
    this.origin.checked = value;
    this.afterValueChange("isChecked");
  }
  get isHalfChecked() {
    return this._isHalfChecked;
  }
  set isHalfChecked(value) {
    this._isHalfChecked = value;
    this.afterValueChange("isHalfChecked");
  }
  get isSelectable() {
    return this._isSelectable;
  }
  set isSelectable(value) {
    this._isSelectable = value;
    this.update();
  }
  get isDisabled() {
    return this._isDisabled;
  }
  set isDisabled(value) {
    this._isDisabled = value;
    this.update();
  }
  get isDisableCheckbox() {
    return this._isDisableCheckbox;
  }
  set isDisableCheckbox(value) {
    this._isDisableCheckbox = value;
    this.update();
  }
  get isExpanded() {
    return this._isExpanded;
  }
  set isExpanded(value) {
    this._isExpanded = value;
    this.origin.expanded = value;
    this.afterValueChange("isExpanded");
    this.afterValueChange("reRender");
  }
  get isSelected() {
    return this._isSelected;
  }
  set isSelected(value) {
    this._isSelected = value;
    this.origin.selected = value;
    this.afterValueChange("isSelected");
  }
  get isLoading() {
    return this._isLoading;
  }
  set isLoading(value) {
    this._isLoading = value;
    this.update();
  }
  setSyncChecked(checked = false, halfChecked = false) {
    this.setChecked(checked, halfChecked);
    if (this.treeService && !this.treeService.isCheckStrictly) {
      this.treeService.conduct(this);
    }
  }
  setChecked(checked = false, halfChecked = false) {
    this.origin.checked = checked;
    this.isChecked = checked;
    this.isHalfChecked = halfChecked;
  }
  setExpanded(value) {
    this._isExpanded = value;
    this.origin.expanded = value;
    this.afterValueChange("isExpanded");
  }
  getParentNode() {
    return this.parentNode;
  }
  getChildren() {
    return this.children;
  }
  /**
   * Support appending child nodes by position. Leaf node cannot be appended.
   */
  addChildren(children, childPos = -1) {
    if (!this.isLeaf) {
      children.forEach((node) => {
        const refreshLevel = (n) => {
          n.getChildren().forEach((c) => {
            c.level = c.getParentNode().level + 1;
            c.origin.level = c.level;
            refreshLevel(c);
          });
        };
        let child = node;
        if (child instanceof _NzTreeNode) {
          child.parentNode = this;
        } else {
          child = new _NzTreeNode(node, this);
        }
        child.level = this.level + 1;
        child.origin.level = child.level;
        refreshLevel(child);
        try {
          childPos === -1 ? this.children.push(child) : this.children.splice(childPos, 0, child);
        } catch (e) {
        }
      });
      this.origin.children = this.getChildren().map((v) => v.origin);
      this.isLoading = false;
    }
    this.afterValueChange("addChildren");
    this.afterValueChange("reRender");
  }
  clearChildren() {
    this.afterValueChange("clearChildren");
    this.children = [];
    this.origin.children = [];
    this.afterValueChange("reRender");
  }
  remove() {
    const parentNode = this.getParentNode();
    if (parentNode) {
      parentNode.children = parentNode.getChildren().filter((v) => v.key !== this.key);
      parentNode.origin.children = parentNode.origin.children.filter((v) => v.key !== this.key);
      this.afterValueChange("remove");
      this.afterValueChange("reRender");
    }
  }
  afterValueChange(key) {
    if (this.treeService) {
      switch (key) {
        case "isChecked":
          this.treeService.setCheckedNodeList(this);
          break;
        case "isHalfChecked":
          this.treeService.setHalfCheckedNodeList(this);
          break;
        case "isExpanded":
          this.treeService.setExpandedNodeList(this);
          break;
        case "isSelected":
          this.treeService.setNodeActive(this);
          break;
        case "clearChildren":
          this.treeService.afterRemove(this.getChildren());
          break;
        case "remove":
          this.treeService.afterRemove([this]);
          break;
        case "reRender":
          this.treeService.flattenTreeData(this.treeService.rootNodes, this.treeService.getExpandedNodeList().map((v) => v.key));
          break;
      }
    }
    this.update();
  }
  update() {
    if (this.component) {
      this.component.markForCheck();
    }
  }
};
function isCheckDisabled(node) {
  const {
    isDisabled,
    isDisableCheckbox
  } = node;
  return !!(isDisabled || isDisableCheckbox);
}
function isInArray(needle, haystack) {
  return haystack.length > 0 && haystack.indexOf(needle) > -1;
}
function getPosition(level, index) {
  return `${level}-${index}`;
}
function getKey(key, pos) {
  if (key !== null && key !== void 0) {
    return key;
  }
  return pos;
}
function flattenTreeData(treeNodeList = [], expandedKeys = []) {
  const expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
  const flattenList = [];
  function dig(list, parent = null) {
    return list.map((treeNode, index) => {
      const pos = getPosition(parent ? parent.pos : "0", index);
      const mergedKey = getKey(treeNode.key, pos);
      treeNode.isStart = [...parent ? parent.isStart : [], index === 0];
      treeNode.isEnd = [...parent ? parent.isEnd : [], index === list.length - 1];
      const flattenNode = {
        parent,
        pos,
        children: [],
        data: treeNode,
        isStart: [...parent ? parent.isStart : [], index === 0],
        isEnd: [...parent ? parent.isEnd : [], index === list.length - 1]
      };
      flattenList.push(flattenNode);
      if (expandedKeys === true || expandedKeySet.has(mergedKey) || treeNode.isExpanded) {
        flattenNode.children = dig(treeNode.children || [], flattenNode);
      } else {
        flattenNode.children = [];
      }
      return flattenNode;
    });
  }
  dig(treeNodeList);
  return flattenList;
}
var _NzTreeBaseService = class _NzTreeBaseService {
  constructor() {
    this.DRAG_SIDE_RANGE = 0.25;
    this.DRAG_MIN_GAP = 2;
    this.isCheckStrictly = false;
    this.isMultiple = false;
    this.rootNodes = [];
    this.flattenNodes$ = new BehaviorSubject([]);
    this.selectedNodeList = [];
    this.expandedNodeList = [];
    this.checkedNodeList = [];
    this.halfCheckedNodeList = [];
    this.matchedNodeList = [];
  }
  /**
   * reset tree nodes will clear default node list
   */
  initTree(nzNodes) {
    this.rootNodes = nzNodes;
    this.expandedNodeList = [];
    this.selectedNodeList = [];
    this.halfCheckedNodeList = [];
    this.checkedNodeList = [];
    this.matchedNodeList = [];
  }
  flattenTreeData(nzNodes, expandedKeys = []) {
    this.flattenNodes$.next(flattenTreeData(nzNodes, expandedKeys).map((item) => item.data));
  }
  getSelectedNode() {
    return this.selectedNode;
  }
  /**
   * get some list
   */
  getSelectedNodeList() {
    return this.conductNodeState("select");
  }
  /**
   * get checked node keys
   */
  getCheckedNodeKeys() {
    const keys = [];
    const checkedNodes = this.getCheckedNodeList();
    const calc = (nodes) => {
      nodes.forEach((node) => {
        keys.push(node.key);
        if (node.children.length < 1) return;
        calc(node.children);
      });
    };
    calc(checkedNodes);
    return keys;
  }
  /**
   * return checked nodes
   */
  getCheckedNodeList() {
    return this.conductNodeState("check");
  }
  getHalfCheckedNodeList() {
    return this.conductNodeState("halfCheck");
  }
  /**
   * return expanded nodes
   */
  getExpandedNodeList() {
    return this.conductNodeState("expand");
  }
  /**
   * return search matched nodes
   */
  getMatchedNodeList() {
    return this.conductNodeState("match");
  }
  isArrayOfNzTreeNode(value) {
    return value.every((item) => item instanceof NzTreeNode);
  }
  /**
   * set drag node
   */
  setSelectedNode(node) {
    this.selectedNode = node;
  }
  /**
   * set node selected status
   */
  setNodeActive(node) {
    if (!this.isMultiple && node.isSelected) {
      this.selectedNodeList.forEach((n) => {
        if (node.key !== n.key) {
          n.isSelected = false;
        }
      });
      this.selectedNodeList = [];
    }
    this.setSelectedNodeList(node, this.isMultiple);
  }
  /**
   * add or remove node to selectedNodeList
   */
  setSelectedNodeList(node, isMultiple = false) {
    const index = this.getIndexOfArray(this.selectedNodeList, node.key);
    if (isMultiple) {
      if (node.isSelected && index === -1) {
        this.selectedNodeList.push(node);
      }
    } else {
      if (node.isSelected && index === -1) {
        this.selectedNodeList = [node];
      }
    }
    if (!node.isSelected) {
      this.selectedNodeList = this.selectedNodeList.filter((n) => n.key !== node.key);
    }
  }
  /**
   * merge checked nodes
   */
  setHalfCheckedNodeList(node) {
    const index = this.getIndexOfArray(this.halfCheckedNodeList, node.key);
    if (node.isHalfChecked && index === -1) {
      this.halfCheckedNodeList.push(node);
    } else if (!node.isHalfChecked && index > -1) {
      this.halfCheckedNodeList = this.halfCheckedNodeList.filter((n) => node.key !== n.key);
    }
  }
  setCheckedNodeList(node) {
    const index = this.getIndexOfArray(this.checkedNodeList, node.key);
    if (node.isChecked && index === -1) {
      this.checkedNodeList.push(node);
    } else if (!node.isChecked && index > -1) {
      this.checkedNodeList = this.checkedNodeList.filter((n) => node.key !== n.key);
    }
  }
  /**
   * conduct checked/selected/expanded keys
   */
  conductNodeState(type = "check") {
    let resultNodesList = [];
    switch (type) {
      case "select":
        resultNodesList = this.selectedNodeList;
        break;
      case "expand":
        resultNodesList = this.expandedNodeList;
        break;
      case "match":
        resultNodesList = this.matchedNodeList;
        break;
      case "check":
        resultNodesList = this.checkedNodeList;
        const isIgnore = (node) => {
          const parentNode = node.getParentNode();
          if (parentNode) {
            if (this.checkedNodeList.findIndex((n) => n.key === parentNode.key) > -1) {
              return true;
            } else {
              return isIgnore(parentNode);
            }
          }
          return false;
        };
        if (!this.isCheckStrictly) {
          resultNodesList = this.checkedNodeList.filter((n) => !isIgnore(n));
        }
        break;
      case "halfCheck":
        if (!this.isCheckStrictly) {
          resultNodesList = this.halfCheckedNodeList;
        }
        break;
    }
    return resultNodesList;
  }
  /**
   * set expanded nodes
   */
  setExpandedNodeList(node) {
    if (node.isLeaf) {
      return;
    }
    const index = this.getIndexOfArray(this.expandedNodeList, node.key);
    if (node.isExpanded && index === -1) {
      this.expandedNodeList.push(node);
    } else if (!node.isExpanded && index > -1) {
      this.expandedNodeList.splice(index, 1);
    }
  }
  setMatchedNodeList(node) {
    const index = this.getIndexOfArray(this.matchedNodeList, node.key);
    if (node.isMatched && index === -1) {
      this.matchedNodeList.push(node);
    } else if (!node.isMatched && index > -1) {
      this.matchedNodeList.splice(index, 1);
    }
  }
  /**
   * check state
   *
   * @param isCheckStrictly
   */
  refreshCheckState(isCheckStrictly = false) {
    if (isCheckStrictly) {
      return;
    }
    this.checkedNodeList.forEach((node) => {
      this.conduct(node, isCheckStrictly);
    });
  }
  // reset other node checked state based current node
  conduct(node, isCheckStrictly = false) {
    const isChecked = node.isChecked;
    if (node && !isCheckStrictly) {
      this.conductUp(node);
      this.conductDown(node, isChecked);
    }
  }
  /**
   * 1、children half checked
   * 2、children all checked, parent checked
   * 3、no children checked
   */
  conductUp(node) {
    const parentNode = node.getParentNode();
    if (parentNode) {
      if (!isCheckDisabled(parentNode)) {
        if (parentNode.children.every((child) => isCheckDisabled(child) || !child.isHalfChecked && child.isChecked)) {
          parentNode.isChecked = true;
          parentNode.isHalfChecked = false;
        } else if (parentNode.children.some((child) => child.isHalfChecked || child.isChecked)) {
          parentNode.isChecked = false;
          parentNode.isHalfChecked = true;
        } else {
          parentNode.isChecked = false;
          parentNode.isHalfChecked = false;
        }
      }
      this.setCheckedNodeList(parentNode);
      this.setHalfCheckedNodeList(parentNode);
      this.conductUp(parentNode);
    }
  }
  /**
   * reset child check state
   */
  conductDown(node, value) {
    if (!isCheckDisabled(node)) {
      node.isChecked = value;
      node.isHalfChecked = false;
      this.setCheckedNodeList(node);
      this.setHalfCheckedNodeList(node);
      node.children.forEach((n) => {
        this.conductDown(n, value);
      });
    }
  }
  /**
   * flush after delete node
   */
  afterRemove(nodes) {
    const loopNode = (node) => {
      this.selectedNodeList = this.selectedNodeList.filter((n) => n.key !== node.key);
      this.expandedNodeList = this.expandedNodeList.filter((n) => n.key !== node.key);
      this.checkedNodeList = this.checkedNodeList.filter((n) => n.key !== node.key);
      if (node.children) {
        node.children.forEach((child) => {
          loopNode(child);
        });
      }
    };
    nodes.forEach((n) => {
      loopNode(n);
    });
    this.refreshCheckState(this.isCheckStrictly);
  }
  /**
   * drag event
   */
  refreshDragNode(node) {
    if (node.children.length === 0) {
      this.conductUp(node);
    } else {
      node.children.forEach((child) => {
        this.refreshDragNode(child);
      });
    }
  }
  // reset node level
  resetNodeLevel(node) {
    const parentNode = node.getParentNode();
    if (parentNode) {
      node.level = parentNode.level + 1;
    } else {
      node.level = 0;
    }
    for (const child of node.children) {
      this.resetNodeLevel(child);
    }
  }
  calcDropPosition(event) {
    const {
      clientY
    } = event;
    const {
      top,
      bottom,
      height
    } = event.target.getBoundingClientRect();
    const des = Math.max(height * this.DRAG_SIDE_RANGE, this.DRAG_MIN_GAP);
    if (clientY <= top + des) {
      return -1;
    } else if (clientY >= bottom - des) {
      return 1;
    }
    return 0;
  }
  /**
   * drop
   * 0: inner -1: pre 1: next
   */
  dropAndApply(targetNode, dragPos = -1) {
    if (!targetNode || dragPos > 1) {
      return;
    }
    const treeService = targetNode.treeService;
    const targetParent = targetNode.getParentNode();
    const isSelectedRootNode = this.selectedNode.getParentNode();
    if (isSelectedRootNode) {
      isSelectedRootNode.children = isSelectedRootNode.children.filter((n) => n.key !== this.selectedNode.key);
    } else {
      this.rootNodes = this.rootNodes.filter((n) => n.key !== this.selectedNode.key);
    }
    switch (dragPos) {
      case 0:
        targetNode.addChildren([this.selectedNode]);
        this.resetNodeLevel(targetNode);
        break;
      case -1:
      case 1:
        const tIndex = dragPos === 1 ? 1 : 0;
        if (targetParent) {
          targetParent.addChildren([this.selectedNode], targetParent.children.indexOf(targetNode) + tIndex);
          const parentNode = this.selectedNode.getParentNode();
          if (parentNode) {
            this.resetNodeLevel(parentNode);
          }
        } else {
          const targetIndex = this.rootNodes.indexOf(targetNode) + tIndex;
          this.rootNodes.splice(targetIndex, 0, this.selectedNode);
          this.rootNodes[targetIndex].parentNode = null;
          this.resetNodeLevel(this.rootNodes[targetIndex]);
        }
        break;
    }
    this.rootNodes.forEach((child) => {
      if (!child.treeService) {
        child.service = treeService;
      }
      this.refreshDragNode(child);
    });
  }
  /**
   * emit Structure
   * eventName
   * node
   * event: MouseEvent / DragEvent
   * dragNode
   */
  formatEvent(eventName, node, event) {
    const emitStructure = {
      eventName,
      node,
      event
    };
    switch (eventName) {
      case "dragstart":
      case "dragenter":
      case "dragover":
      case "dragleave":
      case "drop":
      case "dragend":
        Object.assign(emitStructure, {
          dragNode: this.getSelectedNode()
        });
        break;
      case "click":
      case "dblclick":
        Object.assign(emitStructure, {
          selectedKeys: this.selectedNodeList
        });
        Object.assign(emitStructure, {
          nodes: this.selectedNodeList
        });
        Object.assign(emitStructure, {
          keys: this.selectedNodeList.map((n) => n.key)
        });
        break;
      case "check":
        const checkedNodeList = this.getCheckedNodeList();
        Object.assign(emitStructure, {
          checkedKeys: checkedNodeList
        });
        Object.assign(emitStructure, {
          nodes: checkedNodeList
        });
        Object.assign(emitStructure, {
          keys: checkedNodeList.map((n) => n.key)
        });
        break;
      case "search":
        Object.assign(emitStructure, {
          matchedKeys: this.getMatchedNodeList()
        });
        Object.assign(emitStructure, {
          nodes: this.getMatchedNodeList()
        });
        Object.assign(emitStructure, {
          keys: this.getMatchedNodeList().map((n) => n.key)
        });
        break;
      case "expand":
        Object.assign(emitStructure, {
          nodes: this.expandedNodeList
        });
        Object.assign(emitStructure, {
          keys: this.expandedNodeList.map((n) => n.key)
        });
        break;
    }
    return emitStructure;
  }
  /**
   * New functions for flatten nodes
   */
  getIndexOfArray(list, key) {
    return list.findIndex((v) => v.key === key);
  }
  /**
   * Render by nzCheckedKeys
   * When keys equals null, just render with checkStrictly
   *
   * @param keys
   * @param checkStrictly
   */
  conductCheck(keys, checkStrictly) {
    this.checkedNodeList = [];
    this.halfCheckedNodeList = [];
    const calc = (nodes) => {
      nodes.forEach((node) => {
        if (keys === null) {
          node.isChecked = !!node.origin.checked;
        } else {
          if (isInArray(node.key, keys || [])) {
            node.isChecked = true;
            node.isHalfChecked = false;
          } else {
            node.isChecked = false;
            node.isHalfChecked = false;
          }
        }
        if (node.children.length > 0) {
          calc(node.children);
        }
      });
    };
    calc(this.rootNodes);
    this.refreshCheckState(checkStrictly);
  }
  conductExpandedKeys(keys = []) {
    const expandedKeySet = new Set(keys === true ? [] : keys);
    this.expandedNodeList = [];
    const calc = (nodes) => {
      nodes.forEach((node) => {
        node.setExpanded(keys === true || expandedKeySet.has(node.key) || node.isExpanded === true);
        if (node.isExpanded) {
          this.setExpandedNodeList(node);
        }
        if (node.children.length > 0) {
          calc(node.children);
        }
      });
    };
    calc(this.rootNodes);
  }
  conductSelectedKeys(keys, isMulti) {
    this.selectedNodeList.forEach((node) => node.isSelected = false);
    this.selectedNodeList = [];
    const calc = (nodes) => nodes.every((node) => {
      if (isInArray(node.key, keys)) {
        node.isSelected = true;
        this.setSelectedNodeList(node);
        if (!isMulti) {
          return false;
        }
      } else {
        node.isSelected = false;
      }
      if (node.children.length > 0) {
        return calc(node.children);
      }
      return true;
    });
    calc(this.rootNodes);
  }
  /**
   * Expand parent nodes by child node
   *
   * @param node
   */
  expandNodeAllParentBySearch(node) {
    const calc = (n) => {
      if (n) {
        n.canHide = false;
        n.setExpanded(true);
        this.setExpandedNodeList(n);
        if (n.getParentNode()) {
          return calc(n.getParentNode());
        }
      }
    };
    calc(node.getParentNode());
  }
};
_NzTreeBaseService.ɵfac = function NzTreeBaseService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzTreeBaseService)();
};
_NzTreeBaseService.ɵprov = ɵɵdefineInjectable({
  token: _NzTreeBaseService,
  factory: _NzTreeBaseService.ɵfac
});
var NzTreeBaseService = _NzTreeBaseService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeBaseService, [{
    type: Injectable
  }], null, null);
})();
var NzTreeHigherOrderServiceToken = new InjectionToken("NzTreeHigherOrder");
var NzTreeBase = class {
  constructor(nzTreeService) {
    this.nzTreeService = nzTreeService;
  }
  /**
   * Coerces a value({@link any[]}) to a TreeNodes({@link NzTreeNode[]})
   */
  coerceTreeNodes(value) {
    let nodes = [];
    if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
      nodes = value.map((item) => new NzTreeNode(item, null, this.nzTreeService));
    } else {
      nodes = value.map((item) => {
        item.service = this.nzTreeService;
        return item;
      });
    }
    return nodes;
  }
  /**
   * Get all nodes({@link NzTreeNode})
   */
  getTreeNodes() {
    return this.nzTreeService.rootNodes;
  }
  /**
   * Get {@link NzTreeNode} with key
   */
  getTreeNodeByKey(key) {
    const nodes = [];
    const getNode = (node) => {
      nodes.push(node);
      node.getChildren().forEach((n) => {
        getNode(n);
      });
    };
    this.getTreeNodes().forEach((n) => {
      getNode(n);
    });
    return nodes.find((n) => n.key === key) || null;
  }
  /**
   * Get checked nodes(merged)
   */
  getCheckedNodeList() {
    return this.nzTreeService.getCheckedNodeList();
  }
  /**
   * Get selected nodes
   */
  getSelectedNodeList() {
    return this.nzTreeService.getSelectedNodeList();
  }
  /**
   * Get half checked nodes
   */
  getHalfCheckedNodeList() {
    return this.nzTreeService.getHalfCheckedNodeList();
  }
  /**
   * Get expanded nodes
   */
  getExpandedNodeList() {
    return this.nzTreeService.getExpandedNodeList();
  }
  /**
   * Get matched nodes(if nzSearchValue is not null)
   */
  getMatchedNodeList() {
    return this.nzTreeService.getMatchedNodeList();
  }
};

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-tree.mjs
function NzTreeIndentComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span");
  }
  if (rf & 2) {
    const ɵ$index_1_r1 = ctx.$index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("ant-tree-indent-unit", !ctx_r1.nzSelectMode)("ant-select-tree-indent-unit", ctx_r1.nzSelectMode)("ant-select-tree-indent-unit-start", ctx_r1.nzSelectMode && ctx_r1.nzIsStart[ɵ$index_1_r1])("ant-tree-indent-unit-start", !ctx_r1.nzSelectMode && ctx_r1.nzIsStart[ɵ$index_1_r1])("ant-select-tree-indent-unit-end", ctx_r1.nzSelectMode && ctx_r1.nzIsEnd[ɵ$index_1_r1])("ant-tree-indent-unit-end", !ctx_r1.nzSelectMode && ctx_r1.nzIsEnd[ɵ$index_1_r1]);
  }
}
var _c0 = ["builtin", ""];
var _c1 = (a0, a1) => ({
  $implicit: a0,
  origin: a1
});
function NzTreeNodeSwitcherComponent_Conditional_0_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵclassProp("ant-select-tree-switcher-icon", ctx_r0.nzSelectMode)("ant-tree-switcher-icon", !ctx_r0.nzSelectMode);
  }
}
function NzTreeNodeSwitcherComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTreeNodeSwitcherComponent_Conditional_0_Conditional_0_ng_container_0_Template, 2, 4, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzExpandedIcon)("nzStringTemplateOutletContext", ɵɵpureFunction2(2, _c1, ctx_r0.context, ctx_r0.context.origin));
  }
}
function NzTreeNodeSwitcherComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 0);
  }
  if (rf & 2) {
    ɵɵproperty("nzSpin", true);
  }
}
function NzTreeNodeSwitcherComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTreeNodeSwitcherComponent_Conditional_0_Conditional_0_Template, 1, 5, "ng-container")(1, NzTreeNodeSwitcherComponent_Conditional_0_Conditional_1_Template, 1, 1, "span", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(!ctx_r0.isLoading ? 0 : 1);
  }
}
function NzTreeNodeSwitcherComponent_Conditional_1_Conditional_0_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵproperty("nzType", ctx_r0.isSwitcherOpen ? "minus-square" : "plus-square");
  }
}
function NzTreeNodeSwitcherComponent_Conditional_1_Conditional_0_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4);
  }
}
function NzTreeNodeSwitcherComponent_Conditional_1_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTreeNodeSwitcherComponent_Conditional_1_Conditional_0_ng_container_0_Conditional_1_Template, 1, 1, "span", 3)(2, NzTreeNodeSwitcherComponent_Conditional_1_Conditional_0_ng_container_0_Conditional_2_Template, 1, 0, "span", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.isShowLineIcon ? 1 : 2);
  }
}
function NzTreeNodeSwitcherComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTreeNodeSwitcherComponent_Conditional_1_Conditional_0_ng_container_0_Template, 3, 1, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzExpandedIcon)("nzStringTemplateOutletContext", ɵɵpureFunction2(2, _c1, ctx_r0.context, ctx_r0.context.origin));
  }
}
function NzTreeNodeSwitcherComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 0);
  }
  if (rf & 2) {
    ɵɵproperty("nzSpin", true);
  }
}
function NzTreeNodeSwitcherComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTreeNodeSwitcherComponent_Conditional_1_Conditional_0_Template, 1, 5, "ng-container")(1, NzTreeNodeSwitcherComponent_Conditional_1_Conditional_1_Template, 1, 1, "span", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(!ctx_r0.isLoading ? 0 : 1);
  }
}
function NzTreeNodeTitleComponent_ng_template_0_Template(rf, ctx) {
}
function NzTreeNodeTitleComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span")(1, "span");
    ɵɵelement(2, "span", 4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassProp("ant-tree-icon__open", ctx_r0.isSwitcherOpen)("ant-tree-icon__close", ctx_r0.isSwitcherClose)("ant-tree-icon_loading", ctx_r0.isLoading)("ant-select-tree-iconEle", ctx_r0.selectMode)("ant-tree-iconEle", !ctx_r0.selectMode);
    ɵɵadvance();
    ɵɵclassProp("ant-select-tree-iconEle", ctx_r0.selectMode)("ant-select-tree-icon__customize", ctx_r0.selectMode)("ant-tree-iconEle", !ctx_r0.selectMode)("ant-tree-icon__customize", !ctx_r0.selectMode);
    ɵɵadvance();
    ɵɵproperty("nzType", ctx_r0.icon);
  }
}
function NzTreeNodeTitleComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTreeNodeTitleComponent_Conditional_1_Conditional_0_Template, 3, 19, "span", 3);
    ɵɵelement(1, "span", 1);
    ɵɵpipe(2, "nzHighlight");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.icon && ctx_r0.showIcon ? 0 : -1);
    ɵɵadvance();
    ɵɵproperty("innerHTML", ɵɵpipeBind4(2, 2, ctx_r0.title, ctx_r0.matchedValue, "i", "font-highlight"), ɵɵsanitizeHtml);
  }
}
function NzTreeNodeTitleComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-tree-drop-indicator", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("dropPosition", ctx_r0.dragPosition)("level", ctx_r0.context.level);
  }
}
function NzTreeNodeBuiltinComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-tree-node-switcher", 4);
    ɵɵlistener("click", function NzTreeNodeBuiltinComponent_Conditional_1_Template_nz_tree_node_switcher_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.clickExpand($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("nzShowExpand", ctx_r1.nzShowExpand)("nzShowLine", ctx_r1.nzShowLine)("nzExpandedIcon", ctx_r1.nzExpandedIcon)("nzSelectMode", ctx_r1.nzSelectMode)("context", ctx_r1.nzTreeNode)("isLeaf", ctx_r1.isLeaf)("isExpanded", ctx_r1.isExpanded)("isLoading", ctx_r1.isLoading);
  }
}
function NzTreeNodeBuiltinComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-tree-node-checkbox", 5);
    ɵɵlistener("click", function NzTreeNodeBuiltinComponent_Conditional_2_Template_nz_tree_node_checkbox_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.clickCheckBox($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("nzSelectMode", ctx_r1.nzSelectMode)("isChecked", ctx_r1.isChecked)("isHalfChecked", ctx_r1.isHalfChecked)("isDisabled", ctx_r1.isDisabled)("isDisableCheckbox", ctx_r1.isDisableCheckbox);
  }
}
var _c2 = ["nzTreeTemplate"];
var _c3 = (a0) => ({
  $implicit: a0
});
function NzTreeComponent_Conditional_6_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function NzTreeComponent_Conditional_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTreeComponent_Conditional_6_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const node_r1 = ctx.$implicit;
    ɵɵnextContext(2);
    const nodeTemplate_r2 = ɵɵreference(9);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", nodeTemplate_r2)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, node_r1));
  }
}
function NzTreeComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 8);
    ɵɵtemplate(1, NzTreeComponent_Conditional_6_ng_container_1_Template, 2, 4, "ng-container", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleProp("height", ctx_r2.nzVirtualHeight);
    ɵɵclassProp("ant-select-tree-list-holder-inner", ctx_r2.nzSelectMode)("ant-tree-list-holder-inner", !ctx_r2.nzSelectMode);
    ɵɵproperty("itemSize", ctx_r2.nzVirtualItemSize)("minBufferPx", ctx_r2.nzVirtualMinBufferPx)("maxBufferPx", ctx_r2.nzVirtualMaxBufferPx);
    ɵɵadvance();
    ɵɵproperty("cdkVirtualForOf", ctx_r2.nzFlattenNodes)("cdkVirtualForTrackBy", ctx_r2.trackByFlattenNode);
  }
}
function NzTreeComponent_Conditional_7_For_2_ng_template_0_Template(rf, ctx) {
}
function NzTreeComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTreeComponent_Conditional_7_For_2_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const node_r4 = ctx.$implicit;
    ɵɵnextContext(2);
    const nodeTemplate_r2 = ɵɵreference(9);
    ɵɵproperty("ngTemplateOutlet", nodeTemplate_r2)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, node_r4));
  }
}
function NzTreeComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵrepeaterCreate(1, NzTreeComponent_Conditional_7_For_2_Template, 1, 4, null, 10, ɵɵcomponentInstance().trackByFlattenNode, true);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("ant-select-tree-list-holder-inner", ctx_r2.nzSelectMode)("ant-tree-list-holder-inner", !ctx_r2.nzSelectMode);
    ɵɵproperty("@.disabled", ctx_r2.beforeInit || !!(ctx_r2.noAnimation == null ? null : ctx_r2.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r2.noAnimation == null ? null : ctx_r2.noAnimation.nzNoAnimation)("@treeCollapseMotion", ctx_r2.nzFlattenNodes.length);
    ɵɵadvance();
    ɵɵrepeater(ctx_r2.nzFlattenNodes);
  }
}
function NzTreeComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-tree-node", 12);
    ɵɵlistener("nzExpandChange", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzExpandChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.eventTriggerChanged($event));
    })("nzClick", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzClick_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.eventTriggerChanged($event));
    })("nzDblClick", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzDblClick_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.eventTriggerChanged($event));
    })("nzContextMenu", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzContextMenu_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.eventTriggerChanged($event));
    })("nzCheckBoxChange", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzCheckBoxChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.eventTriggerChanged($event));
    })("nzOnDragStart", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzOnDragStart_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.eventTriggerChanged($event));
    })("nzOnDragEnter", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzOnDragEnter_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.eventTriggerChanged($event));
    })("nzOnDragOver", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzOnDragOver_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.eventTriggerChanged($event));
    })("nzOnDragLeave", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzOnDragLeave_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.eventTriggerChanged($event));
    })("nzOnDragEnd", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzOnDragEnd_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.eventTriggerChanged($event));
    })("nzOnDrop", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzOnDrop_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.eventTriggerChanged($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const treeNode_r6 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("icon", treeNode_r6.icon)("title", treeNode_r6.title)("isLoading", treeNode_r6.isLoading)("isSelected", treeNode_r6.isSelected)("isDisabled", treeNode_r6.isDisabled)("isMatched", treeNode_r6.isMatched)("isExpanded", treeNode_r6.isExpanded)("isLeaf", treeNode_r6.isLeaf)("isStart", treeNode_r6.isStart)("isEnd", treeNode_r6.isEnd)("isChecked", treeNode_r6.isChecked)("isHalfChecked", treeNode_r6.isHalfChecked)("isDisableCheckbox", treeNode_r6.isDisableCheckbox)("isSelectable", treeNode_r6.isSelectable)("canHide", treeNode_r6.canHide)("nzTreeNode", treeNode_r6)("nzSelectMode", ctx_r2.nzSelectMode)("nzShowLine", ctx_r2.nzShowLine)("nzExpandedIcon", ctx_r2.nzExpandedIcon)("nzDraggable", ctx_r2.nzDraggable)("nzCheckable", ctx_r2.nzCheckable)("nzShowExpand", ctx_r2.nzShowExpand)("nzAsyncData", ctx_r2.nzAsyncData)("nzSearchValue", ctx_r2.nzSearchValue)("nzHideUnMatched", ctx_r2.nzHideUnMatched)("nzBeforeDrop", ctx_r2.nzBeforeDrop)("nzShowIcon", ctx_r2.nzShowIcon)("nzTreeTemplate", ctx_r2.nzTreeTemplate || ctx_r2.nzTreeTemplateChild);
  }
}
var _NzTreeDropIndicatorComponent = class _NzTreeDropIndicatorComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.level = 1;
    this.direction = "ltr";
    this.style = {};
  }
  ngOnChanges(_changes) {
    this.renderIndicator(this.dropPosition, this.direction);
  }
  renderIndicator(dropPosition, direction = "ltr") {
    const offset = 4;
    const startPosition = direction === "ltr" ? "left" : "right";
    const endPosition = direction === "ltr" ? "right" : "left";
    const style = {
      [startPosition]: `${offset}px`,
      [endPosition]: "0px"
    };
    switch (dropPosition) {
      case -1:
        style.top = `${-3}px`;
        break;
      case 1:
        style.bottom = `${-3}px`;
        break;
      case 0:
        style.bottom = `${-3}px`;
        style[startPosition] = `${offset + 24}px`;
        break;
      default:
        style.display = "none";
        break;
    }
    this.style = style;
    this.cdr.markForCheck();
  }
};
_NzTreeDropIndicatorComponent.ɵfac = function NzTreeDropIndicatorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzTreeDropIndicatorComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzTreeDropIndicatorComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTreeDropIndicatorComponent,
  selectors: [["nz-tree-drop-indicator"]],
  hostVars: 4,
  hostBindings: function NzTreeDropIndicatorComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleMap(ctx.style);
      ɵɵclassProp("ant-tree-drop-indicator", true);
    }
  },
  inputs: {
    dropPosition: "dropPosition",
    level: [2, "level", "level", numberAttribute],
    direction: "direction"
  },
  exportAs: ["NzTreeDropIndicator"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function NzTreeDropIndicatorComponent_Template(rf, ctx) {
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzTreeDropIndicatorComponent = _NzTreeDropIndicatorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeDropIndicatorComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-drop-indicator",
      exportAs: "NzTreeDropIndicator",
      template: ``,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      host: {
        "[class.ant-tree-drop-indicator]": "true",
        "[style]": "style"
      },
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    dropPosition: [{
      type: Input
    }],
    level: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    direction: [{
      type: Input
    }]
  });
})();
var _NzTreeIndentComponent = class _NzTreeIndentComponent {
  constructor() {
    this.nzTreeLevel = 0;
    this.nzIsStart = [];
    this.nzIsEnd = [];
    this.nzSelectMode = false;
    this.listOfUnit = [];
  }
  ngOnChanges(changes) {
    const {
      nzTreeLevel
    } = changes;
    if (nzTreeLevel) {
      this.listOfUnit = [...new Array(nzTreeLevel.currentValue || 0)];
    }
  }
};
_NzTreeIndentComponent.ɵfac = function NzTreeIndentComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzTreeIndentComponent)();
};
_NzTreeIndentComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTreeIndentComponent,
  selectors: [["nz-tree-indent"]],
  hostVars: 5,
  hostBindings: function NzTreeIndentComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-hidden", true);
      ɵɵclassProp("ant-tree-indent", !ctx.nzSelectMode)("ant-select-tree-indent", ctx.nzSelectMode);
    }
  },
  inputs: {
    nzTreeLevel: "nzTreeLevel",
    nzIsStart: "nzIsStart",
    nzIsEnd: "nzIsEnd",
    nzSelectMode: "nzSelectMode"
  },
  exportAs: ["nzTreeIndent"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 0,
  consts: [[3, "ant-tree-indent-unit", "ant-select-tree-indent-unit", "ant-select-tree-indent-unit-start", "ant-tree-indent-unit-start", "ant-select-tree-indent-unit-end", "ant-tree-indent-unit-end"]],
  template: function NzTreeIndentComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵrepeaterCreate(0, NzTreeIndentComponent_For_1_Template, 1, 12, "span", 0, ɵɵrepeaterTrackByIndex);
    }
    if (rf & 2) {
      ɵɵrepeater(ctx.listOfUnit);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzTreeIndentComponent = _NzTreeIndentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeIndentComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-indent",
      exportAs: "nzTreeIndent",
      template: `
    @for (_ of listOfUnit; track $index; let i = $index) {
      <span
        [class.ant-tree-indent-unit]="!nzSelectMode"
        [class.ant-select-tree-indent-unit]="nzSelectMode"
        [class.ant-select-tree-indent-unit-start]="nzSelectMode && nzIsStart[i]"
        [class.ant-tree-indent-unit-start]="!nzSelectMode && nzIsStart[i]"
        [class.ant-select-tree-indent-unit-end]="nzSelectMode && nzIsEnd[i]"
        [class.ant-tree-indent-unit-end]="!nzSelectMode && nzIsEnd[i]"
      ></span>
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      host: {
        "[attr.aria-hidden]": "true",
        "[class.ant-tree-indent]": "!nzSelectMode",
        "[class.ant-select-tree-indent]": "nzSelectMode"
      },
      standalone: true
    }]
  }], null, {
    nzTreeLevel: [{
      type: Input
    }],
    nzIsStart: [{
      type: Input
    }],
    nzIsEnd: [{
      type: Input
    }],
    nzSelectMode: [{
      type: Input
    }]
  });
})();
var _NzTreeNodeBuiltinCheckboxComponent = class _NzTreeNodeBuiltinCheckboxComponent {
  constructor() {
    this.nzSelectMode = false;
  }
};
_NzTreeNodeBuiltinCheckboxComponent.ɵfac = function NzTreeNodeBuiltinCheckboxComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzTreeNodeBuiltinCheckboxComponent)();
};
_NzTreeNodeBuiltinCheckboxComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTreeNodeBuiltinCheckboxComponent,
  selectors: [["nz-tree-node-checkbox", "builtin", ""]],
  hostVars: 16,
  hostBindings: function NzTreeNodeBuiltinCheckboxComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-select-tree-checkbox", ctx.nzSelectMode)("ant-select-tree-checkbox-checked", ctx.nzSelectMode && ctx.isChecked)("ant-select-tree-checkbox-indeterminate", ctx.nzSelectMode && ctx.isHalfChecked)("ant-select-tree-checkbox-disabled", ctx.nzSelectMode && (ctx.isDisabled || ctx.isDisableCheckbox))("ant-tree-checkbox", !ctx.nzSelectMode)("ant-tree-checkbox-checked", !ctx.nzSelectMode && ctx.isChecked)("ant-tree-checkbox-indeterminate", !ctx.nzSelectMode && ctx.isHalfChecked)("ant-tree-checkbox-disabled", !ctx.nzSelectMode && (ctx.isDisabled || ctx.isDisableCheckbox));
    }
  },
  inputs: {
    nzSelectMode: "nzSelectMode",
    isChecked: [2, "isChecked", "isChecked", booleanAttribute],
    isHalfChecked: [2, "isHalfChecked", "isHalfChecked", booleanAttribute],
    isDisabled: [2, "isDisabled", "isDisabled", booleanAttribute],
    isDisableCheckbox: [2, "isDisableCheckbox", "isDisableCheckbox", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  attrs: _c0,
  decls: 1,
  vars: 4,
  template: function NzTreeNodeBuiltinCheckboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "span");
    }
    if (rf & 2) {
      ɵɵclassProp("ant-tree-checkbox-inner", !ctx.nzSelectMode)("ant-select-tree-checkbox-inner", ctx.nzSelectMode);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzTreeNodeBuiltinCheckboxComponent = _NzTreeNodeBuiltinCheckboxComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeBuiltinCheckboxComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-node-checkbox[builtin]",
      template: `
    <span [class.ant-tree-checkbox-inner]="!nzSelectMode" [class.ant-select-tree-checkbox-inner]="nzSelectMode"></span>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      host: {
        "[class.ant-select-tree-checkbox]": `nzSelectMode`,
        "[class.ant-select-tree-checkbox-checked]": `nzSelectMode && isChecked`,
        "[class.ant-select-tree-checkbox-indeterminate]": `nzSelectMode && isHalfChecked`,
        "[class.ant-select-tree-checkbox-disabled]": `nzSelectMode && (isDisabled || isDisableCheckbox)`,
        "[class.ant-tree-checkbox]": `!nzSelectMode`,
        "[class.ant-tree-checkbox-checked]": `!nzSelectMode && isChecked`,
        "[class.ant-tree-checkbox-indeterminate]": `!nzSelectMode && isHalfChecked`,
        "[class.ant-tree-checkbox-disabled]": `!nzSelectMode && (isDisabled || isDisableCheckbox)`
      },
      standalone: true
    }]
  }], null, {
    nzSelectMode: [{
      type: Input
    }],
    isChecked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isHalfChecked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isDisableCheckbox: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _NzTreeNodeSwitcherComponent = class _NzTreeNodeSwitcherComponent {
  constructor() {
    this.nzSelectMode = false;
  }
  get isShowLineIcon() {
    return !this.isLeaf && !!this.nzShowLine;
  }
  get isShowSwitchIcon() {
    return !this.isLeaf && !this.nzShowLine;
  }
  get isSwitcherOpen() {
    return !!this.isExpanded && !this.isLeaf;
  }
  get isSwitcherClose() {
    return !this.isExpanded && !this.isLeaf;
  }
};
_NzTreeNodeSwitcherComponent.ɵfac = function NzTreeNodeSwitcherComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzTreeNodeSwitcherComponent)();
};
_NzTreeNodeSwitcherComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTreeNodeSwitcherComponent,
  selectors: [["nz-tree-node-switcher"]],
  hostVars: 16,
  hostBindings: function NzTreeNodeSwitcherComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-select-tree-switcher", ctx.nzSelectMode)("ant-select-tree-switcher-noop", ctx.nzSelectMode && ctx.isLeaf)("ant-select-tree-switcher_open", ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-select-tree-switcher_close", ctx.nzSelectMode && ctx.isSwitcherClose)("ant-tree-switcher", !ctx.nzSelectMode)("ant-tree-switcher-noop", !ctx.nzSelectMode && ctx.isLeaf)("ant-tree-switcher_open", !ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-tree-switcher_close", !ctx.nzSelectMode && ctx.isSwitcherClose);
    }
  },
  inputs: {
    nzShowExpand: [2, "nzShowExpand", "nzShowExpand", booleanAttribute],
    nzShowLine: [2, "nzShowLine", "nzShowLine", booleanAttribute],
    nzExpandedIcon: "nzExpandedIcon",
    nzSelectMode: "nzSelectMode",
    context: "context",
    isLeaf: [2, "isLeaf", "isLeaf", booleanAttribute],
    isLoading: [2, "isLoading", "isLoading", booleanAttribute],
    isExpanded: [2, "isExpanded", "isExpanded", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 2,
  consts: [["nz-icon", "", "nzType", "loading", 1, "ant-tree-switcher-loading-icon", 3, "nzSpin"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["nz-icon", "", "nzType", "caret-down"], ["nz-icon", "", 1, "ant-tree-switcher-line-icon", 3, "nzType"], ["nz-icon", "", "nzType", "file", 1, "ant-tree-switcher-line-icon"]],
  template: function NzTreeNodeSwitcherComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzTreeNodeSwitcherComponent_Conditional_0_Template, 2, 1)(1, NzTreeNodeSwitcherComponent_Conditional_1_Template, 2, 1);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.isShowSwitchIcon ? 0 : -1);
      ɵɵadvance();
      ɵɵconditional(ctx.nzShowLine ? 1 : -1);
    }
  },
  dependencies: [NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzTreeNodeSwitcherComponent = _NzTreeNodeSwitcherComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeSwitcherComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-node-switcher",
      template: `
    @if (isShowSwitchIcon) {
      @if (!isLoading) {
        <ng-container *nzStringTemplateOutlet="nzExpandedIcon; context: { $implicit: context, origin: context.origin }">
          <span
            nz-icon
            nzType="caret-down"
            [class.ant-select-tree-switcher-icon]="nzSelectMode"
            [class.ant-tree-switcher-icon]="!nzSelectMode"
          ></span>
        </ng-container>
      } @else {
        <span nz-icon nzType="loading" [nzSpin]="true" class="ant-tree-switcher-loading-icon"></span>
      }
    }
    @if (nzShowLine) {
      @if (!isLoading) {
        <ng-container *nzStringTemplateOutlet="nzExpandedIcon; context: { $implicit: context, origin: context.origin }">
          @if (isShowLineIcon) {
            <span
              nz-icon
              [nzType]="isSwitcherOpen ? 'minus-square' : 'plus-square'"
              class="ant-tree-switcher-line-icon"
            ></span>
          } @else {
            <span nz-icon nzType="file" class="ant-tree-switcher-line-icon"></span>
          }
        </ng-container>
      } @else {
        <span nz-icon nzType="loading" [nzSpin]="true" class="ant-tree-switcher-loading-icon"></span>
      }
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      host: {
        "[class.ant-select-tree-switcher]": "nzSelectMode",
        "[class.ant-select-tree-switcher-noop]": "nzSelectMode && isLeaf",
        "[class.ant-select-tree-switcher_open]": "nzSelectMode && isSwitcherOpen",
        "[class.ant-select-tree-switcher_close]": "nzSelectMode && isSwitcherClose",
        "[class.ant-tree-switcher]": "!nzSelectMode",
        "[class.ant-tree-switcher-noop]": "!nzSelectMode && isLeaf",
        "[class.ant-tree-switcher_open]": "!nzSelectMode && isSwitcherOpen",
        "[class.ant-tree-switcher_close]": "!nzSelectMode && isSwitcherClose"
      },
      imports: [NzIconModule, NzOutletModule],
      standalone: true
    }]
  }], null, {
    nzShowExpand: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowLine: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzExpandedIcon: [{
      type: Input
    }],
    nzSelectMode: [{
      type: Input
    }],
    context: [{
      type: Input
    }],
    isLeaf: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isLoading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isExpanded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _NzTreeNodeTitleComponent = class _NzTreeNodeTitleComponent {
  get canDraggable() {
    return this.draggable && !this.isDisabled ? true : null;
  }
  get matchedValue() {
    return this.isMatched ? this.searchValue : "";
  }
  get isSwitcherOpen() {
    return this.isExpanded && !this.isLeaf;
  }
  get isSwitcherClose() {
    return !this.isExpanded && !this.isLeaf;
  }
  constructor(cdr) {
    this.cdr = cdr;
    this.treeTemplate = null;
    this.selectMode = false;
    this.showIndicator = true;
  }
  ngOnChanges(changes) {
    const {
      showIndicator,
      dragPosition
    } = changes;
    if (showIndicator || dragPosition) {
      this.cdr.markForCheck();
    }
  }
};
_NzTreeNodeTitleComponent.ɵfac = function NzTreeNodeTitleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzTreeNodeTitleComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzTreeNodeTitleComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTreeNodeTitleComponent,
  selectors: [["nz-tree-node-title"]],
  hostVars: 21,
  hostBindings: function NzTreeNodeTitleComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("title", ctx.title)("draggable", ctx.canDraggable)("aria-grabbed", ctx.canDraggable);
      ɵɵclassProp("draggable", ctx.canDraggable)("ant-select-tree-node-content-wrapper", ctx.selectMode)("ant-select-tree-node-content-wrapper-open", ctx.selectMode && ctx.isSwitcherOpen)("ant-select-tree-node-content-wrapper-close", ctx.selectMode && ctx.isSwitcherClose)("ant-select-tree-node-selected", ctx.selectMode && ctx.isSelected)("ant-tree-node-content-wrapper", !ctx.selectMode)("ant-tree-node-content-wrapper-open", !ctx.selectMode && ctx.isSwitcherOpen)("ant-tree-node-content-wrapper-close", !ctx.selectMode && ctx.isSwitcherClose)("ant-tree-node-selected", !ctx.selectMode && ctx.isSelected);
    }
  },
  inputs: {
    searchValue: "searchValue",
    treeTemplate: "treeTemplate",
    draggable: [2, "draggable", "draggable", booleanAttribute],
    showIcon: [2, "showIcon", "showIcon", booleanAttribute],
    selectMode: "selectMode",
    context: "context",
    icon: "icon",
    title: "title",
    isLoading: [2, "isLoading", "isLoading", booleanAttribute],
    isSelected: [2, "isSelected", "isSelected", booleanAttribute],
    isDisabled: [2, "isDisabled", "isDisabled", booleanAttribute],
    isMatched: [2, "isMatched", "isMatched", booleanAttribute],
    isExpanded: [2, "isExpanded", "isExpanded", booleanAttribute],
    isLeaf: [2, "isLeaf", "isLeaf", booleanAttribute],
    showIndicator: "showIndicator",
    dragPosition: "dragPosition"
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 3,
  vars: 7,
  consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-tree-title", 3, "innerHTML"], [3, "dropPosition", "level"], [3, "ant-tree-icon__open", "ant-tree-icon__close", "ant-tree-icon_loading", "ant-select-tree-iconEle", "ant-tree-iconEle"], ["nz-icon", "", 3, "nzType"]],
  template: function NzTreeNodeTitleComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzTreeNodeTitleComponent_ng_template_0_Template, 0, 0, "ng-template", 0)(1, NzTreeNodeTitleComponent_Conditional_1_Template, 3, 7, "span", 1)(2, NzTreeNodeTitleComponent_Conditional_2_Template, 1, 2, "nz-tree-drop-indicator", 2);
    }
    if (rf & 2) {
      ɵɵproperty("ngTemplateOutlet", ctx.treeTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(4, _c1, ctx.context, ctx.context.origin));
      ɵɵadvance();
      ɵɵconditional(!ctx.treeTemplate ? 1 : -1);
      ɵɵadvance();
      ɵɵconditional(ctx.showIndicator ? 2 : -1);
    }
  },
  dependencies: [NgTemplateOutlet, NzIconModule, NzIconDirective, NzHighlightModule, NzHighlightPipe, NzTreeDropIndicatorComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzTreeNodeTitleComponent = _NzTreeNodeTitleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeTitleComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-node-title",
      template: `
    <ng-template
      [ngTemplateOutlet]="treeTemplate"
      [ngTemplateOutletContext]="{ $implicit: context, origin: context.origin }"
    ></ng-template>
    @if (!treeTemplate) {
      @if (icon && showIcon) {
        <span
          [class.ant-tree-icon__open]="isSwitcherOpen"
          [class.ant-tree-icon__close]="isSwitcherClose"
          [class.ant-tree-icon_loading]="isLoading"
          [class.ant-select-tree-iconEle]="selectMode"
          [class.ant-tree-iconEle]="!selectMode"
        >
          <span
            [class.ant-select-tree-iconEle]="selectMode"
            [class.ant-select-tree-icon__customize]="selectMode"
            [class.ant-tree-iconEle]="!selectMode"
            [class.ant-tree-icon__customize]="!selectMode"
          >
            <span nz-icon [nzType]="icon"></span>
          </span>
        </span>
      }
      <span class="ant-tree-title" [innerHTML]="title | nzHighlight: matchedValue : 'i' : 'font-highlight'"></span>
    }
    @if (showIndicator) {
      <nz-tree-drop-indicator [dropPosition]="dragPosition" [level]="context.level"></nz-tree-drop-indicator>
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      host: {
        "[attr.title]": "title",
        "[attr.draggable]": "canDraggable",
        "[attr.aria-grabbed]": "canDraggable",
        "[class.draggable]": "canDraggable",
        "[class.ant-select-tree-node-content-wrapper]": `selectMode`,
        "[class.ant-select-tree-node-content-wrapper-open]": `selectMode && isSwitcherOpen`,
        "[class.ant-select-tree-node-content-wrapper-close]": `selectMode && isSwitcherClose`,
        "[class.ant-select-tree-node-selected]": `selectMode && isSelected`,
        "[class.ant-tree-node-content-wrapper]": `!selectMode`,
        "[class.ant-tree-node-content-wrapper-open]": `!selectMode && isSwitcherOpen`,
        "[class.ant-tree-node-content-wrapper-close]": `!selectMode && isSwitcherClose`,
        "[class.ant-tree-node-selected]": `!selectMode && isSelected`
      },
      imports: [NgTemplateOutlet, NzIconModule, NzHighlightModule, NzTreeDropIndicatorComponent],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    searchValue: [{
      type: Input
    }],
    treeTemplate: [{
      type: Input
    }],
    draggable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectMode: [{
      type: Input
    }],
    context: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    isLoading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isSelected: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isMatched: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isExpanded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isLeaf: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showIndicator: [{
      type: Input
    }],
    dragPosition: [{
      type: Input
    }]
  });
})();
var _NzTreeNodeBuiltinComponent = class _NzTreeNodeBuiltinComponent {
  /**
   * default set
   */
  get displayStyle() {
    return this.nzSearchValue && this.nzHideUnMatched && !this.isMatched && !this.isExpanded && this.canHide ? "none" : "";
  }
  get isSwitcherOpen() {
    return this.isExpanded && !this.isLeaf;
  }
  get isSwitcherClose() {
    return !this.isExpanded && !this.isLeaf;
  }
  /**
   * collapse node
   *
   * @param event
   */
  clickExpand(event) {
    event.preventDefault();
    if (!this.isLoading && !this.isLeaf) {
      if (this.nzAsyncData && this.nzTreeNode.children.length === 0 && !this.isExpanded) {
        this.nzTreeNode.isLoading = true;
      }
      this.nzTreeNode.setExpanded(!this.isExpanded);
    }
    this.nzTreeService.setExpandedNodeList(this.nzTreeNode);
    const eventNext = this.nzTreeService.formatEvent("expand", this.nzTreeNode, event);
    this.nzExpandChange.emit(eventNext);
  }
  clickSelect(event) {
    event.preventDefault();
    if (this.isSelectable && !this.isDisabled) {
      this.nzTreeNode.isSelected = !this.nzTreeNode.isSelected;
    }
    this.nzTreeService.setSelectedNodeList(this.nzTreeNode);
    const eventNext = this.nzTreeService.formatEvent("click", this.nzTreeNode, event);
    this.nzClick.emit(eventNext);
  }
  dblClick(event) {
    event.preventDefault();
    const eventNext = this.nzTreeService.formatEvent("dblclick", this.nzTreeNode, event);
    this.nzDblClick.emit(eventNext);
  }
  contextMenu(event) {
    event.preventDefault();
    const eventNext = this.nzTreeService.formatEvent("contextmenu", this.nzTreeNode, event);
    this.nzContextMenu.emit(eventNext);
  }
  /**
   * check node
   *
   * @param event
   */
  clickCheckBox(event) {
    event.preventDefault();
    if (this.isDisabled || this.isDisableCheckbox) {
      return;
    }
    this.nzTreeNode.isChecked = !this.nzTreeNode.isChecked;
    this.nzTreeNode.isHalfChecked = false;
    this.nzTreeService.setCheckedNodeList(this.nzTreeNode);
    const eventNext = this.nzTreeService.formatEvent("check", this.nzTreeNode, event);
    this.nzCheckBoxChange.emit(eventNext);
  }
  clearDragClass() {
    const dragClass = ["drag-over-gap-top", "drag-over-gap-bottom", "drag-over", "drop-target"];
    dragClass.forEach((e) => {
      this.renderer.removeClass(this.elementRef.nativeElement, e);
    });
  }
  /**
   * drag event
   *
   * @param e
   */
  handleDragStart(e) {
    try {
      e.dataTransfer.setData("text/plain", this.nzTreeNode.key);
    } catch (error) {
    }
    this.nzTreeService.setSelectedNode(this.nzTreeNode);
    this.draggingKey = this.nzTreeNode.key;
    const eventNext = this.nzTreeService.formatEvent("dragstart", this.nzTreeNode, e);
    this.nzOnDragStart.emit(eventNext);
  }
  handleDragEnter(e) {
    e.preventDefault();
    this.showIndicator = this.nzTreeNode.key !== this.nzTreeService.getSelectedNode()?.key;
    this.renderIndicator(2);
    this.ngZone.run(() => {
      const eventNext = this.nzTreeService.formatEvent("dragenter", this.nzTreeNode, e);
      this.nzOnDragEnter.emit(eventNext);
    });
  }
  handleDragOver(e) {
    e.preventDefault();
    const dropPosition = this.nzTreeService.calcDropPosition(e);
    if (this.dragPos !== dropPosition) {
      this.clearDragClass();
      this.renderIndicator(dropPosition);
      if (!(this.dragPos === 0 && this.isLeaf)) {
        this.renderer.addClass(this.elementRef.nativeElement, this.dragPosClass[this.dragPos]);
        this.renderer.addClass(this.elementRef.nativeElement, "drop-target");
      }
    }
    const eventNext = this.nzTreeService.formatEvent("dragover", this.nzTreeNode, e);
    this.nzOnDragOver.emit(eventNext);
  }
  handleDragLeave(e) {
    e.preventDefault();
    this.renderIndicator(2);
    this.clearDragClass();
    const eventNext = this.nzTreeService.formatEvent("dragleave", this.nzTreeNode, e);
    this.nzOnDragLeave.emit(eventNext);
  }
  handleDragDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    this.ngZone.run(() => {
      this.showIndicator = false;
      this.clearDragClass();
      const node = this.nzTreeService.getSelectedNode();
      if (!node || node && node.key === this.nzTreeNode.key || this.dragPos === 0 && this.isLeaf) {
        return;
      }
      const dropEvent = this.nzTreeService.formatEvent("drop", this.nzTreeNode, e);
      const dragEndEvent = this.nzTreeService.formatEvent("dragend", this.nzTreeNode, e);
      if (this.nzBeforeDrop) {
        this.nzBeforeDrop({
          dragNode: this.nzTreeService.getSelectedNode(),
          node: this.nzTreeNode,
          pos: this.dragPos
        }).subscribe((canDrop) => {
          if (canDrop) {
            this.nzTreeService.dropAndApply(this.nzTreeNode, this.dragPos);
          }
          this.nzOnDrop.emit(dropEvent);
          this.nzOnDragEnd.emit(dragEndEvent);
        });
      } else if (this.nzTreeNode) {
        this.nzTreeService.dropAndApply(this.nzTreeNode, this.dragPos);
        this.nzOnDrop.emit(dropEvent);
      }
    });
  }
  handleDragEnd(e) {
    e.preventDefault();
    this.ngZone.run(() => {
      if (!this.nzBeforeDrop) {
        this.draggingKey = null;
        const eventNext = this.nzTreeService.formatEvent("dragend", this.nzTreeNode, e);
        this.nzOnDragEnd.emit(eventNext);
      } else {
        this.draggingKey = null;
        this.markForCheck();
      }
    });
  }
  /**
   * Listening to dragging events.
   */
  handDragEvent() {
    this.ngZone.runOutsideAngular(() => {
      if (this.nzDraggable) {
        const nativeElement = this.elementRef.nativeElement;
        this.destroy$ = new Subject();
        fromEvent(nativeElement, "dragstart").pipe(takeUntil(this.destroy$)).subscribe((e) => this.handleDragStart(e));
        fromEvent(nativeElement, "dragenter").pipe(takeUntil(this.destroy$)).subscribe((e) => this.handleDragEnter(e));
        fromEvent(nativeElement, "dragover").pipe(takeUntil(this.destroy$)).subscribe((e) => this.handleDragOver(e));
        fromEvent(nativeElement, "dragleave").pipe(takeUntil(this.destroy$)).subscribe((e) => this.handleDragLeave(e));
        fromEvent(nativeElement, "drop").pipe(takeUntil(this.destroy$)).subscribe((e) => this.handleDragDrop(e));
        fromEvent(nativeElement, "dragend").pipe(takeUntil(this.destroy$)).subscribe((e) => this.handleDragEnd(e));
      } else {
        this.destroy$.next(true);
        this.destroy$.complete();
      }
    });
  }
  markForCheck() {
    this.cdr.markForCheck();
  }
  constructor(nzTreeService, ngZone, renderer, elementRef, cdr) {
    this.nzTreeService = nzTreeService;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.cdr = cdr;
    this.icon = "";
    this.title = "";
    this.isLoading = false;
    this.isSelected = false;
    this.isDisabled = false;
    this.isMatched = false;
    this.isStart = [];
    this.isEnd = [];
    this.nzHideUnMatched = false;
    this.nzNoAnimation = false;
    this.nzSelectMode = false;
    this.nzShowIcon = false;
    this.nzTreeTemplate = null;
    this.nzSearchValue = "";
    this.nzDraggable = false;
    this.nzClick = new EventEmitter();
    this.nzDblClick = new EventEmitter();
    this.nzContextMenu = new EventEmitter();
    this.nzCheckBoxChange = new EventEmitter();
    this.nzExpandChange = new EventEmitter();
    this.nzOnDragStart = new EventEmitter();
    this.nzOnDragEnter = new EventEmitter();
    this.nzOnDragOver = new EventEmitter();
    this.nzOnDragLeave = new EventEmitter();
    this.nzOnDrop = new EventEmitter();
    this.nzOnDragEnd = new EventEmitter();
    this.destroy$ = new Subject();
    this.dragPos = 2;
    this.dragPosClass = {
      0: "drag-over",
      1: "drag-over-gap-bottom",
      "-1": "drag-over-gap-top"
    };
    this.draggingKey = null;
    this.showIndicator = false;
    this.noAnimation = inject(NzNoAnimationDirective, {
      host: true,
      optional: true
    });
  }
  ngOnInit() {
    this.nzTreeNode.component = this;
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.elementRef.nativeElement, "mousedown").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (this.nzSelectMode) {
          event.preventDefault();
        }
      });
    });
  }
  ngOnChanges(changes) {
    const {
      nzDraggable
    } = changes;
    if (nzDraggable) {
      this.handDragEvent();
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  renderIndicator(dropPosition) {
    this.ngZone.run(() => {
      this.showIndicator = dropPosition !== 2;
      if (this.nzTreeNode.key === this.nzTreeService.getSelectedNode()?.key || dropPosition === 0 && this.isLeaf) {
        return;
      }
      this.dragPos = dropPosition;
      this.cdr.markForCheck();
    });
  }
};
_NzTreeNodeBuiltinComponent.ɵfac = function NzTreeNodeBuiltinComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzTreeNodeBuiltinComponent)(ɵɵdirectiveInject(NzTreeBaseService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzTreeNodeBuiltinComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTreeNodeBuiltinComponent,
  selectors: [["nz-tree-node", "builtin", ""]],
  hostVars: 36,
  hostBindings: function NzTreeNodeBuiltinComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("display", ctx.displayStyle);
      ɵɵclassProp("ant-select-tree-treenode", ctx.nzSelectMode)("ant-select-tree-treenode-disabled", ctx.nzSelectMode && ctx.isDisabled)("ant-select-tree-treenode-switcher-open", ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-select-tree-treenode-switcher-close", ctx.nzSelectMode && ctx.isSwitcherClose)("ant-select-tree-treenode-checkbox-checked", ctx.nzSelectMode && ctx.isChecked)("ant-select-tree-treenode-checkbox-indeterminate", ctx.nzSelectMode && ctx.isHalfChecked)("ant-select-tree-treenode-selected", ctx.nzSelectMode && ctx.isSelected)("ant-select-tree-treenode-loading", ctx.nzSelectMode && ctx.isLoading)("ant-tree-treenode", !ctx.nzSelectMode)("ant-tree-treenode-disabled", !ctx.nzSelectMode && ctx.isDisabled)("ant-tree-treenode-switcher-open", !ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-tree-treenode-switcher-close", !ctx.nzSelectMode && ctx.isSwitcherClose)("ant-tree-treenode-checkbox-checked", !ctx.nzSelectMode && ctx.isChecked)("ant-tree-treenode-checkbox-indeterminate", !ctx.nzSelectMode && ctx.isHalfChecked)("ant-tree-treenode-selected", !ctx.nzSelectMode && ctx.isSelected)("ant-tree-treenode-loading", !ctx.nzSelectMode && ctx.isLoading)("dragging", ctx.draggingKey === ctx.nzTreeNode.key);
    }
  },
  inputs: {
    icon: "icon",
    title: "title",
    isLoading: [2, "isLoading", "isLoading", booleanAttribute],
    isSelected: [2, "isSelected", "isSelected", booleanAttribute],
    isDisabled: [2, "isDisabled", "isDisabled", booleanAttribute],
    isMatched: [2, "isMatched", "isMatched", booleanAttribute],
    isExpanded: [2, "isExpanded", "isExpanded", booleanAttribute],
    isLeaf: [2, "isLeaf", "isLeaf", booleanAttribute],
    isChecked: [2, "isChecked", "isChecked", booleanAttribute],
    isHalfChecked: [2, "isHalfChecked", "isHalfChecked", booleanAttribute],
    isDisableCheckbox: [2, "isDisableCheckbox", "isDisableCheckbox", booleanAttribute],
    isSelectable: [2, "isSelectable", "isSelectable", booleanAttribute],
    canHide: [2, "canHide", "canHide", booleanAttribute],
    isStart: "isStart",
    isEnd: "isEnd",
    nzTreeNode: "nzTreeNode",
    nzShowLine: [2, "nzShowLine", "nzShowLine", booleanAttribute],
    nzShowExpand: [2, "nzShowExpand", "nzShowExpand", booleanAttribute],
    nzCheckable: [2, "nzCheckable", "nzCheckable", booleanAttribute],
    nzAsyncData: [2, "nzAsyncData", "nzAsyncData", booleanAttribute],
    nzHideUnMatched: [2, "nzHideUnMatched", "nzHideUnMatched", booleanAttribute],
    nzNoAnimation: [2, "nzNoAnimation", "nzNoAnimation", booleanAttribute],
    nzSelectMode: [2, "nzSelectMode", "nzSelectMode", booleanAttribute],
    nzShowIcon: [2, "nzShowIcon", "nzShowIcon", booleanAttribute],
    nzExpandedIcon: "nzExpandedIcon",
    nzTreeTemplate: "nzTreeTemplate",
    nzBeforeDrop: "nzBeforeDrop",
    nzSearchValue: "nzSearchValue",
    nzDraggable: [2, "nzDraggable", "nzDraggable", booleanAttribute]
  },
  outputs: {
    nzClick: "nzClick",
    nzDblClick: "nzDblClick",
    nzContextMenu: "nzContextMenu",
    nzCheckBoxChange: "nzCheckBoxChange",
    nzExpandChange: "nzExpandChange",
    nzOnDragStart: "nzOnDragStart",
    nzOnDragEnter: "nzOnDragEnter",
    nzOnDragOver: "nzOnDragOver",
    nzOnDragLeave: "nzOnDragLeave",
    nzOnDrop: "nzOnDrop",
    nzOnDragEnd: "nzOnDragEnd"
  },
  exportAs: ["nzTreeBuiltinNode"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c0,
  decls: 4,
  vars: 22,
  consts: [[3, "nzTreeLevel", "nzSelectMode", "nzIsStart", "nzIsEnd"], [3, "nzShowExpand", "nzShowLine", "nzExpandedIcon", "nzSelectMode", "context", "isLeaf", "isExpanded", "isLoading"], ["builtin", "", 3, "nzSelectMode", "isChecked", "isHalfChecked", "isDisabled", "isDisableCheckbox"], [3, "dblclick", "click", "contextmenu", "icon", "title", "isLoading", "isSelected", "isDisabled", "isMatched", "isExpanded", "isLeaf", "searchValue", "treeTemplate", "draggable", "showIcon", "selectMode", "context", "showIndicator", "dragPosition"], [3, "click", "nzShowExpand", "nzShowLine", "nzExpandedIcon", "nzSelectMode", "context", "isLeaf", "isExpanded", "isLoading"], ["builtin", "", 3, "click", "nzSelectMode", "isChecked", "isHalfChecked", "isDisabled", "isDisableCheckbox"]],
  template: function NzTreeNodeBuiltinComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "nz-tree-indent", 0);
      ɵɵtemplate(1, NzTreeNodeBuiltinComponent_Conditional_1_Template, 1, 8, "nz-tree-node-switcher", 1)(2, NzTreeNodeBuiltinComponent_Conditional_2_Template, 1, 5, "nz-tree-node-checkbox", 2);
      ɵɵelementStart(3, "nz-tree-node-title", 3);
      ɵɵlistener("dblclick", function NzTreeNodeBuiltinComponent_Template_nz_tree_node_title_dblclick_3_listener($event) {
        return ctx.dblClick($event);
      })("click", function NzTreeNodeBuiltinComponent_Template_nz_tree_node_title_click_3_listener($event) {
        return ctx.clickSelect($event);
      })("contextmenu", function NzTreeNodeBuiltinComponent_Template_nz_tree_node_title_contextmenu_3_listener($event) {
        return ctx.contextMenu($event);
      });
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("nzTreeLevel", ctx.nzTreeNode.level)("nzSelectMode", ctx.nzSelectMode)("nzIsStart", ctx.isStart)("nzIsEnd", ctx.isEnd);
      ɵɵadvance();
      ɵɵconditional(ctx.nzShowExpand ? 1 : -1);
      ɵɵadvance();
      ɵɵconditional(ctx.nzCheckable ? 2 : -1);
      ɵɵadvance();
      ɵɵproperty("icon", ctx.icon)("title", ctx.title)("isLoading", ctx.isLoading)("isSelected", ctx.isSelected)("isDisabled", ctx.isDisabled)("isMatched", ctx.isMatched)("isExpanded", ctx.isExpanded)("isLeaf", ctx.isLeaf)("searchValue", ctx.nzSearchValue)("treeTemplate", ctx.nzTreeTemplate)("draggable", ctx.nzDraggable)("showIcon", ctx.nzShowIcon)("selectMode", ctx.nzSelectMode)("context", ctx.nzTreeNode)("showIndicator", ctx.showIndicator)("dragPosition", ctx.dragPos);
    }
  },
  dependencies: [NzTreeIndentComponent, NzTreeNodeSwitcherComponent, NzTreeNodeBuiltinCheckboxComponent, NzTreeNodeTitleComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzTreeNodeBuiltinComponent = _NzTreeNodeBuiltinComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeBuiltinComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-node[builtin]",
      exportAs: "nzTreeBuiltinNode",
      template: `
    <nz-tree-indent
      [nzTreeLevel]="nzTreeNode.level"
      [nzSelectMode]="nzSelectMode"
      [nzIsStart]="isStart"
      [nzIsEnd]="isEnd"
    ></nz-tree-indent>
    @if (nzShowExpand) {
      <nz-tree-node-switcher
        [nzShowExpand]="nzShowExpand"
        [nzShowLine]="nzShowLine"
        [nzExpandedIcon]="nzExpandedIcon"
        [nzSelectMode]="nzSelectMode"
        [context]="nzTreeNode"
        [isLeaf]="isLeaf"
        [isExpanded]="isExpanded"
        [isLoading]="isLoading"
        (click)="clickExpand($event)"
      ></nz-tree-node-switcher>
    }
    @if (nzCheckable) {
      <nz-tree-node-checkbox
        builtin
        (click)="clickCheckBox($event)"
        [nzSelectMode]="nzSelectMode"
        [isChecked]="isChecked"
        [isHalfChecked]="isHalfChecked"
        [isDisabled]="isDisabled"
        [isDisableCheckbox]="isDisableCheckbox"
      ></nz-tree-node-checkbox>
    }
    <nz-tree-node-title
      [icon]="icon"
      [title]="title"
      [isLoading]="isLoading"
      [isSelected]="isSelected"
      [isDisabled]="isDisabled"
      [isMatched]="isMatched"
      [isExpanded]="isExpanded"
      [isLeaf]="isLeaf"
      [searchValue]="nzSearchValue"
      [treeTemplate]="nzTreeTemplate"
      [draggable]="nzDraggable"
      [showIcon]="nzShowIcon"
      [selectMode]="nzSelectMode"
      [context]="nzTreeNode"
      [showIndicator]="showIndicator"
      [dragPosition]="dragPos"
      (dblclick)="dblClick($event)"
      (click)="clickSelect($event)"
      (contextmenu)="contextMenu($event)"
    ></nz-tree-node-title>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      host: {
        "[class.ant-select-tree-treenode]": `nzSelectMode`,
        "[class.ant-select-tree-treenode-disabled]": `nzSelectMode && isDisabled`,
        "[class.ant-select-tree-treenode-switcher-open]": `nzSelectMode && isSwitcherOpen`,
        "[class.ant-select-tree-treenode-switcher-close]": `nzSelectMode && isSwitcherClose`,
        "[class.ant-select-tree-treenode-checkbox-checked]": `nzSelectMode && isChecked`,
        "[class.ant-select-tree-treenode-checkbox-indeterminate]": `nzSelectMode && isHalfChecked`,
        "[class.ant-select-tree-treenode-selected]": `nzSelectMode && isSelected`,
        "[class.ant-select-tree-treenode-loading]": `nzSelectMode && isLoading`,
        "[class.ant-tree-treenode]": `!nzSelectMode`,
        "[class.ant-tree-treenode-disabled]": `!nzSelectMode && isDisabled`,
        "[class.ant-tree-treenode-switcher-open]": `!nzSelectMode && isSwitcherOpen`,
        "[class.ant-tree-treenode-switcher-close]": `!nzSelectMode && isSwitcherClose`,
        "[class.ant-tree-treenode-checkbox-checked]": `!nzSelectMode && isChecked`,
        "[class.ant-tree-treenode-checkbox-indeterminate]": `!nzSelectMode && isHalfChecked`,
        "[class.ant-tree-treenode-selected]": `!nzSelectMode && isSelected`,
        "[class.ant-tree-treenode-loading]": `!nzSelectMode && isLoading`,
        "[class.dragging]": `draggingKey === nzTreeNode.key`,
        "[style.display]": "displayStyle"
      },
      imports: [NzTreeIndentComponent, NzTreeNodeSwitcherComponent, NzTreeNodeBuiltinCheckboxComponent, NzTreeNodeTitleComponent],
      standalone: true
    }]
  }], () => [{
    type: NzTreeBaseService
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    icon: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    isLoading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isSelected: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isMatched: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isExpanded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isLeaf: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isChecked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isHalfChecked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isDisableCheckbox: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isSelectable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    canHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isStart: [{
      type: Input
    }],
    isEnd: [{
      type: Input
    }],
    nzTreeNode: [{
      type: Input
    }],
    nzShowLine: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowExpand: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCheckable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzAsyncData: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzHideUnMatched: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzNoAnimation: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSelectMode: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzExpandedIcon: [{
      type: Input
    }],
    nzTreeTemplate: [{
      type: Input
    }],
    nzBeforeDrop: [{
      type: Input
    }],
    nzSearchValue: [{
      type: Input
    }],
    nzDraggable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzClick: [{
      type: Output
    }],
    nzDblClick: [{
      type: Output
    }],
    nzContextMenu: [{
      type: Output
    }],
    nzCheckBoxChange: [{
      type: Output
    }],
    nzExpandChange: [{
      type: Output
    }],
    nzOnDragStart: [{
      type: Output
    }],
    nzOnDragEnter: [{
      type: Output
    }],
    nzOnDragOver: [{
      type: Output
    }],
    nzOnDragLeave: [{
      type: Output
    }],
    nzOnDrop: [{
      type: Output
    }],
    nzOnDragEnd: [{
      type: Output
    }]
  });
})();
var _NzTreeService = class _NzTreeService extends NzTreeBaseService {
  constructor() {
    super();
  }
};
_NzTreeService.ɵfac = function NzTreeService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzTreeService)();
};
_NzTreeService.ɵprov = ɵɵdefineInjectable({
  token: _NzTreeService,
  factory: _NzTreeService.ɵfac
});
var NzTreeService = _NzTreeService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeService, [{
    type: Injectable
  }], () => [], null);
})();
function NzTreeServiceFactory() {
  const higherOrderService = inject(NzTreeHigherOrderServiceToken, {
    skipSelf: true,
    optional: true
  });
  const treeService = inject(NzTreeService);
  return higherOrderService ?? treeService;
}
var NZ_CONFIG_MODULE_NAME = "tree";
var _NzTreeComponent = class _NzTreeComponent extends NzTreeBase {
  writeValue(value) {
    this.handleNzData(value);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Render all properties of nzTree
   *
   * @param changes: all changes from @Input
   */
  renderTreeProperties(changes) {
    let useDefaultExpandedKeys = false;
    let expandAll = false;
    const {
      nzData,
      nzExpandedKeys,
      nzSelectedKeys,
      nzCheckedKeys,
      nzCheckStrictly,
      nzExpandAll,
      nzMultiple,
      nzSearchValue
    } = changes;
    if (nzExpandAll) {
      useDefaultExpandedKeys = true;
      expandAll = this.nzExpandAll;
    }
    if (nzMultiple) {
      this.nzTreeService.isMultiple = this.nzMultiple;
    }
    if (nzCheckStrictly) {
      this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
    }
    if (nzData) {
      this.handleNzData(this.nzData);
    }
    if (nzCheckedKeys) {
      this.handleCheckedKeys(this.nzCheckedKeys);
    }
    if (nzCheckStrictly) {
      this.handleCheckedKeys(null);
    }
    if (nzExpandedKeys || nzExpandAll) {
      useDefaultExpandedKeys = true;
      this.handleExpandedKeys(expandAll || this.nzExpandedKeys);
    }
    if (nzSelectedKeys) {
      this.handleSelectedKeys(this.nzSelectedKeys, this.nzMultiple);
    }
    if (nzSearchValue) {
      if (!(nzSearchValue.firstChange && !this.nzSearchValue)) {
        useDefaultExpandedKeys = false;
        this.handleSearchValue(nzSearchValue.currentValue, this.nzSearchFunc);
        this.nzSearchValueChange.emit(this.nzTreeService.formatEvent("search", null, null));
      }
    }
    const currentExpandedKeys = this.getExpandedNodeList().map((v) => v.key);
    const newExpandedKeys = useDefaultExpandedKeys ? expandAll || this.nzExpandedKeys : currentExpandedKeys;
    this.handleFlattenNodes(this.nzTreeService.rootNodes, newExpandedKeys);
  }
  trackByFlattenNode(_, node) {
    return node.key;
  }
  // Deal with properties
  /**
   * nzData
   *
   * @param value
   */
  handleNzData(value) {
    if (Array.isArray(value)) {
      const data = this.coerceTreeNodes(value);
      this.nzTreeService.initTree(data);
    }
  }
  handleFlattenNodes(data, expandKeys = []) {
    this.nzTreeService.flattenTreeData(data, expandKeys);
  }
  handleCheckedKeys(keys) {
    this.nzTreeService.conductCheck(keys, this.nzCheckStrictly);
  }
  handleExpandedKeys(keys = []) {
    this.nzTreeService.conductExpandedKeys(keys);
  }
  handleSelectedKeys(keys, isMulti) {
    this.nzTreeService.conductSelectedKeys(keys, isMulti);
  }
  handleSearchValue(value, searchFunc) {
    const dataList = flattenTreeData(this.nzTreeService.rootNodes, true).map((v) => v.data);
    const checkIfMatched = (node) => {
      if (searchFunc) {
        return searchFunc(node.origin);
      }
      return !value || !node.title.toLowerCase().includes(value.toLowerCase()) ? false : true;
    };
    dataList.forEach((v) => {
      v.isMatched = checkIfMatched(v);
      v.canHide = !v.isMatched;
      if (!v.isMatched) {
        v.setExpanded(false);
        this.nzTreeService.setExpandedNodeList(v);
      } else {
        this.nzTreeService.expandNodeAllParentBySearch(v);
      }
      this.nzTreeService.setMatchedNodeList(v);
    });
  }
  /**
   * Handle emit event
   *
   * @param event
   * handle each event
   */
  eventTriggerChanged(event) {
    const node = event.node;
    switch (event.eventName) {
      case "expand":
        this.renderTree();
        this.nzExpandChange.emit(event);
        break;
      case "click":
        this.nzClick.emit(event);
        break;
      case "dblclick":
        this.nzDblClick.emit(event);
        break;
      case "contextmenu":
        this.nzContextMenu.emit(event);
        break;
      case "check":
        this.nzTreeService.setCheckedNodeList(node);
        if (!this.nzCheckStrictly) {
          this.nzTreeService.conduct(node);
        }
        const eventNext = this.nzTreeService.formatEvent("check", node, event.event);
        this.nzCheckBoxChange.emit(eventNext);
        const checkedKeys = this.nzTreeService.getCheckedNodeKeys();
        this.nzCheckedKeysChange.emit(checkedKeys);
        break;
      case "dragstart":
        if (node.isExpanded) {
          node.setExpanded(!node.isExpanded);
          this.renderTree();
        }
        this.nzOnDragStart.emit(event);
        break;
      case "dragenter":
        const selectedNode = this.nzTreeService.getSelectedNode();
        if (selectedNode && selectedNode.key !== node.key && !node.isExpanded && !node.isLeaf) {
          node.setExpanded(true);
          this.renderTree();
        }
        this.nzOnDragEnter.emit(event);
        break;
      case "dragover":
        this.nzOnDragOver.emit(event);
        break;
      case "dragleave":
        this.nzOnDragLeave.emit(event);
        break;
      case "dragend":
        this.nzOnDragEnd.emit(event);
        break;
      case "drop":
        this.renderTree();
        this.nzOnDrop.emit(event);
        break;
    }
  }
  /**
   * Click expand icon
   */
  renderTree() {
    this.handleFlattenNodes(this.nzTreeService.rootNodes, this.getExpandedNodeList().map((v) => v.key));
    this.cdr.markForCheck();
  }
  constructor(nzTreeService, nzConfigService, cdr, directionality) {
    super(nzTreeService);
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzShowIcon = false;
    this.nzHideUnMatched = false;
    this.nzBlockNode = false;
    this.nzExpandAll = false;
    this.nzSelectMode = false;
    this.nzCheckStrictly = false;
    this.nzShowExpand = true;
    this.nzShowLine = false;
    this.nzCheckable = false;
    this.nzAsyncData = false;
    this.nzDraggable = false;
    this.nzMultiple = false;
    this.nzVirtualItemSize = 28;
    this.nzVirtualMaxBufferPx = 500;
    this.nzVirtualMinBufferPx = 28;
    this.nzVirtualHeight = null;
    this.nzData = [];
    this.nzExpandedKeys = [];
    this.nzSelectedKeys = [];
    this.nzCheckedKeys = [];
    this.nzSearchValue = "";
    this.nzFlattenNodes = [];
    this.beforeInit = true;
    this.dir = "ltr";
    this.nzExpandedKeysChange = new EventEmitter();
    this.nzSelectedKeysChange = new EventEmitter();
    this.nzCheckedKeysChange = new EventEmitter();
    this.nzSearchValueChange = new EventEmitter();
    this.nzClick = new EventEmitter();
    this.nzDblClick = new EventEmitter();
    this.nzContextMenu = new EventEmitter();
    this.nzCheckBoxChange = new EventEmitter();
    this.nzExpandChange = new EventEmitter();
    this.nzOnDragStart = new EventEmitter();
    this.nzOnDragEnter = new EventEmitter();
    this.nzOnDragOver = new EventEmitter();
    this.nzOnDragLeave = new EventEmitter();
    this.nzOnDrop = new EventEmitter();
    this.nzOnDragEnd = new EventEmitter();
    this.HIDDEN_STYLE = {
      width: 0,
      height: 0,
      display: "flex",
      overflow: "hidden",
      opacity: 0,
      border: 0,
      padding: 0,
      margin: 0
    };
    this.HIDDEN_NODE_STYLE = {
      position: "absolute",
      pointerEvents: "none",
      visibility: "hidden",
      height: 0,
      overflow: "hidden"
    };
    this.destroy$ = new Subject();
    this.onChange = () => null;
    this.onTouched = () => null;
    this.noAnimation = inject(NzNoAnimationDirective, {
      host: true,
      optional: true
    });
  }
  ngOnInit() {
    this.nzTreeService.flattenNodes$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.nzFlattenNodes = !!this.nzVirtualHeight && this.nzHideUnMatched && this.nzSearchValue?.length > 0 ? data.filter((d) => !d.canHide) : data;
      this.cdr.markForCheck();
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
  }
  ngOnChanges(changes) {
    this.renderTreeProperties(changes);
  }
  ngAfterViewInit() {
    this.beforeInit = false;
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzTreeComponent.ɵfac = function NzTreeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzTreeComponent)(ɵɵdirectiveInject(NzTreeBaseService), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality));
};
_NzTreeComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTreeComponent,
  selectors: [["nz-tree"]],
  contentQueries: function NzTreeComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c2, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzTreeTemplateChild = _t.first);
    }
  },
  viewQuery: function NzTreeComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(CdkVirtualScrollViewport, 5, CdkVirtualScrollViewport);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkVirtualScrollViewport = _t.first);
    }
  },
  hostVars: 20,
  hostBindings: function NzTreeComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-select-tree", ctx.nzSelectMode)("ant-select-tree-show-line", ctx.nzSelectMode && ctx.nzShowLine)("ant-select-tree-icon-hide", ctx.nzSelectMode && !ctx.nzShowIcon)("ant-select-tree-block-node", ctx.nzSelectMode && ctx.nzBlockNode)("ant-tree", !ctx.nzSelectMode)("ant-tree-rtl", ctx.dir === "rtl")("ant-tree-show-line", !ctx.nzSelectMode && ctx.nzShowLine)("ant-tree-icon-hide", !ctx.nzSelectMode && !ctx.nzShowIcon)("ant-tree-block-node", !ctx.nzSelectMode && ctx.nzBlockNode)("draggable-tree", ctx.nzDraggable);
    }
  },
  inputs: {
    nzShowIcon: [2, "nzShowIcon", "nzShowIcon", booleanAttribute],
    nzHideUnMatched: [2, "nzHideUnMatched", "nzHideUnMatched", booleanAttribute],
    nzBlockNode: [2, "nzBlockNode", "nzBlockNode", booleanAttribute],
    nzExpandAll: [2, "nzExpandAll", "nzExpandAll", booleanAttribute],
    nzSelectMode: [2, "nzSelectMode", "nzSelectMode", booleanAttribute],
    nzCheckStrictly: [2, "nzCheckStrictly", "nzCheckStrictly", booleanAttribute],
    nzShowExpand: [2, "nzShowExpand", "nzShowExpand", booleanAttribute],
    nzShowLine: [2, "nzShowLine", "nzShowLine", booleanAttribute],
    nzCheckable: [2, "nzCheckable", "nzCheckable", booleanAttribute],
    nzAsyncData: [2, "nzAsyncData", "nzAsyncData", booleanAttribute],
    nzDraggable: [2, "nzDraggable", "nzDraggable", booleanAttribute],
    nzMultiple: [2, "nzMultiple", "nzMultiple", booleanAttribute],
    nzExpandedIcon: "nzExpandedIcon",
    nzVirtualItemSize: "nzVirtualItemSize",
    nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx",
    nzVirtualMinBufferPx: "nzVirtualMinBufferPx",
    nzVirtualHeight: "nzVirtualHeight",
    nzTreeTemplate: "nzTreeTemplate",
    nzBeforeDrop: "nzBeforeDrop",
    nzData: "nzData",
    nzExpandedKeys: "nzExpandedKeys",
    nzSelectedKeys: "nzSelectedKeys",
    nzCheckedKeys: "nzCheckedKeys",
    nzSearchValue: "nzSearchValue",
    nzSearchFunc: "nzSearchFunc"
  },
  outputs: {
    nzExpandedKeysChange: "nzExpandedKeysChange",
    nzSelectedKeysChange: "nzSelectedKeysChange",
    nzCheckedKeysChange: "nzCheckedKeysChange",
    nzSearchValueChange: "nzSearchValueChange",
    nzClick: "nzClick",
    nzDblClick: "nzDblClick",
    nzContextMenu: "nzContextMenu",
    nzCheckBoxChange: "nzCheckBoxChange",
    nzExpandChange: "nzExpandChange",
    nzOnDragStart: "nzOnDragStart",
    nzOnDragEnter: "nzOnDragEnter",
    nzOnDragOver: "nzOnDragOver",
    nzOnDragLeave: "nzOnDragLeave",
    nzOnDrop: "nzOnDrop",
    nzOnDragEnd: "nzOnDragEnd"
  },
  exportAs: ["nzTree"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzTreeService, {
    provide: NzTreeBaseService,
    useFactory: NzTreeServiceFactory
  }, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _NzTreeComponent),
    multi: true
  }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 10,
  vars: 5,
  consts: [["nodeTemplate", ""], [3, "ngStyle"], [1, "ant-tree-treenode", 3, "ngStyle"], [1, "ant-tree-indent"], [1, "ant-tree-indent-unit"], [1, "ant-tree-list", 2, "position", "relative"], [3, "ant-select-tree-list-holder-inner", "ant-tree-list-holder-inner", "itemSize", "minBufferPx", "maxBufferPx", "height"], [3, "ant-select-tree-list-holder-inner", "ant-tree-list-holder-inner", "nzNoAnimation"], [3, "itemSize", "minBufferPx", "maxBufferPx"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "nzNoAnimation"], ["builtin", "", 3, "nzExpandChange", "nzClick", "nzDblClick", "nzContextMenu", "nzCheckBoxChange", "nzOnDragStart", "nzOnDragEnter", "nzOnDragOver", "nzOnDragLeave", "nzOnDragEnd", "nzOnDrop", "icon", "title", "isLoading", "isSelected", "isDisabled", "isMatched", "isExpanded", "isLeaf", "isStart", "isEnd", "isChecked", "isHalfChecked", "isDisableCheckbox", "isSelectable", "canHide", "nzTreeNode", "nzSelectMode", "nzShowLine", "nzExpandedIcon", "nzDraggable", "nzCheckable", "nzShowExpand", "nzAsyncData", "nzSearchValue", "nzHideUnMatched", "nzBeforeDrop", "nzShowIcon", "nzTreeTemplate"]],
  template: function NzTreeComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div");
      ɵɵelement(1, "input", 1);
      ɵɵelementEnd();
      ɵɵelementStart(2, "div", 2)(3, "div", 3);
      ɵɵelement(4, "div", 4);
      ɵɵelementEnd()();
      ɵɵelementStart(5, "div", 5);
      ɵɵtemplate(6, NzTreeComponent_Conditional_6_Template, 2, 11, "cdk-virtual-scroll-viewport", 6)(7, NzTreeComponent_Conditional_7_Template, 3, 7, "div", 7);
      ɵɵelementEnd();
      ɵɵtemplate(8, NzTreeComponent_ng_template_8_Template, 1, 28, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngStyle", ctx.HIDDEN_STYLE);
      ɵɵadvance();
      ɵɵproperty("ngStyle", ctx.HIDDEN_NODE_STYLE);
      ɵɵadvance(3);
      ɵɵclassProp("ant-select-tree-list", ctx.nzSelectMode);
      ɵɵadvance();
      ɵɵconditional(ctx.nzVirtualHeight ? 6 : 7);
    }
  },
  dependencies: [NgStyle, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, NgTemplateOutlet, NzNoAnimationDirective, NzTreeNodeBuiltinComponent],
  encapsulation: 2,
  data: {
    animation: [treeCollapseMotion]
  },
  changeDetection: 0
});
var NzTreeComponent = _NzTreeComponent;
__decorate([WithConfig()], NzTreeComponent.prototype, "nzShowIcon", void 0);
__decorate([WithConfig()], NzTreeComponent.prototype, "nzHideUnMatched", void 0);
__decorate([WithConfig()], NzTreeComponent.prototype, "nzBlockNode", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree",
      exportAs: "nzTree",
      animations: [treeCollapseMotion],
      template: `
    <div>
      <input [ngStyle]="HIDDEN_STYLE" />
    </div>
    <div class="ant-tree-treenode" [ngStyle]="HIDDEN_NODE_STYLE">
      <div class="ant-tree-indent">
        <div class="ant-tree-indent-unit"></div>
      </div>
    </div>
    <div class="ant-tree-list" [class.ant-select-tree-list]="nzSelectMode" style="position: relative">
      @if (nzVirtualHeight) {
        <cdk-virtual-scroll-viewport
          [class.ant-select-tree-list-holder-inner]="nzSelectMode"
          [class.ant-tree-list-holder-inner]="!nzSelectMode"
          [itemSize]="nzVirtualItemSize"
          [minBufferPx]="nzVirtualMinBufferPx"
          [maxBufferPx]="nzVirtualMaxBufferPx"
          [style.height]="nzVirtualHeight"
        >
          <ng-container *cdkVirtualFor="let node of nzFlattenNodes; trackBy: trackByFlattenNode">
            <ng-template
              [ngTemplateOutlet]="nodeTemplate"
              [ngTemplateOutletContext]="{ $implicit: node }"
            ></ng-template>
          </ng-container>
        </cdk-virtual-scroll-viewport>
      } @else {
        <div
          [class.ant-select-tree-list-holder-inner]="nzSelectMode"
          [class.ant-tree-list-holder-inner]="!nzSelectMode"
          [@.disabled]="beforeInit || !!noAnimation?.nzNoAnimation"
          [nzNoAnimation]="noAnimation?.nzNoAnimation"
          [@treeCollapseMotion]="nzFlattenNodes.length"
        >
          @for (node of nzFlattenNodes; track trackByFlattenNode($index, node)) {
            <ng-template
              [ngTemplateOutlet]="nodeTemplate"
              [ngTemplateOutletContext]="{ $implicit: node }"
            ></ng-template>
          }
        </div>
      }
    </div>
    <ng-template #nodeTemplate let-treeNode>
      <nz-tree-node
        builtin
        [icon]="treeNode.icon"
        [title]="treeNode.title"
        [isLoading]="treeNode.isLoading"
        [isSelected]="treeNode.isSelected"
        [isDisabled]="treeNode.isDisabled"
        [isMatched]="treeNode.isMatched"
        [isExpanded]="treeNode.isExpanded"
        [isLeaf]="treeNode.isLeaf"
        [isStart]="treeNode.isStart"
        [isEnd]="treeNode.isEnd"
        [isChecked]="treeNode.isChecked"
        [isHalfChecked]="treeNode.isHalfChecked"
        [isDisableCheckbox]="treeNode.isDisableCheckbox"
        [isSelectable]="treeNode.isSelectable"
        [canHide]="treeNode.canHide"
        [nzTreeNode]="treeNode"
        [nzSelectMode]="nzSelectMode"
        [nzShowLine]="nzShowLine"
        [nzExpandedIcon]="nzExpandedIcon"
        [nzDraggable]="nzDraggable"
        [nzCheckable]="nzCheckable"
        [nzShowExpand]="nzShowExpand"
        [nzAsyncData]="nzAsyncData"
        [nzSearchValue]="nzSearchValue"
        [nzHideUnMatched]="nzHideUnMatched"
        [nzBeforeDrop]="nzBeforeDrop"
        [nzShowIcon]="nzShowIcon"
        [nzTreeTemplate]="nzTreeTemplate || nzTreeTemplateChild"
        (nzExpandChange)="eventTriggerChanged($event)"
        (nzClick)="eventTriggerChanged($event)"
        (nzDblClick)="eventTriggerChanged($event)"
        (nzContextMenu)="eventTriggerChanged($event)"
        (nzCheckBoxChange)="eventTriggerChanged($event)"
        (nzOnDragStart)="eventTriggerChanged($event)"
        (nzOnDragEnter)="eventTriggerChanged($event)"
        (nzOnDragOver)="eventTriggerChanged($event)"
        (nzOnDragLeave)="eventTriggerChanged($event)"
        (nzOnDragEnd)="eventTriggerChanged($event)"
        (nzOnDrop)="eventTriggerChanged($event)"
      ></nz-tree-node>
    </ng-template>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [NzTreeService, {
        provide: NzTreeBaseService,
        useFactory: NzTreeServiceFactory
      }, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzTreeComponent),
        multi: true
      }],
      host: {
        "[class.ant-select-tree]": `nzSelectMode`,
        "[class.ant-select-tree-show-line]": `nzSelectMode && nzShowLine`,
        "[class.ant-select-tree-icon-hide]": `nzSelectMode && !nzShowIcon`,
        "[class.ant-select-tree-block-node]": `nzSelectMode && nzBlockNode`,
        "[class.ant-tree]": `!nzSelectMode`,
        "[class.ant-tree-rtl]": `dir === 'rtl'`,
        "[class.ant-tree-show-line]": `!nzSelectMode && nzShowLine`,
        "[class.ant-tree-icon-hide]": `!nzSelectMode && !nzShowIcon`,
        "[class.ant-tree-block-node]": `!nzSelectMode && nzBlockNode`,
        "[class.draggable-tree]": `nzDraggable`
      },
      imports: [NgStyle, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, NgTemplateOutlet, NzNoAnimationDirective, NzTreeNodeBuiltinComponent],
      standalone: true
    }]
  }], () => [{
    type: NzTreeBaseService
  }, {
    type: NzConfigService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality
  }], {
    nzShowIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzHideUnMatched: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzBlockNode: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzExpandAll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSelectMode: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCheckStrictly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowExpand: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowLine: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCheckable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzAsyncData: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDraggable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzMultiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzExpandedIcon: [{
      type: Input
    }],
    nzVirtualItemSize: [{
      type: Input
    }],
    nzVirtualMaxBufferPx: [{
      type: Input
    }],
    nzVirtualMinBufferPx: [{
      type: Input
    }],
    nzVirtualHeight: [{
      type: Input
    }],
    nzTreeTemplate: [{
      type: Input
    }],
    nzBeforeDrop: [{
      type: Input
    }],
    nzData: [{
      type: Input
    }],
    nzExpandedKeys: [{
      type: Input
    }],
    nzSelectedKeys: [{
      type: Input
    }],
    nzCheckedKeys: [{
      type: Input
    }],
    nzSearchValue: [{
      type: Input
    }],
    nzSearchFunc: [{
      type: Input
    }],
    nzTreeTemplateChild: [{
      type: ContentChild,
      args: ["nzTreeTemplate", {
        static: true
      }]
    }],
    cdkVirtualScrollViewport: [{
      type: ViewChild,
      args: [CdkVirtualScrollViewport, {
        read: CdkVirtualScrollViewport
      }]
    }],
    nzExpandedKeysChange: [{
      type: Output
    }],
    nzSelectedKeysChange: [{
      type: Output
    }],
    nzCheckedKeysChange: [{
      type: Output
    }],
    nzSearchValueChange: [{
      type: Output
    }],
    nzClick: [{
      type: Output
    }],
    nzDblClick: [{
      type: Output
    }],
    nzContextMenu: [{
      type: Output
    }],
    nzCheckBoxChange: [{
      type: Output
    }],
    nzExpandChange: [{
      type: Output
    }],
    nzOnDragStart: [{
      type: Output
    }],
    nzOnDragEnter: [{
      type: Output
    }],
    nzOnDragOver: [{
      type: Output
    }],
    nzOnDragLeave: [{
      type: Output
    }],
    nzOnDrop: [{
      type: Output
    }],
    nzOnDragEnd: [{
      type: Output
    }]
  });
})();
var _NzTreeModule = class _NzTreeModule {
};
_NzTreeModule.ɵfac = function NzTreeModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzTreeModule)();
};
_NzTreeModule.ɵmod = ɵɵdefineNgModule({
  type: _NzTreeModule,
  imports: [NzTreeComponent, NzTreeNodeBuiltinComponent, NzTreeIndentComponent, NzTreeNodeSwitcherComponent, NzTreeNodeBuiltinCheckboxComponent, NzTreeNodeTitleComponent, NzTreeDropIndicatorComponent],
  exports: [NzTreeComponent, NzTreeNodeBuiltinComponent, NzTreeIndentComponent]
});
_NzTreeModule.ɵinj = ɵɵdefineInjector({
  imports: [NzTreeComponent, NzTreeNodeBuiltinComponent, NzTreeNodeSwitcherComponent, NzTreeNodeTitleComponent]
});
var NzTreeModule = _NzTreeModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeModule, [{
    type: NgModule,
    args: [{
      imports: [NzTreeComponent, NzTreeNodeBuiltinComponent, NzTreeIndentComponent, NzTreeNodeSwitcherComponent, NzTreeNodeBuiltinCheckboxComponent, NzTreeNodeTitleComponent, NzTreeDropIndicatorComponent],
      exports: [NzTreeComponent, NzTreeNodeBuiltinComponent, NzTreeIndentComponent]
    }]
  }], null, null);
})();

export {
  NzTreeNode,
  NzTreeBaseService,
  NzTreeHigherOrderServiceToken,
  NzTreeBase,
  NzTreeIndentComponent,
  NzTreeNodeBuiltinCheckboxComponent,
  NzTreeNodeSwitcherComponent,
  NzTreeNodeTitleComponent,
  NzTreeNodeBuiltinComponent,
  NzTreeService,
  NzTreeServiceFactory,
  NzTreeComponent,
  NzTreeModule
};
//# sourceMappingURL=chunk-HDOUE6VI.js.map
