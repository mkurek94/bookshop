import axios from 'axios';
import * as actionTypes from './actionTypes';

export const setBooks = (books) => {
    return {
        type: actionTypes.SET_BOOKS,
        books: books
    };
};

export const initBooks = page => {
    return dispatch => {
        axios.get(`http://localhost:3001/api/book?page=${page}`).then(response => {
            dispatch(setBooks(response.data.data));
        });
    };
};

export const setPages = page => {
    return {
        type: actionTypes.SET_PAGE,
        page: page
    }
};

export const addItem = (id, title, author, cover, price, number) => {
    return {
        type: actionTypes.ADD_ITEM,
        id: id,
        title: title,
        author: author,
        cover: cover,
        price: price,
        number: number
    }
};

export const removeItem = id => {
    return {
        type: actionTypes.REMOVE_ITEM,
        id: id
    }
};