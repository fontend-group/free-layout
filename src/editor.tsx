/*
 * @Author: w_lvqingke
 * @Date: 2025-09-02 18:40:10
 * @LastEditors: w_lvqingke
 * @LastEditTime: 2025-09-03 23:06:42
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
import { useState } from "react";
import { IconIndentRight } from "@douyinfe/semi-icons";

export const Editor = () => {
  const editorProps = useEditorProps(initialData, nodeRegistries);
  // 是否展开项目列表
  const [isExpanded, setIsExpanded] = useState(false);
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
          <allMethods.FreeLayoutEditorProvider {...editorProps}>
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
