import cls from './ProductCharacter.module.scss'

const CharacterItem = ({ name, text }) => {
  return (
    <div className={cls.flex}>
      <p>{name}</p>
      <p className={cls.dot}></p>
      <p>{text}</p>
    </div>
  )
}

const ProductCharacter = () => {
  return (
    <div className={cls.tabs}>
      <div>
        <CharacterItem name="Размер" text={"218 × 95 × 90 (Дл. × Шир. × Выс.)"} />
        <CharacterItem name="Спальное место" text={"195 × 144 × 44 (Дл. × Шир. × Выс.)"} />
        <CharacterItem name="Посадочное место" text={"50 × 44 (Глуб. × Выс.)"} />
        <CharacterItem name="Размер" text={"218 × 95 × 90 (Дл. × Шир. × Выс.)"} />
        <CharacterItem name="Механизм" text={"пантограф"} />
        <CharacterItem name="Материал ножек" text={"массив"} />
        <CharacterItem name="Наполнение подушек" text={"крошка ППУ, холлофайбер"} />
      </div>
      <div>
        <CharacterItem name="Бельевой ящик" text={"есть"} />
        <CharacterItem name="Зарядное устройство USB" text={"нет"} />
        <CharacterItem name="Съемный чехол" text={"нет"} />
        <CharacterItem name="Декоративные подушки" text={"есть"} />
        <CharacterItem name="Вариант доставки" text={"в разобранном виде"} />
        <CharacterItem name="Производитель" text={"Россия"} />
      </div>
    </div>
  )
}

export default ProductCharacter