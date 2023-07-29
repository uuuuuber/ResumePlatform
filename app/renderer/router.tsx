import React, { useEffect } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import ROUTER from '@common/router';
import Root from "@src/container/root";
import Resume from "@src/container/resume";
import TemplateList from "./container/templateList";
import useReadDirAssetsTemplateHooks from './hooks/useReadDirAssetsTemplateHooks';

function Router() {

    // const readDirAssetsTemplateHooks = useReadDirAssetsTemplateHooks();
    // // 👇 进行初始化工作
    // useEffect(() => {
    //   readDirAssetsTemplateHooks();
    // }, []);

    return <>
        <HashRouter>
            <Routes>
                <Route path={ROUTER.root} element={<Root />} ></Route>
                <Route path={ROUTER.resume} element={<Resume />}></Route>
                <Route path={ROUTER.templateList} element={<TemplateList />}></Route>
                <Route path='*' element={<Navigate to={ROUTER.root} />}></Route>
            </Routes>
        </HashRouter>
    </>
}

export default Router;