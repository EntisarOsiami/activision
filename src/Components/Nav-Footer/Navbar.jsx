import React, { useState } from "react";
import { Link } from "react-router";
import { HiChevronDown } from "react-icons/hi2";

const navItems = [
	{
		title: "Games",
		to: "/games",
	},
	{
		title: "About",
		to: "/about",
		submenu: [
			{ label: "About Us", to: "/about" },
		
		],
	},
	{
		title: "Careers",
		to: "/careers",
		submenu: [
			{ label: "Search Jobs", to: "/careers" },
		
		],
	},
	{
		title: "Support",
		submenu: [
			{ label: "Support Home", to: "/support" },
		
		],
	},
];

function Navbar() {
	const [mobile, setMobile] = useState(false);
	const [toggleMenu, setToggleMenu] = useState(null);

	return (
		<header className="fixed inset-x-0 top-0 z-50 bg-black/90 text-gray-300 border-b-2 uppercase">
			<div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-3 py-3">
				<div className="lg:hidden">
					<button
						onClick={() => setMobile(!mobile)}
						className="flex flex-col gap-2"
					>
						<span className="h-0.5 w-8 bg-white"></span>
						<span className="h-0.5 w-8 bg-white"></span>
						<span className="h-0.5 w-8 bg-white"></span>
					</button>
				</div>

				<div className="absolute left-1/2 -translate-x-1/2 lg:hidden">
					<Link to="/">
						<img src="/activision.png" alt="Activision" className="h-8" />
					</Link>
				</div>

				<nav className="hidden items-center gap-9 lg:flex">
					<Link to="/">
						<img src="/activision.png" alt="Activision" className="h-7 " />
					</Link>

					{navItems.map((item, index) => (
						<div key={index} className="group relative">
							<Link
								to={item.to}
								className="flex cursor-pointer items-center gap-1 transition hover:text-white"
							>
								{item.title}
								{item.submenu && (
									<HiChevronDown className="transition duration-300 group-hover:-rotate-180" />
								)}
							</Link>

							{item.submenu && (
								<div className="absolute left-0 top-full hidden group-hover:block">
									<div className="pt-3">
										<div className="rounded-md bg-black/90 p-2 shadow-lg">
											{item.submenu.map((sub, i) => (
												<Link
													key={i}
													to={sub.to}
													className="block rounded px-4 py-1 transition hover:text-white"
												>
													{sub.label}
												</Link>
											))}
										</div>
									</div>
								</div>
							)}
						</div>
					))}
				</nav>

				<div className="hidden gap-4 lg:flex">
					<Link
						to="/signup"
						className="rounded-full bg-sky-800 px-4 py-1.5 text-sm font-bold uppercase transition hover:bg-blue-400"
					>
						Sign Up
					</Link>
					<Link
						to="/login"
						className="text-sm font-medium uppercase text-gray-400 transition hover:text-white"
					>
						Login
					</Link>
				</div>
			</div>

			{mobile && (
				<div className="bg-black px-5 pb-4 lg:hidden">
					{navItems.map((item, index) => (
						<div key={index} className="mb-3">
							<button
								onClick={() =>
									setToggleMenu(toggleMenu === index ? null : index)
								}
								className="flex w-full items-center justify-between font-semibold"
							>
								<Link to={item.to}>{item.title}</Link>
								{item.submenu && (
									<HiChevronDown
										className={`transition duration-300 ${
											toggleMenu === index ? "rotate-180" : ""
										}`}
									/>
								)}
							</button>
							{item.submenu && toggleMenu === index && (
								<div className="mt-2 ml-4">
									{item.submenu.map((sub, i) => (
										<Link
											key={i}
											to={sub.to}
											className="block py-1 text-sm transition hover:text-yellow-400"
										>
											{sub.label}
										</Link>
									))}
								</div>
							)}
						</div>
					))}
				</div>
			)}
		</header>
	);
}

export default Navbar;
