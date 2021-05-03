const InputPage = () => {

    return (<>
        <input type="text" /> //текстовое поле ввода
        <input type="password" /> //Поле для ввода пароля
        <input type="number" /> //Поле для ввода чисел
        <input type="checkbox" /> //Стрелочный набор чисел
        <input type="date" /> //вывод текущей даты
        <input type="datetime" /> //вывод текущего времени
        <select> //Поле с выпадающим списком
            <option >Россия</option> //содеражание выпадающего списка
            <option >Китай</option> //содеражание выпадающего списка
            <option >Аргентина</option> //содеражание выпадающего списка
        </select>
    </>);
}

export default InputPage;