"use client"

import {PageContainer} from '@ant-design/pro-layout';
import {WELCOME_TITLE} from '@/constants';

export default function Home() {
  return (
   <PageContainer title={WELCOME_TITLE}>
     <div>
       想要对你说的不敢说的爱
     </div>
   </PageContainer>
  );
}
