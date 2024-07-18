import {type ComponentType, type SVGProps} from 'react';

import {withRef} from '@udecode/cn';
import {
    type PlateEditor,
    PlateElement,
    toggleNodeType,
} from '@udecode/plate-common';
import {ELEMENT_H1, ELEMENT_H2, ELEMENT_H3} from '@udecode/plate-heading';
import {ListStyleType, toggleIndentList} from '@udecode/plate-indent-list';

import {Icons} from '@/components/icons';

import {
    InlineCombobox,
    InlineComboboxContent,
    InlineComboboxEmpty,
    InlineComboboxInput,
    InlineComboboxItem,
} from './inline-combobox';
import {KEY_AMAZING} from "@/components/edtiro_compnents/amazing_com";

interface SlashCommandRule {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    onSelect: (editor: PlateEditor) => void;
    value: string;
    keywords?: string[];
}

export let slateSlashRules: SlashCommandRule[] = [
    {
        icon: Icons.h1,
        onSelect: (editor) => {
            toggleNodeType(editor, {activeType: ELEMENT_H1});
        },
        value: 'Heading 1',
    },
    {
        icon: Icons.h2,
        onSelect: (editor) => {
            toggleNodeType(editor, {activeType: ELEMENT_H2});
        },
        value: 'Heading 2',
    },
    {
        icon: Icons.h3,
        onSelect: (editor) => {
            toggleNodeType(editor, {activeType: ELEMENT_H3});
        },
        value: 'Heading 3',
    },
    {
        icon: Icons.ul,
        keywords: ['ul', 'unordered list'],
        onSelect: (editor) => {
            toggleIndentList(editor, {
                listStyleType: ListStyleType.Disc,
            });
        },
        value: 'Bulleted list',
    },
    {
        icon: Icons.ol,
        keywords: ['ol', 'ordered list'],
        onSelect: (editor) => {
            toggleIndentList(editor, {
                listStyleType: ListStyleType.Decimal,
            });
        },
        value: 'Numbered list',
    },

    {
        icon: Icons.viewing,
        onSelect: (editor) => {
            toggleNodeType(editor, {activeType: KEY_AMAZING});
        },
        value: 'amazing',
    },
];

export const SlashInputElement = withRef<typeof PlateElement>(
    ({className, ...props}, ref) => {
        const {children, editor, element} = props;
        return (
            <PlateElement
                as="span"
                data-slate-value={element.value}
                ref={ref}
                {...props}
            >
                <InlineCombobox element={element} trigger="/">
                    <InlineComboboxInput/>

                    <InlineComboboxContent>
                        <InlineComboboxEmpty>
                            No matching commands found
                        </InlineComboboxEmpty>

                        {slateSlashRules.map(({icon: Icon, keywords, onSelect, value}) => (
                            <InlineComboboxItem
                                key={value}
                                keywords={keywords}
                                onClick={() => onSelect(editor)}
                                value={value}
                            >
                                <Icon aria-hidden className="mr-2 size-4"/>
                                {value}
                            </InlineComboboxItem>
                        ))}
                    </InlineComboboxContent>
                </InlineCombobox>

                {children}
            </PlateElement>
        );
    }
);
