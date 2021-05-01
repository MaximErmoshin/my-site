import TextPage from '../text/textPage';
function plus(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
function getDateNow() {
    return new Date().toISOString();
}
const FirstPage = () => {
    return (
        <>
            <p>
                123
            </p>
            <p>
                asdasdasdasd
            </p>
            <h1>
                {plus(11, 2)}
            </h1>
            <h1>
                {minus(11, 2)}
            </h1>
            <small>
                {getDateNow()}
            </small>
            <TextPage />
        </>
    );
}
export default FirstPage;