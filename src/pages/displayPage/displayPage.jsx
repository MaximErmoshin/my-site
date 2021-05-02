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
                    <div className="col-6 d-flex flex-column">
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
                        <img className="mt-2" src="https://ser-esenin.ru/uploads/posts/2017-04/1491736190_populyarnye-stihi-esenina.jpg" alt="альтернативный текст" />
                    </div>
                    <div className="col-2 background-orange">
                    </div>
                    <div className="col-4 d-flex flex-rol background-purple">
                        <p className="color-white">
                            Стихотворение завершается
                        </p>
                        <img className="ml-auto"
                            src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2018/05/untitled-1-1526865724.jpg"
                            alt="альтернативный текст"
                            width="150"
                            height="150" />
                    </div>
                </div>
            </section>
        </main>
    </>);

}

export default DisplayPage;
