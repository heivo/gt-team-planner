import React, { useContext, useState, useEffect, useMemo } from 'react';
import HeroPicker from './HeroPicker';
import PartyBuffSummary from './PartyBuffSummary';
import StateContext from '../context/StateContext';
import Slot from './Slot';
import styles from '../style.module.scss';
import { Hero, Weapon } from '../context/DataContext';
import ChainInfo from './ChainInfo';
import WeaponPicker from './WeaponPicker';
import ReactTooltip from 'react-tooltip';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

function MainView() {
	const { slots, selectHero, selectWeapon, reset } = useContext(StateContext);
	const { slug } = useParams<{ slug: string | undefined }>();

	const selectedHeroes = slots.map((slot) => slot.hero).filter((hero) => hero !== null) as Hero[];

	const [heroPickerSlot, setHeroPickerSlot] = useState<number>();
	const [weaponPickerSlot, setWeaponPickerSlot] = useState<number>();

	const openHeroPicker = (slotNumber: number) => () => {
		setHeroPickerSlot(slotNumber);
	};

	const openWeaponPicker = (slotNumber: number) => () => {
		setWeaponPickerSlot(slotNumber);
	};

	const handleSelectHero = (slotNumber: number, hero: Hero) => {
		selectHero(slotNumber, hero);
		setHeroPickerSlot(undefined);
	};

	const handleCloseHeroPicker = () => {
		setHeroPickerSlot(undefined);
	};

	const handleSelectWeapon = (slotNumber: number, weapon: Weapon) => {
		selectWeapon(slotNumber, weapon);
		setWeaponPickerSlot(undefined);
	};

	const handleCloseWeaponPicker = () => {
		setWeaponPickerSlot(undefined);
	};

	// delay rendering of tooltip so it's not rendered on the server
	const [tooltipVisible, setTooltipVisible] = useState(false);

	useEffect(() => {
		setTooltipVisible(true);
	}, []);

	const ogDescription = useMemo<string>(() => {
		if (slots.filter((slot) => slot.hero).length === 4) {
			return slots
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
	}, [slots]);

	const ogImage = useMemo<string | undefined>(() => {
		if (slug && slots.filter((slot) => slot.hero).length === 4) {
			return `/img/${slug}`;
		}
	}, [slots, slug]);

	if (heroPickerSlot !== undefined) {
		const currentHero = slots[heroPickerSlot].hero;
		const otherUsedHeroes = selectedHeroes.filter((hero) => hero !== currentHero);
		return (
			<HeroPicker
				otherUsedHeroes={otherUsedHeroes}
				onSelect={(hero) => handleSelectHero(heroPickerSlot, hero)}
				onClose={handleCloseHeroPicker}
			/>
		);
	}

	if (weaponPickerSlot !== undefined) {
		const currentHero = slots[weaponPickerSlot].hero as Hero;
		return (
			<WeaponPicker
				hero={currentHero}
				showAilment={weaponPickerSlot === 0}
				onSelect={(weapon) => handleSelectWeapon(weaponPickerSlot, weapon)}
				onClose={handleCloseWeaponPicker}
			/>
		);
	}

	return (
		<>
			<div className={styles.contentWrapper}>
				<div className={styles.slotContainer}>
					{slots.map((slot, slotNumber) => (
						<Slot
							key={slotNumber}
							number={slotNumber}
							data={slot}
							onClickHero={openHeroPicker(slotNumber)}
							onClickWeapon={openWeaponPicker(slotNumber)}
							index={slotNumber}
						/>
					))}
				</div>
				<PartyBuffSummary heroes={selectedHeroes} />
				<ChainInfo heroes={selectedHeroes} weapon={slots?.[0].weapon} />
				{selectedHeroes.length > 0 && (
					<button onClick={reset} className={styles.resetButton}>
						reset
					</button>
				)}
			</div>
			<footer className={styles.footer}>
				<span>
					Found a bug or have a suggestion for improvements? File an issue on&nbsp;
					<a href="https://github.com/heivo/gt-team-planner/issues" target="_blank">
						GitHub
					</a>
					.
				</span>
				<span>
					Like this tool? Please consider to{' '}
					<a href="https://www.buymeacoffee.com/heivo" target="_blank">
						{' '}
						buy me a coffee
					</a>{' '}
					;)
				</span>
			</footer>
			{tooltipVisible && <ReactTooltip effect="solid" place="bottom" multiline delayShow={200} />}
			<Helmet>
				{/* this makes the image larger on discord */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="og:title" content="Guardian Tales - Team Planner" />
				<meta property="og:description" content={ogDescription} />
				{ogImage && <meta property="og:image" content={ogImage} />}
			</Helmet>
		</>
	);
}

export default MainView;
