import Image from "next/image";
import Link from "next/link";
import logoImgSrc from "./engineering.png";

export default function Logo({
    href
}: {
    href?: string,
}) {
    return (
        <Link className="flex items-center gap-2 font-bold" href={href ?? ""}>
            <section className="relative w-9 h-9">
                <Image
                    className="object-contain"
                    src={logoImgSrc}
                    alt=""
                    fill
                />
            </section>
            <section className="flex flex-col">
                <p>
                    <span className="text-primary">MWCons</span>
                </p>
                <p className="text-xs font-bold">Construction Management</p>
            </section>
        </Link>
    )
}