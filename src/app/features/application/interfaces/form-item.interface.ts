import {EffectAllowed} from "ngx-drag-drop";
import {Validation} from "./validation.interface";

export interface FormItem {
  content: string;
  effectAllowed: EffectAllowed;
  disable: boolean;
  handle: boolean;
  fieldName: string;
  helpText: string;
  options: any[];
  comment: string;
  validation: Validation;
}
