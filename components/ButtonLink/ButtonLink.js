
import Link from "next/link";
export const ButtonLink = ({ btnLink, btnText }) => {
    return (
        <Link href={btnLink} className="button">
            {btnText}
        </Link>
    )
}
