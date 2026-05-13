import { FiHome, FiHeart } from "react-icons/fi";
export const Logo = () => {
    return (
        <div className="flex items-center justify-start gap-1 text-pink-500">
            <FiHome size={30} />
            <FiHeart size={30} />
        </div>
    )
}
