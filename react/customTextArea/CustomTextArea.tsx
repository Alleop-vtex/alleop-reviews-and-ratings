import React, { FC } from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
    'textareaWrapper',
    'customLabel',
    'customTextarea',
    'labelContainer',
    'textareaContainer',
    'errorMessage',
    'errorMessageText'
] as const

interface Props {
    text: string,
    value: string,
    onChange: Function,
    errorMessage: string
}


const CustomTextArea : FC<Props> = (props : Props) => {
    const handles = useCssHandles(CSS_HANDLES)
    return(
        <div className={`${handles.textareaWrapper}`}>
            <div className={`${handles.labelContainer}`}>
                <label className={`${handles.customLabel}`}>{props.text}</label>
            </div>
            <div className={`${handles.textareaContainer}`}>
                <textarea className={`${handles.customTextarea}`}
                    value={props.value}
                    onChange={(event : React.FormEvent<HTMLTextAreaElement>)=> props.onChange(event.currentTarget.value)}
                />
            </div>
            <div className={`${handles.errorMessage}`}>
                <span className={`${handles.errorMessageText}`}>{props.errorMessage}</span>
            </div>
        </div>
    )
}
export default CustomTextArea