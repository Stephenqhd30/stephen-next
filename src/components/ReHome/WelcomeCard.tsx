import { Welcome } from "@ant-design/x";
import React from "react";
import { ProCard } from "@ant-design/pro-components";

const WelcomeCard: React.FC = () => {
  return (
    <ProCard>
      <Welcome
        variant="borderless"
        icon="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp"
        title="你好，我是Stephen的爆米花🍿"
        description="想要对你说的不敢说的爱，会不会有人可以明白，我会发着呆，然后忘记你"
      />
    </ProCard>
  );
};

export default WelcomeCard;
