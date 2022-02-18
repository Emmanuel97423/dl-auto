import React from 'react'
import ContentLoader from 'react-content-loader'

const LoaderSkeleton = (props) => (


    <ContentLoader viewBox="0 0 500 480" height={480} width={320} {...props} uniqueKey="card">
        <rect x="3" y="3" rx="10" ry="10" width="480" height="300" />
        <rect x="6" y="320" rx="0" ry="0" width="292" height="20" />
        <rect x="4" y="360" rx="0" ry="0" width="239" height="20" />
        <rect x="4" y="400" rx="0" ry="0" width="274" height="20" />
    </ContentLoader>
)

LoaderSkeleton.metadata = {
    name: 'RJavlonbek',
    github: 'RJavlonbek',
    description: 'Blog item',
    filename: 'BlogItem',
}

export default LoaderSkeleton