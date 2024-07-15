import {createPluginFactory} from "@udecode/plate-common";

const KEY_AMAZING = 'amazing';

function AmazingComponent({children}: any) {
    return <h1 style={{color: 'red'}}>{children}</h1>;
}

const createAmazingPlugin = createPluginFactory({
    key: KEY_AMAZING,
    isElement: true,
    component: AmazingComponent,
});
export {KEY_AMAZING, AmazingComponent};
export default createAmazingPlugin;