/*
 * @Author: w_lvqingke
 * @Date: 2025-09-03 22:36:57
 * @LastEditors: w_lvqingke
 * @LastEditTime: 2025-09-03 23:13:17
 * @Description: 工作流项目列表
 */

import { Typography, Collapse, List } from "@douyinfe/semi-ui";
import "./index.less";
import { IconIndentLeft } from "@douyinfe/semi-icons";

const { Title } = Typography;

export default function ProjectList({ onClose }: { onClose: () => void }) {
  const data = ["demo_1", "demo_2"];
  return (
    <div className="project-list">
      <div className="project-list-header">
        <Title heading={5}>资源</Title>
        <IconIndentLeft onClick={onClose} />
      </div>
      <Collapse>
        <Collapse.Panel header="工作流" itemKey="1">
          <List
            // header={<div>Header</div>}
            // footer={<div>Footer</div>}
            // bordered
            dataSource={data}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Collapse.Panel>
        <Collapse.Panel header="插件" itemKey="2">
          <List
            // header={<div>Header</div>}
            // footer={<div>Footer</div>}
            // bordered
            dataSource={["nothing"]}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Collapse.Panel>
        <Collapse.Panel header="数据" itemKey="3">
          <List
            // header={<div>Header</div>}
            // footer={<div>Footer</div>}
            // bordered
            dataSource={["nothing"]}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Collapse.Panel>
      </Collapse>
    </div>
  );
}
