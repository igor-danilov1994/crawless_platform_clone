import { Platform, PlatformCardMark } from 'types';
import { PlatformCard } from './components';
import styles from './Dashboard.module.scss';
import { bankingData, linkedinData, mobilDeData, USIMData } from '../../fake-data/data';

const dataPlatform = (color: string) => [
  {
    name: 'mobile.de',
    value: '141341341 USD',
    option: mobilDeData(color),
  },
  {
    name: 'ebay',
    value: '1363341 USD',
    option: bankingData(color),
  },
  {
    name: 'Linkedin',
    value: '524234 USD',
    option: linkedinData(color),
  },
  {
    name: 'resedintails_assortiment',
    value: '16785 USD',
    option: USIMData(color),
  },
  {
    name: 'mobile.de',
    value: '23441 USD',
    option: mobilDeData(color),
  },
];

const platformsList: Platform[] = [
  {
    name: 'Linkedin',
    markColor: PlatformCardMark.LIME50,
    data: dataPlatform('#B9E01E'),
  },
  {
    name: 'USIM',
    markColor: PlatformCardMark.GOLD50,
    data: dataPlatform('#FAAD14'),
  },
  {
    name: 'mobile.de',
    markColor: PlatformCardMark.ORANGE70,
    data: dataPlatform('#FFC069'),
  },
  {
    name: 'Banking',
    markColor: PlatformCardMark.MAGENTA50,
    data: dataPlatform('#EB2F96'),
  },
];

export const Dashboard = () => (
  <div className={styles.Dashboard}>
    {platformsList.map((item, idx) => (
      <PlatformCard key={idx} platform={item} />
    ))}
  </div>
);
