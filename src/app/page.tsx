import CenterTab from "@/components/CenterTab"
import LeftTab from "@/components/LeftTab"
import NewPost from "@/components/NewPost"
import NewsFeed from "@/components/NewsFeed"
import RightTab from "@/components/RightTab"
import Stories from "@/components/Stories"

const Homepage = () => {
  return (
    <div className='flex gap-6  pt-6'>
      {/* Left */}
      <div className="hidden xl:block xl:w-[20%]">
        <LeftTab type='home'/>
      </div>
      {/* Center */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
        <Stories/>
        <NewPost/>
        <NewsFeed/>
        </div>
      </div>
      {/* Right */}
      <div className="hidden xl:block lg:w-[30%] xl:w-[30%]">
        <RightTab/>
      </div>
    </div>
  )
}

export default Homepage