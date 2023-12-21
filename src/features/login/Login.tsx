'use client';
import Logo from "@/components/logo/Logo";
import Image from "next/image";
import loginImgSrc from "./assets//login_02.png";
import LoginSection from "./LoginSection";

export default function Login() {
	if (localStorage != undefined)
		localStorage.clear();

	return (
		<div className="grid place-items-center h-screen ">
			<div className="container flex rounded-lg overflow-hidden shadow-md">
				<section className="w-8/12 p-5 flex flex-col bg-apple-gray-6">
					<span className="">
						<Logo />
					</span>
					<Image
						src={loginImgSrc}
						alt=""
					/>
					<p className="text-sm text-end">Copyright © 2023 MWG Inc. All rights reserved.</p>
				</section>
				<LoginSection />
			</div>
		</div>
	)
}
