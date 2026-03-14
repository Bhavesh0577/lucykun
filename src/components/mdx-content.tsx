import { highlight } from 'sugar-high'
import { evaluate } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import Counter from '@/components/counter'

function Code({ children, ...props }: any) {
    const codeHTML = highlight(children)
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components = {
    code: Code,
    Counter,
}

export default async function MDXContent({ source }: { source: string }) {
    const { default: Content } = await evaluate(source, {
        ...(runtime as any),
    })
    return <Content components={components as any} />
}
