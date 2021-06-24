import React, { useMemo, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import StateContext from '../context/StateContext';

const MetaTags = () => {
	const { teams } = useContext(StateContext);
	const { encodedState } = useParams<{ encodedState: string | undefined }>();

	const ogDescription = useMemo<string>(() => {
		if (teams[0].slots.filter((slot) => slot.hero).length === 4) {
			return teams[0].slots
				.map((slot) => {
					let name = slot.hero?.name;
					if (slot.hero?.defaultWeapon.sys.id !== slot.weapon?.sys.id) {
						name += ` (${slot.weapon?.name})`;
					}
					return name;
				})
				.join(', ');
		} else {
			return 'Online team planning tool for Guardian Tales: select your heroes and weapons, see party buffs and possible chain skill combinations, share your setup via URL.';
		}
	}, [teams[0].slots]);

	const ogImage = useMemo<string | undefined>(() => {
		if (encodedState && teams[0].slots.filter((slot) => slot.hero).length === 4) {
			return `/img/${encodedState}`;
		}
	}, [teams[0].slots, encodedState]);

	return (
		<Helmet>
			<title>GT Team Planner</title>
			<meta
				name="description"
				content="Online team planning tool for Guardian Tales: select your heroes and weapons, see party buffs and possible chain skill combinations, share your setup via URL."
			/>
			<meta name="keywords" content="Guardian Tales, Team Planner, Party Builder, Tool" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5"
			/>
			<meta name="theme-color" content="#000000" />
			{/* this makes the image larger on discord */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="og:title" content="Guardian Tales - Team Planner" />
			<meta property="og:description" content={ogDescription} />
			{ogImage && <meta property="og:image" content={ogImage} />}
		</Helmet>
	);
};

export default MetaTags;
