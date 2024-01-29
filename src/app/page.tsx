const Page: React.FC = () => {
  return (
    <>
      <header>
        <div className="flex items-center justify-between p-4">
          <div>
            <h1 className="text-2xl font-semibold">Instagram</h1>
          </div>
          <div>
            <button className="text-blue-500">Sign Up</button>
            <button className="text-blue-500">Log In</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Page
