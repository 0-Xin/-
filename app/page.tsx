export default function Home() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            现代化的文档网站
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            使用 Next.js 和 MDX 构建的现代化文档网站，支持 Markdown 编写，文件上传，以及更多功能。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/docs"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              开始使用
            </a>
            <a href="/docs/about" className="text-sm font-semibold leading-6 text-gray-900">
              了解更多 <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 