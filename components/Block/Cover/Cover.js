import Image from "next/image";
export const Cover = ({ children, background }) => {
  return (
    <div className="h-screen text-white bg-sky-900 relative min-h-[400px] flex items-center justify-center">
      <Image src={background} alt="Cover Image" fill className="mix-blend-soft-light object-fill" />
      <div className="max-w-5xl mx-auto z-10">
        {children}
      </div>
    </div>
  )
}
