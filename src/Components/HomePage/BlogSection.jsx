import React from "react";
import { HiArrowRight } from "react-icons/hi";

const blogs = [
	{
		title: "Tony Hawk’s Pro Skater 3 + 4: THPS Fest at El Rey Theatre",
		date: "May 09, 2025",
		excerpt: "THPS Fest at the El Rey Theater in Los Angeles celebrated the return...",
		image: "/THPS-ELREY-IMAGE-TOUT.jpg",
		link: "https://www.tonyhawkthegame.com/blog/2025/05/tony-hawk-pro-skater-three-four-thps-fest-los-angeles",
	},
	{
		title: "#TeamRICOCHET Season 03 Recap for Black Ops 6 and Warzone",
		date: "May 07, 2025",
		excerpt: "#TeamRICOCHET Season 03 Recap and Update",
		image: "/COD-BO6-RICOCHET-S03R-TOUT-A.webp",
		link: "https://www.callofduty.com/blog/2025/05/call-of-duty-black-ops-6-warzone-ricochet-anti-cheat-season-three-recap",
	},
	{
		title: "C.O.D.E. celebrates Military Appreciation Month with USAA",
		date: "May 01, 2025",
		excerpt: "Honoring veterans with events and more",
		image: "/CODE-MAM-2025-IMAGE-TOUT.webp",
		link: "https://www.callofduty.com/blog/2025/05/call-of-duty-endowment-military-appreciation-month",
	},
	{
		title: "Black Ops 6 Season 03 Reloaded: All the Details",
		date: "Apr 29, 2025",
		excerpt: "Season 03 Reloaded brings new maps, updates and events...",
		image: "/BO6-S03R-ANNOUNCEMENT-TOUT.webp",
		link: "https://www.callofduty.com/blog/2025/04/call-of-duty-black-ops-6-warzone-zombies-season-three-reloaded-announcement",
	},
	{
		title: "Introducing Call of Duty: Mobile Season 4 — Infinity Realm",
		date: "Apr 17, 2025",
		excerpt: "Experience a futuristic season packed with jetpacks and classic specialists.",
		image: "/CODM-S4-ANNOUNCE-TOUT.webp",
		link: "https://www.callofduty.com/blog/2025/04/call-of-duty-mobile-season-four-infinity-realm-announcement",
	},
	{
		title: "Black Ops 6 Season 03 Battle Pass, BlackCell, and Bundles",
		date: "Apr 02, 2025",
		excerpt: "Track down the Pantheon moles with new rewards and loadouts.",
		image: "/BO6-SEASON-03-BATTLEPASS-TOUT.webp",
		link: "https://www.callofduty.com/blog/2025/04/call-of-duty-black-ops-6-warzone-zombies-season-three-battle-pass-blackcell-bundles-intel-drop",
	},
];

const NAV_ITEMS = [
	{ label: "ALL NEWS", active: true },
	{ label: "ACTIVISION", active: false },
	{ label: "CALL OF DUTY", active: false },
	{ label: "TONY HAWK", active: false },
	{ label: "CRASH", active: false },
];

export default function BlogSection() {
	return (
		<section className="bg-gradient-to-b from-[#111] to-black text-white py-16 px-4">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-center text-3xl md:text-4xl font-bold mb-10 flex items-center justify-center gap-2">
					Latest News &amp; Articles
				</h2>

				<nav className="flex justify-center space-x-4 mb-10 border-b border-gray-700">
					{NAV_ITEMS.map((item) => (
						<button
							key={item.label}
							className={`text-sm font-semibold px-4 pb-3 ${
								item.active
									? "border-b-2 border-blue-500"
									: "opacity-60 hover:opacity-100"
							}`}
						>
							{item.label}
						</button>
					))}
				</nav>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{blogs.map((item, idx) => (
						<a
							key={idx}
							href={item.link}
							target="_blank"
							rel="noreferrer"
							className="group bg-black border border-gray-800 rounded overflow-hidden shadow hover:shadow-xl transition"
						>
							<div
								className="h-48 bg-cover bg-center"
								style={{ backgroundImage: `url(${item.image})` }}
							/>
							<div className="p-4 space-y-2">
								<time className="text-sm text-gray-400">
									{item.date}
								</time>
								<h3 className="text-lg font-bold leading-tight group-hover:underline">
									{item.title}
								</h3>
								<p className="text-sm text-gray-300">
									{item.excerpt}
								</p>
								<span className="inline-flex items-center gap-1 text-xs border-t border-gray-700 pt-2 group-hover:text-blue-500">
									READ MORE{" "}
									<HiArrowRight className="transition transform group-hover:translate-x-1" />
								</span>
							</div>
						</a>
					))}
				</div>

				<div className="text-center mt-10">
					<a
						href="https://blog.activision.com"
						className="inline-flex items-center gap-2 px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition"
						target="_blank"
						rel="noreferrer"
					>
						VIEW ALL <HiArrowRight />
					</a>
				</div>
			</div>
		</section>
	);
}
