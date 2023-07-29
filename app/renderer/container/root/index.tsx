import  React, { useEffect, } from "react";
import { useNavigate } from 'react-router';
import { shell } from 'electron';
import './index.less';
import Logo from '@assets/logo.png';
import { ROUTER_ENTRY, ROUTER_KEY } from '@common/router';
import { isHttpOrHttpsUrl } from '@common/utils/router';
import { useSelector, useDispatch  } from "react-redux";


function Root() {

    const navigate = useNavigate();
    const onRouterToLink = (router: TSRouter.Item) => {
        if (isHttpOrHttpsUrl(router.url)) {
            // 通过 shell 模块，打开默认浏览器，进入 github
            shell.openExternal(router.url)
        } else {
            navigate(router.url)
        }
    }

    return <>
        <div styleName="root">
            <div styleName="container">
                <img src={Logo} alt="" />
                <div styleName="title">完美简历</div>
                <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
                <div styleName="action">
                    {ROUTER_ENTRY.map((router: TSRouter.Item) => {
                        return (
                            <div key={router.key} styleName="item" onClick={() => onRouterToLink(router)} >
                                {router.text}
                            </div>
                        );
                    })}
                </div>
                <div styleName="copyright">
                    <div styleName="footer">
                        <p styleName="copyright">
                            Copyright © 2023-{new Date().getFullYear()} All Rights Reserved. Copyright By 图图图图图个钉
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Root;