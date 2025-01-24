import FileUpload from '../../components/FileUpload'

export default function DocsPage() {
  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          文档中心
        </h1>
        <div className="mt-6">
          <div className="prose prose-indigo max-w-none">
            <h2>开始使用</h2>
            <p>
              欢迎使用我们的文档系统。这里您可以：
            </p>
            <ul>
              <li>浏览文档内容</li>
              <li>上传新的文档</li>
              <li>管理现有文档</li>
            </ul>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              上传新文档
            </h3>
            <div className="mt-4">
              <FileUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 