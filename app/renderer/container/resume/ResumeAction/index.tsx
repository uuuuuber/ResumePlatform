import React from 'react';
import './index.less';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux'
import ROUTER from '@src/common/router';
import MyButton from '@src/common/components/MyButton';
import { toPrintPdf } from '@common/utils/htmlToPdf';

function ResumeAction() {
    const navigate = useNavigate();
    // 返回首页
    const onBack = () => navigate(ROUTER.root);
    const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
    // 导出PDF
    const onExport = () => {
        toPrintPdf(`${base?.username}+${base?.school}+${work?.job}`)
        
     };

    return <>
        <div styleName="actions">
            <div styleName="back" onClick={onBack}>返回</div>
            <MyButton size="middle" className="export-btn" onClick={onExport}>导出PDF</MyButton>
        </div>
    </>
}
export default ResumeAction;