import error from '/404.gif'

export default function ErrorPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={error} alt="Error" className="max-w-full h-auto" />
    </div>
  )
}
