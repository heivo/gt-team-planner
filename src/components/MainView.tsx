import React, { useContext, useState, useEffect, useMemo } from 'react';
import HeroPicker from './HeroPicker';
import PartyBuffSummary from './PartyBuffSummary';
import StateContext from '../context/StateContext';
import SlotContainer from './SlotContainer';
import styles from '../style.module.scss';
import { Hero, Weapon } from '../context/DataContext';
import ChainInfo from './ChainInfo';
import WeaponPicker from './WeaponPicker';
import ReactTooltip from 'react-tooltip';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

function MainView() {
	const { teams, selectHero, selectWeapon, reset } = useContext(StateContext);
	const { encodedState } = useParams<{ encodedState: string | undefined }>();

	const selectedHeroes = teams[0].slots.map((slot) => slot.hero).filter((hero) => hero !== null) as Hero[];

	const [heroPickerSlot, setHeroPickerSlot] = useState<number>();
	const [weaponPickerSlot, setWeaponPickerSlot] = useState<number>();

	const openHeroPicker = (slotNumber: number) => () => {
		setHeroPickerSlot(slotNumber);
	};

	const openWeaponPicker = (slotNumber: number) => () => {
		setWeaponPickerSlot(slotNumber);
	};

	const handleSelectHero = (slotNumber: number, hero: Hero) => {
		selectHero(0, slotNumber, hero);
		setHeroPickerSlot(undefined);
	};

	const handleCloseHeroPicker = () => {
		setHeroPickerSlot(undefined);
	};

	const handleSelectWeapon = (slotNumber: number, weapon: Weapon) => {
		selectWeapon(0, slotNumber, weapon);
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

	if (heroPickerSlot !== undefined) {
		const currentHero = teams[0].slots[heroPickerSlot].hero;
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
		const currentHero = teams[0].slots[weaponPickerSlot].hero as Hero;
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
					{teams[0].slots.map((slot, slotNumber) => (
						<SlotContainer
							key={slotNumber}
							number={slotNumber}
							slot={slot}
							onClickHero={openHeroPicker(slotNumber)}
							onClickWeapon={openWeaponPicker(slotNumber)}
							index={slotNumber}
						/>
					))}
				</div>
				<PartyBuffSummary heroes={selectedHeroes} />
				<ChainInfo heroes={selectedHeroes} weapon={teams[0].slots?.[0].weapon} />
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
