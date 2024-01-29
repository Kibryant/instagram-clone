import { HeartIcon } from 'lucide-react'
import Link from 'next/link'

const Page: React.FC = () => {
  return (
    <>
      <header>
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <h1 className="text-2xl font-semibold">Instagram</h1>
          </div>
          <div>
            <Link href="/login">
              <HeartIcon size={24} />
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Page
