import undrawMobileLoginIkmvImage from '../../img/undraw_mobile_login_ikmv.png';
import groupImage from '../../img/Group.png';
import pathImage from '../../img/Path.png';
import './homePage.css';
const HomePage = () => {
    return (<>
        <main className="background-orange">
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
                        {/* {<p>
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
                        </p>}
                        <img className="mt-2" src="https://ser-esenin.ru/uploads/posts/2017-04/1491736190_populyarnye-stihi-esenina.jpg" alt="альтернативный текст" /> */}
                    </div>
                    {/* <div className="col-6 d-block">
                    <img className="ml-1"
                            src={groupImage}
                            alt="альтернативный текст"
                            width="350"
                            height="350" />
                    </div> */}
                    <p className="col-6 d-flex">
                        {/* <p className="color-white">
                        </p> */}
                        <img className="ml-1"
                            src={pathImage}
                            width="450"
                            height="450" />
                       
                    </p>
                    
                </div>
            </section>
        </main>
    </>);

}

export default HomePage;