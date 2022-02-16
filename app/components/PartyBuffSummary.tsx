import { useMemo } from 'react';
import { TeamSettings } from '../StateContext';
import { Data, Hero, HeroPartyBuff } from '~/types';
import { useOutletContext } from 'remix';

interface Props {
  settings: TeamSettings;
}

interface BuffStats {
  buff: HeroPartyBuff;
  value: number;
  heroes: Array<Hero>;
}

const PartyBuffSummary = ({ settings }: Props) => {
  const { heroPartyBuffs } = useOutletContext<Data>();

  const groupedStatsByBuffId = useMemo<Record<string, BuffStats>>(
    () =>
      settings.slots.reduce<Record<string, BuffStats>>((acc, slot) => {
        const { hero } = slot;
        if (hero) {
          const buff = hero.partyBuff;
          const stats: BuffStats = acc[buff.sys.id] ?? {
            buff,
            value: 0,
            heroes: [],
          };
          stats.heroes.push(hero);
          stats.value += hero.partyBuffValue;
          acc[buff.sys.id] = stats;
          if (hero.partyBuff2) {
            const buff = hero.partyBuff2;
            const stats: BuffStats = acc[buff.sys.id] ?? {
              buff,
              value: 0,
              heroes: [],
            };
            stats.heroes.push(hero);
            stats.value += hero.partyBuffValue2;
            acc[buff.sys.id] = stats;
          }
        }
        return acc;
      }, {}),
    [settings.slots]
  );

  return (
    <div className="partyBuffSummary">
      {heroPartyBuffs
        .filter(({ sys: { id } }) => groupedStatsByBuffId[id])
        .map(({ sys: { id }, name }) => (
          <div key={id}>
            <strong>{name}:</strong> {groupedStatsByBuffId[id].value}%
            <i style={{ float: 'right' }}>({groupedStatsByBuffId[id].heroes.map((hero) => hero.name).join(', ')})</i>
          </div>
        ))}
      {!Object.keys(groupedStatsByBuffId).length && <i>no party buffs</i>}
    </div>
  );
};

export default PartyBuffSummary;
