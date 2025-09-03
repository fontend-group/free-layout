/*
 * @Author: w_lvqingke
 * @Date: 2025-09-03 21:27:09
 * @LastEditors: w_lvqingke
 * @LastEditTime: 2025-09-03 22:01:51
 * @Description:  通用布局
 */
import { Layout as SemiLayout } from "@douyinfe/semi-ui";
import "./index.less";

export default function Layout (props: { children: React.ReactNode, Header: React.ReactNode }) {
  const { Header, Sider, Content } = SemiLayout;
//   const commonStyle = {
//     height: 64,
//     lineHeight: "64px",
//     // background: "var(--semi-color-fill-0)",
//     background: 'rgb(247, 247, 252)'
//   };
  return (
    <SemiLayout className="components-layout-demo">
      <Header>{props.Header}</Header>
      <SemiLayout>
        {/* <Sider
          style={{ width: "120px", background: "var(--semi-color-fill-2)" }}
        >
          Sider
        </Sider> */}
        <Content className="components-layout-demo-content">{props.children}</Content>
      </SemiLayout>
      {/* <Footer style={commonStyle}>Footer</Footer> */}
    </SemiLayout>
  );
};
