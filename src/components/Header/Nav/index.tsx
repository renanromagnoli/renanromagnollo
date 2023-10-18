import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
    label: string
    href: string
}
export function NavItem({label, href}: NavItemProps){
    const pathName = usePathname()

    const isActive = pathName === href
    return(
        <Link href={href}>
            <span>#</span>
            {label}
        </Link>
    )
}