'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import styles from './Page.module.css';
import { Featured } from '../components/Featured';

function MarvelCharacters() {
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [sortOrder, setSortOrder] = useState('asc');
    const charactersPerPage = 22;
    const totalCharacters = 1562;

    useEffect(() => {
        fetchCharacters();
    }, [currentPage, sortOrder]);

    const fetchCharacters = async () => {
        try {
            const offset = currentPage * charactersPerPage;
            const url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d856e3957ff64c0556b85454f1bd82af&hash=95671e97f084235e5d280687810b215b&limit=${charactersPerPage}&offset=${offset}`;

            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                let charactersData = data.data.results;

                if (sortOrder === 'desc') {
                    charactersData = charactersData.reverse();
                }

                setCharacters(charactersData);
                
            } else {
                throw new Error('Error al obtener los personajes de Marvel.');
            }
        } catch (error) {
            
        }
    };


    const handlePageChange = (selected) => {
        setCurrentPage(selected.selected);
    };

    const toggleSortOrder = () => {
        setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
    };

    return (
        <div>
            <Featured />
            <div className={styles.marvelCharacters}>
                <h1 className={styles.title}>List of Marvel Characters</h1>
                <div className={styles.sortButtonContainer}>
                    <button className={styles.sortButton} onClick={toggleSortOrder}>
                        Toggle Sort Order
                    </button>
                </div>
                <div className={styles.container}>
                    {characters.map((character) => (
                        <div key={character.id} className={styles.character}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                    alt={character.name}
                                    className={styles.image}
                                />
                            </div>
                            <h3 className={styles.name}>{character.name}</h3>
                        </div>
                    ))}
                </div>
                <div className={styles.paginationContainer}>
                    <ReactPaginate
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        breakLabel={'...'}
                        pageCount={Math.ceil(totalCharacters / charactersPerPage)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageChange}
                        containerClassName={styles.pagination}
                        activeClassName={styles.active}
                    />
                </div>
            </div>
        </div>
    );
}

export default MarvelCharacters;