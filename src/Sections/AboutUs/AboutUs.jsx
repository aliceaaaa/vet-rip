import CallMeForm from '../../UI/Form/CallMeForm';
import styles from './AboutUs.module.scss';

const AboutUs = ({ lang }) => (
  <div className={styles.text}>
    {lang ? (
      <>
        <b>Дорогие друзья!</b>
        <br />
        <br />
        Каждый владелец интернет сайта искренне радуется увеличению числа его посетителей. Но если вы стали гостем этой
        страницы, то значит повода для радости нет совершенно. В таком случае, первым делом мы спешим выразить свои
        искренние соболезнования. К сожалению, нам знакомо, насколько горько и тяжело терять любимого питомца.
        <br />
        <br />
        Сейчас вы злитесь, растеряны и взволнованы. Поверьте, это абсолютно здоровая реакция. Вас можно легко понять:
        ваш милый зверь уже покинул этот мир, либо неизлечимо заболел, и болезнь причиняет ему невыносимые страдания.
        Наверняка, в течение жизни, вы окружали питомца любовью и нежностью, сохранили множество ярких воспоминаний о
        времени, проведенном вместе. Лучшее, что вы можете сделать сейчас – прокрутить в памяти каждый совместный день и
        улыбнуться напоследок. У вашего четвероного друга была счастливая жизнь. А в этот момент начинается новая. Чтобы
        помочь вам в этот трагический день, мы возьмем на себя все хлопоты по организации прощания с любимым зверем.
        <br />
        <br />
        <b>Хотим сразу оговориться:</b>
        <br />➢ мы сами являемся хозяевами собаки и кошки, и мы искренне любим животных, желая им долгих и счастливых
        лет жизни.
        <br />➢ мы категорически не “решаем вопросы” в ситуации, если вы приручили питомца, не подумав, а потом решили
        избавиться.
        <br />
        <br />
        Вечный покой обеспечивается только по абсолютным медицинским показаниям, когда эвтаназия становится невыносимо
        печальным, но увы, единственным возможным вариантом. После обращения, животное осмотрит ветеринарный доктор и
        убедится в необходимости проведения эвтаназии. Мы гарантируем проведение гуманной процедуры, которая не добавит
        животному дополнительных мучений, а наоборот избавит от страданий.
        <br />
        <br />
        После того, как все закончится, мы заберем тело четвероногого друга для дальнейшей кремации и организации
        церемонии прощания. Мы предлагаем на выбор общую (без возврата пепла) или индивидуальную кремацию, которая
        подразумевает получение вазы с пеплом животного для дальнейшего захоронения. Стандартная урна для кремации
        изготовлена из биоразлагаемого картона. Но по вашей просьбе мы подготовим долговечную каменную урну, на которой
        может быть выгравирована кличка вашего питомца. Вы можете подъехать к нам и проводить ушедшего друга лично или
        получить ссылку на видеофиксацию. Напишите нам! Увы, мы не сможем вернуть животное к жизни, но сделаем все,
        чтобы организовать ему достойные проводы.
        <br />
        <br />
        <b>Пусть ваши Лапки, Ушки и любимые Хвостики будут живы и здоровы!</b>
        <br />
        <br /> ...А потом запахло мёдом и мятой, <br />Я в траву влетел по самые уши <br />И решил, что в новой жизни
        (девятой)
        <br /> Буду тем же, кем и был, только лучше...
      </>
    ) : (
      <>
        "Near this Spot are deposited the Remains of one who possessed Beauty without Vanity, Strength without
        Insolence, Courage without Ferocity, and all the virtues of Man without his Vices". - George Gordon Byron
        <br />
        <br />
        <b>Dear Friends</b>,
        <br />
        <br />
        While most site owners are usually happy with their sites being visited, we understand that you have been
        brought here by very sad circumstances, so please accept our sincere condolences — we are well aware of the fact
        that any tragic events are perceived even more sharply when you are far away from home. We understand that your
        four-legged friend is close to finishing their physical experience on Earth now. We hope that this experience
        was full of bright and interesting adventures that will make you remember the time you spent together. And we
        see our task in relieving them from their suffering as quickly and painlessly as possible. Our specialists are
        ready to put your pet to rest within the shortest period of time. First, our veterinary doctor examines the
        animal and takes a decision about the possibility of the procedure, then an injection of general anesthesia is
        made, and only after the pet falls into medical sleep, they are given an injection that leads to total stop of
        vital functions of the body. We use only the best and tested medications for narcosis and the actual euthanasia.
        After the procedure is finished our specialists are ready to take the body of your pet for further cremation.
        This can either be a common cremation when you do not receive the ashes, or an individual cremation after which
        you can receive a cinerary vase with the ashes of your pet. We only work with certified specialists, who are
        trained vets, and all our procedures are fully compliant with the legislation of the Russian Federation and
        commonly accepted moral and ethical norms. We accept both cash and card payments in Russian rubles. Please see
        our quotes below
      </>
    )}

    <CallMeForm lang={lang} />
  </div>
);

export default AboutUs;
