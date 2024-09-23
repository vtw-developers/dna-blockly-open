import './App.css';
import React, { useEffect, useState } from 'react';
import Blockly from 'blockly';
import { pythonGenerator } from 'blockly/python';

function App() {
    let workspace;
    const [code, setCode] = useState('');

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        document.getElementById('blocklyDiv').innerHTML = '';
        workspace = Blockly.inject('blocklyDiv',
            {
                toolbox: initToolbox(),
                move: {
                    scrollbars: {
                        'horizontal': true,
                        'vertical': true,
                    },
                },
            });
    }, []);

    const createCode = () => {
        setCode(pythonGenerator.workspaceToCode(workspace));
    };

    const keyDownEvent = (e) => {
        if (e.ctrlKey && e.key === 's' || e.ctrlKey && e.key === 'S') {
            e.preventDefault();
            createCode();
        }
    };

    const initToolbox = () => {

        const categoryToolbox = {
            kind: 'categoryToolbox',
            contents: [
                {
                    'kind': 'category',
                    'name': 'Logic',
                    'colour': 210,
                    'contents': [
                        {
                            'kind': 'block',
                            'type': 'controls_if'
                        },
                        {
                            'kind': 'block',
                            'type': 'logic_compare',
                        },
                        {
                            'kind': 'block',
                            'type': 'logic_operation'
                        },
                        {
                            'kind': 'block',
                            'type': 'logic_negate',
                        },
                        {
                            'kind': 'block',
                            'type': 'logic_boolean'
                        },
                        {
                            'kind': 'block',
                            'type': 'logic_null',
                        },
                        {
                            'kind': 'block',
                            'type': 'logic_ternary'
                        },
                    ]
                },
                {
                    'kind': 'category',
                    'name': 'Loops',
                    'colour': 90,
                    'contents': [
                        {
                            'kind': 'block',
                            'type': 'controls_repeat_ext'
                        },
                        {
                            'kind': 'block',
                            'type': 'controls_repeat',
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'controls_whileUntil'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'controls_for'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'controls_forEach'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'controls_flow_statements'
                        }
                    ]
                },
                {
                    'kind': 'category',
                    'name': 'Math',
                    'colour': 230,
                    'contents': [
                        {
                            'kind': 'BLOCK',
                            'type': 'math_number',
                            'gap': '32'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'math_arithmetic'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'math_single'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'math_trig'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'math_constant'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'math_number_property'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'math_round'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'math_on_list'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'math_modulo'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'math_constrain'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'math_random_int'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'math_random_float'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'math_atan2'
                        }
                    ]
                },
                {
                    'kind': 'category',
                    'name': 'Text',
                    'colour': 150,
                    'contents': [
                        {
                            'kind': 'BLOCK',
                            'type': 'text'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'text_multiline'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'text_join'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'text_append'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'text_length'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'text_isEmpty'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'text_indexOf'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'text_charAt'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'text_getSubstring'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'text_changeCase'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'text_trim'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'text_count'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'text_replace'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'text_reverse'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'text_print'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'text_prompt_ext'
                        }
                    ]
                },
                {
                    'kind': 'category',
                    'name': 'Lists',
                    'colour': 250,
                    'contents': [
                        {
                            'kind': 'BLOCK',
                            'type': 'lists_create_with'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'lists_create_with'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'lists_repeat'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'lists_length'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'lists_isEmpty'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'lists_indexOf'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'lists_getIndex'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'lists_setIndex'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'lists_getSublist'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'lists_split'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'lists_sort'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'lists_reverse'
                        }
                    ]
                },
                {
                    'kind': 'category',
                    'name': 'Colour',
                    'colour': 30,
                    'contents': [
                        {
                            'kind': 'BLOCK',
                            'type': 'colour_picker'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'colour_random'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'colour_rgb'
                        },
                        {
                            'kind': 'BLOCK',
                            'type': 'colour_blend'
                        }
                    ]
                },
                {
                    'kind': 'category',
                    'name': 'Variables',
                    'colour': 330,
                    'custom': 'VARIABLE'
                },
                {
                    'kind': 'category',
                    'name': 'Functions',
                    'colour': 280,
                    'custom': 'PROCEDURE'
                }
            ]
        };
        return categoryToolbox;
    };

    return (
        <div id='scroll'>
            <div id='blocklyDiv' onKeyDown={keyDownEvent} />
            <div className='generator'>
                <div className='title'>Python</div>
                <pre>{code}</pre>
            </div>
        </div>
    );
}

export default App;
