import React from 'react'
import Image from "next/image"


export default function ProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        src="/images/profile-pic.png"
        className="border-4 border-white dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        width={200}
        height={200}
        alt="Omar"
        priority={true}
      />
    </section>
  );
}
