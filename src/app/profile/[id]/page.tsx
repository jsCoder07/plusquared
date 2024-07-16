import LeftTab from "@/components/LeftTab";
import NewsFeed from "@/components/NewsFeed";
import RightTab from "@/components/RightTab";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex gap-6  pt-6">
      {/* Left */}
      <div className="hidden xl:block xl:w-[20%]">
        <LeftTab type="profile" />
      </div>
      {/* Center */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="h-64 relative w-full">
              <Image
                src="https://images.pexels.com/photos/5256142/pexels-photo-5256142.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                fill
                className="rounded-md object-cover"
              />
              {/* <div className="image-area w-[150px] h-[150px] rounded-full flex justify-center items-center absolute left-0 right-0 m-auto -bottom-[75px] bg-bgmain shadowMain">
                <div className="inner-area rounded-full w-[100%-25px] h-[100%-10px]">
                <Image
                src="https://images.pexels.com/photos/7533332/pexels-photo-7533332.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={150}
                height={150}
                className="rounded-full w-32 h-32   z-10 object-cover"
              />
                </div>
              </div> */}

              <Image
                src="https://images.pexels.com/photos/7533332/pexels-photo-7533332.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={128}
                height={128}
                className="rounded-full w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white z-10 object-cover"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">
              Adeboye Thompson
            </h1>
            <div className="flex gap-12 mb-4 items-center justify-center">
              <div className="flex items-center rounded-md gap-2 btnShadow px-2 py-1 cursor-pointer hover:text-slate-500 text-blue-500">
                <span className="font-medium">142</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex rounded-md gap-2 items-center btnShadow px-2 py-1 cursor-pointer hover:text-slate-500 text-blue-500">
                <span className="font-medium">1.4k</span>
                <span className="text-sm">Following</span>
              </div>
              <div className="flex rounded-md gap-2 items-center btnShadow px-2 py-1 cursor-pointer hover:text-slate-500 text-blue-500">
                <span className="font-medium">1.3k</span>
                <span className="text-sm">Followers</span>
              </div>
            </div>
          </div>
          <NewsFeed />
        </div>
      </div>
      {/* Right */}
      <div className="hidden xl:block lg:w-[30%] xl:w-[30%]">
        <RightTab userId="test" />
      </div>
    </div>
  );
};

export default ProfilePage;
