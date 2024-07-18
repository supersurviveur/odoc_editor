import "./App.css";
import {OdocEditor} from "@/components/pages/editor";
// import createAmazingPlugin from "@/components/edtiro_compnents/amazing_com";


const initialValue = [
    {
        id: "lkdf",
        type: 'h1',
        children: [{text: "This is a paragraph."}]
    },
    {
        id: "98ryw",
        type: 'amazing',
        children: [{text: "Amaing"}],
        data: "test",

    }
]

// export const useInitialValueVersion = (initialValue: Value) => {
//     const enabled = settingsStore.use.checkedPlugins();
//     const [version, setVersion] = useState(1);
//     const prevEnabled = useRef(enabled);
//     const prevInitialValueRef = useRef(initialValue);
//
//     useEffect(() => {
//         if (enabled === prevEnabled.current) return;
//
//         prevEnabled.current = enabled;
//         setVersion((v) => v + 1);
//     }, [enabled]);
//
//     useEffect(() => {
//         if (initialValue === prevInitialValueRef.current) return;
//
//         prevInitialValueRef.current = initialValue;
//         setVersion((v) => v + 1);
//     }, [initialValue]);
//
//     return version;
// };


function App() {
    // const initialValue = usePlaygroundValue(id);
    // const key = useInitialValueVersion(initialValue);
    // let onInsertComponent = (component: any) => {
    //     console.log(component);
    // }
    // let userMentions = [
    //     {key: '0', text: 'Ali sci'},
    //     {key: '1', text: 'Kolade'},
    //     {key: '2', text: 'Aman'},
    //     {key: '3', text: 'Tabarek'},
    //     {key: '4', text: 'Tabarek'},
    //     {key: '4', text: 'Mortz'},
    // ]
    // let extraSlashComponents = [
    //     {
    //         icon: <div>myIcon</div>,
    //         isNodeElement: true,
    //         isNodeLeaf: false,
    //         //  TODO onSelect implement inside the OdocEditor
    //         // onSelect: (editor) => {
    //         //     toggleNodeType(editor, {activeType: KEY_AMAZING});
    //         // },
    //         value: 'extraComponent',
    //     },

    // ]
    // let onChange = (value: any) => {
    //     console.log({value})
    // }

    // let extraPlugins = [
    //     createAmazingPlugin
    // ];


    return (
        <div className="flex items-start justify-center h-screen">
            <div className="w-5/6">
                <OdocEditor
                    // extraPlugins={extraPlugins}
                    // onChange={onChange}
                    // extraSlashComponents={extraSlashComponents}
                    // userMentions={userMentions}
                    // onInsertComponent={onInsertComponent}
                    initialValue={initialValue} id="align"/>
            </div>
        </div>
    );
}

export default App;
