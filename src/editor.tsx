/*
 * @Author: w_lvqingke
 * @Date: 2025-09-02 18:40:10
 * @LastEditors: w_lvqingke
 * @LastEditTime: 2025-09-04 10:01:11
 * @Description:
 */
/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

// import { EditorRenderer, FreeLayoutEditorProvider } from '@flowgram.ai/free-layout-editor';
import * as allMethods from "@flowgram.ai/free-layout-editor";
import "@flowgram.ai/free-layout-editor/index.css";
import "./styles/index.css";
import { nodeRegistries } from "./nodes";
import { initialData } from "./initial-data";
import { useEditorProps } from "./hooks";
import { DemoTools } from "./components/tools";
import Layout from "./components/layout";
import Header from "./components/Header";
import ProjectList from "./components/project-list";
import { SidebarProvider, SidebarRenderer } from "./components/sidebar";
import "./index.less";
import { useEffect, useRef, useState } from "react";
import { IconIndentRight } from "@douyinfe/semi-icons";
import { debounce } from "lodash-es";

export const Editor = () => {
  const ref = useRef<allMethods.FreeLayoutPluginContext | null>(null);
  const lastData = localStorage.getItem('flowgram-data') ? JSON.parse(localStorage.getItem('flowgram-data') || '{}') : initialData;
  const editorProps = useEditorProps(lastData, nodeRegistries);
  // 是否展开项目列表
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // 监听画布变化 延迟 1 秒 保存数据, 避免画布频繁更新
    const toDispose = ref.current?.document.onContentChange(debounce(() => {
        // 通过 toJSON 获取画布最新的数据
          // request('https://xxxx/save', {
          //   data: ref.current.document.toJSON()
          // })
          console.log('>>>>> save data: ', ref.current?.document.toJSON())
          localStorage.setItem('flowgram-data', JSON.stringify(ref.current?.document.toJSON()))
    }, 1000))
    return () => toDispose?.dispose()
  }, [])

  return (
    <Layout Header={<Header />}>
      <div className="doc-free-feature-overview">
        {isExpanded && <ProjectList onClose={() => setIsExpanded(false)} />}
        <div className="editor-container">
          {!isExpanded && (
            <div
              className="editor-container-left"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <IconIndentRight />
            </div>
          )}
          <allMethods.FreeLayoutEditorProvider ref={ref} {...editorProps}>
            <SidebarProvider>
              <div className="demo-container">
                <allMethods.EditorRenderer className="demo-editor" />
                <DemoTools />
              </div>
              <SidebarRenderer />
            </SidebarProvider>
          </allMethods.FreeLayoutEditorProvider>
        </div>
      </div>
    </Layout>
  );
};
