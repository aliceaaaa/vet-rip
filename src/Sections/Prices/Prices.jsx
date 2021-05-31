import { useState } from 'react';
import { wallet } from '../../icons';
import { Form, Wrapper } from '../../UI';
import styles from './Prices.module.scss';

const Prices = ({ lang }) => {
  const rub = lang ? 'руб' : 'rub';
  const kg = lang ? 'кг' : 'kg';

  const texts = lang
    ? ['Вес', 'Выезд', 'Эвтаназия', 'Общая кремация', 'Индивидуальная кремация']
    : ['Weight', 'Pick up', 'Euthanasia', 'Common cremation', 'Individual cremation'];

  // const lessThanFive = [`< 5`, `1500`, `500`, `2500`, `5000`];
  // const fiveToTen = [`5 - 10`, `1500`, `500`, `2500`, `5000`];
  // const tenToFifty = [`10 - 50`, `2500`, `1000`, `2500`, `7000`];
  // const fiftyToHundred = [`50 - 100`, `3500`, `2000`, `3500`, `10000`];
  // const overHundred = [`> 100`, `7500`, `5000`, `5500`, `15000`];

  const lessThanFive = [`< 5`, `xxxx`, `xxxx`, `xxxx`, `xxxx`];
  const fiveToTen = [`5 - 10`, `xxxx`, `xxxx`, `xxxx`, `xxxx`];
  const tenToFifty = [`10 - 50`, `xxxx`, `xxxx`, `xxxx`, `xxxx`];
  const fiftyToHundred = [`50 - 100`, `xxxx`, `xxxx`, `xxxx`, `xxxx`];
  const overHundred = [`> 100`, `7500`, `xxxx`, `xxxx`, `xxxx`];

  const options = [lessThanFive, fiveToTen, tenToFifty, fiftyToHundred, overHundred];

  const [chosen, setChosen] = useState(null);
  const [indexArray, setIndex] = useState([]);
  const [hovered, setHovered] = useState(null);

  const onChooseItem = (rowIndex, index, value) => {
    if (
      (index === 4 && indexArray.indexOf(`${rowIndex} + ${3}`) !== -1) ||
      (index === 3 && indexArray.indexOf(`${rowIndex} + ${4}`) !== -1)
    )
      return;

    const exists = indexArray.indexOf(`${rowIndex} + ${index}`) !== -1;

    // if (index !== 0 && !exists) setChosen(Number(chosen) + Number(value));
    // if (index !== 0 && exists) setChosen(Number(chosen) - Number(value));

    exists
      ? setIndex([...indexArray.filter((item) => item !== `${rowIndex} + ${index}`)])
      : setIndex([...indexArray.filter((item) => item !== `${rowIndex} + ${index}`), `${rowIndex} + ${index}`]);
  };

  const getStyle = (rowIndex, index) => {
    const exists = indexArray.indexOf(`${rowIndex} + ${index}`) !== -1;

    const excluded =
      (index === 4 && indexArray.indexOf(`${rowIndex} + ${3}`) !== -1) ||
      (index === 3 && indexArray.indexOf(`${rowIndex} + ${4}`) !== -1);

    if (excluded) return { cursor: 'not-allowed' };

    if (index !== 0 && hovered === `${rowIndex} + ${index}` && !exists)
      return { backgroundColor: '#8450f7', opacity: 0.7 };

    if (index !== 0 && !excluded && exists) return { backgroundColor: '#8450f7' };
  };

  return (
    <Wrapper>
      <table className={styles.table}>
        <thead>
          <tr>
            {texts.map((title) => (
              <td key={title}>{title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {options.map((option, rowIndex) => (
            <tr key={option}>
              {options[rowIndex].map((value, index) => (
                <td
                  key={`${rowIndex} + ${index}`}
                  onClick={() => onChooseItem(rowIndex, index, value)}
                  onMouseOver={() => setHovered(`${rowIndex} + ${index}`)}
                  onMouseOut={() => setHovered(null)}
                  style={getStyle(rowIndex, index)}
                >
                  {value} {index === 0 ? kg : rub}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* <div className={styles.total}>{chosen ? `${lang ? 'Итого' : 'Total'}: ${Number(chosen)} ${rub}` : ''}</div> */}

      <Form lang={lang} />

      <div className={styles.wallet}>
        <img src={wallet} alt="wallet" className={styles.walletIcon} />
        &nbsp;
        {lang ? 'Оплата наличными и картой' : 'We accept russian rubles and credit cards'}
      </div>
    </Wrapper>
  );
};

export default Prices;
