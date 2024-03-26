import './SearchForm.css';

export const SearchForm = () => {

    return (
        <form action="/#" className="search-form">
            <input type="search" placeholder="Я шукаю..."  className="search-form__input-search"/>
            <button className="search-form__micro-btn">
                <i className="fa-solid fa-microphone"></i>
            </button>
            <button className="search-form__submit-btn">Знайти</button>
        </form>
    )
}