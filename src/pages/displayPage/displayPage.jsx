import './displayPage.css';
const DisplayPage = () => {
    return (<>
        <main>
            {/* Скрытие блоков при разном размере окна */}
            <section>
                <section className="d-lg-none">
                    <p>div</p>
                </section>
                <section className="d-md-none">
                    <p>main</p>
                </section>
                <section className="d-sm-none">
                    <p>section</p>
                </section>
                <section className="d-none">
                    <p>section4</p>
                </section>
            </section>
            <section>
                <div className="d-flex w-100">
                    <div className="col-6">
                        <p>
                            Еду. Тихо. Слышны звоны
                            Под копытом на снегу.
                            Только серые вороны
                            Расшумелись на лугу.

                            Заколдован невидимкой,
                            Дремлет лес под сказку сна.
                            Словно белою косынкой
                            Повязалася сосна.

                            Понагнулась, как старушка,
                            Оперлася на клюку,
                            А под самою макушкой
                            Долбит дятел на суку.

                            Скачет конь, простору много.
                            Валит снег и стелет шаль.
                            Бесконечная дорога
                            Убегает лентой вдаль.
                        </p>
                    </div>
                    <div className="col-2 background-orange">
                    </div>
                    <div className="col-4 background-purple">
                        <p className="color-white">
                            Стихотворение завершается картиной раздолья со скачущим конем. Традиционный элемент русского пейзажа – «бесконечная дорога» с непрекращающимся снегопадом. Этот образ символизирует широту русской души, ее необъятность и открытость.
                    </p>
                    </div>
                </div>
            </section>
        </main>
    </>);

}

export default DisplayPage;
