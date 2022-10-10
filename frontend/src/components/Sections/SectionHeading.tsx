import Link from "next/link"

const SectionHeading = () => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-2xl">New Producuts</h3>
      <p className="text-sm underline">
        <Link href='/'><a>See all products</a></Link>
      </p>
    </div>
  )
}

export default SectionHeading