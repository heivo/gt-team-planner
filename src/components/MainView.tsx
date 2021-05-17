import React, { useContext, useState, useEffect, useMemo } from 'react';
import HeroPicker from './HeroPicker';
import PartyBuffSummary from './PartyBuffSummary';
import StateContext from '../context/StateContext';
import Slot from './Slot';
import styles from '../style.module.scss';
import DataContext, { Hero, Weapon } from '../context/DataContext';
import ChainInfo from './ChainInfo';
import WeaponPicker from './WeaponPicker';
import ReactTooltip from 'react-tooltip';
import { Helmet } from 'react-helmet';

function MainView() {
	const { slots, selectHero, selectWeapon, reset } = useContext(StateContext);
	const { heroes } = useContext(DataContext);

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
			{tooltipVisible && <ReactTooltip effect="solid" place="bottom" multiline delayShow={200} />}
			<Helmet>
				{/* this makes the image larger on discord */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="og:title" content="Guardian Tales - Team Planner" />
				<meta property="og:description" content={ogDescription} />
			</Helmet>
		</>
	);
}

export default MainView;
