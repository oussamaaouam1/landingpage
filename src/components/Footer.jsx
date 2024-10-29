import { resourcesLinks, platformLinks ,communityLinks } from "../constants"
const Footer = () => {
  return (
    <div>
      <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 ">
        <div className="">
          <h3 className="text-md font-semibold mb-4 border-b pb-2 border-b-neutral-600 ">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((item, index) => (
              <div key={index}>
                <a href={item.href} className="hover:text-orange-800 text-neutral-300 ">{item.text}</a>
              </div>
            ))}
          </ul>
        </div>
                
        <div>
          <h3 className="text-md font-semibold mb-4 border-b pb-2 border-b-neutral-600">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((item, index) => (
              <div key={index}>
                <a href={item.href} className="hover:text-orange-800 text-neutral-300 ">{item.text}</a>
              </div>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4 border-b pb-2 border-b-neutral-600 ">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((item, index) => (
              <div key={index}>
                <a href={item.href} className="hover:text-orange-800 text-neutral-300 ">{item.text}</a>
              </div>
            ))}
          </ul>
        </div>

      </div>
      </footer>
    </div>
  )
}

export default Footer
