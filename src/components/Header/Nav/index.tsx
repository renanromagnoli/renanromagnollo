import Link from "next/link";

interface NavItemProps {
    label: string
    href: string
}
export function NavItem({label, href}: NavItemProps){
    return(
        <Link href={href}>
            <span>#</span>
            {label}
        </Link>
    )
}