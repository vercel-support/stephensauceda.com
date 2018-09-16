import React, {Fragment} from 'react'

const CodeSandbox = ({ src }) => (
    <Fragment>
      <iframe src={src} sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
      <style jsx>{`
        iframe { width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden; }
      `}</style>
    </Fragment>
  )


export default CodeSandbox
