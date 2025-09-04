/*
 * @Author: w_zhaohongyang8 w_zhaohongyang8@xiwang.com
 * @Date: 2025-09-03 23:13:50
 * @LastEditors: w_zhaohongyang8 w_zhaohongyang8@xiwang.com
 * @LastEditTime: 2025-09-04 10:29:28
 * @FilePath: /free-layout-main/src/nodes/constants.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

export enum WorkflowNodeType {
  Start = 'start',
  End = 'end',
  LLM = 'llm',
  HTTP = 'http',
  Code = 'code',
  Variable = 'variable',
  Condition = 'condition',
  Loop = 'loop',
  BlockStart = 'block-start',
  BlockEnd = 'block-end',
  Comment = 'comment',
  Continue = 'continue',
  Break = 'break',
  WebTrack = 'web-track', // 添加埋点节点
}
