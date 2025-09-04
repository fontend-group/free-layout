/*
 * @Author: w_lvqingke
 * @Date: 2025-09-03 21:47:45
 * @LastEditors: w_lvqingke
 * @LastEditTime: 2025-09-03 22:10:42
 * @Description: 头部导航栏
 */

import { Image, Typography, Button, RadioGroup, Radio } from "@douyinfe/semi-ui";
import { IconMore } from "@douyinfe/semi-icons";
import "./index.less";

const { Text } = Typography;

export default function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="left-content">
          <Image
            width={30}
            height={30}
            src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract.jpg"
          />
          <Text>项目一</Text>
        </div>
        <RadioGroup type='button' defaultValue={1} aria-label="单选组合示例" name="demo-radio-middle">
                <Radio value={1}>业务逻辑</Radio>
                <Radio value={2}>用户界面</Radio>
            </RadioGroup>
        <div className="right-content">
          <Button type="primary">发布</Button>
          <IconMore />
        </div>
      </div>
    </div>
  );
}
