import MonacoEditor from 'react-monaco-editor'

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <MonacoEditor
        width="800px"
        height="600px"
        language="json"
        theme="vs-dark"
        value={JSON.stringify({a: 1, b: 2}, null, '  ')}
        options={{}}
      />
    </div>
  )
}

export default HomePage
