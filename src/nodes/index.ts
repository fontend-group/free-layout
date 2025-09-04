/*
 * @Author: w_zhaohongyang8 w_zhaohongyang8@xiwang.com
 * @Date: 2025-09-03 23:13:50
 * @LastEditors: w_lvqingke
 * @LastEditTime: 2025-09-04 12:06:31
 * @FilePath: /free-layout-main/src/nodes/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import { FlowNodeRegistry } from '../typings';
import { WebTrackNodeRegistry } from './web-track';
import { VariableNodeRegistry } from './variable';
import { StartNodeRegistry } from './start';
import { LoopNodeRegistry } from './loop';
import { LLMNodeRegistry } from './llm';
import { HTTPNodeRegistry } from './http';
import { GroupNodeRegistry } from './group';
import { EndNodeRegistry } from './end';
import { ContinueNodeRegistry } from './continue';
import { ConditionNodeRegistry } from './condition';
import { CommentNodeRegistry } from './comment';
import { CodeNodeRegistry } from './code';
import { BreakNodeRegistry } from './break';
import { BlockStartNodeRegistry } from './block-start';
import { BlockEndNodeRegistry } from './block-end';
export { WorkflowNodeType } from './constants';

export const nodeRegistries: FlowNodeRegistry[] = [
  ConditionNodeRegistry,
  StartNodeRegistry,
  EndNodeRegistry,
  LLMNodeRegistry,
  LoopNodeRegistry,
  CommentNodeRegistry,
  BlockStartNodeRegistry,
  BlockEndNodeRegistry,
  HTTPNodeRegistry,
  CodeNodeRegistry,
  ContinueNodeRegistry,
  BreakNodeRegistry,
  VariableNodeRegistry,
  GroupNodeRegistry,
  WebTrackNodeRegistry,
];
