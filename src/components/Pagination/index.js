
import { Container } from "./style";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

import React from 'react';
import { useEffect } from "react";

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({
    limit,
    total,
    offset,
    setOffset,
    setCurrentPage
}) => {

    const current = offset ? offset / limit + 1 : 1;
    const pages = Math.ceil(total / limit);
    const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
    const first = Math.min(
        Math.max(current - MAX_LEFT, 1),
        maxFirst
    );

    useEffect(() => {
        setCurrentPage(current)
    }, [current])

    function onPageChange(page) {
        setOffset((page - 1) * limit);
    }

    return (
        <Container>
            <ul className="pagination">
                <li>
                    <button
                        className="arrow"
                        onClick={() => onPageChange(current - 1)}
                        disabled={current === 1}
                    >
                        <AiOutlineArrowLeft size="16" />
                    </button>
                </li>
                {Array.from({ length: Math.min(MAX_ITEMS, pages) })
                    .map((_, index) => index + first)
                    .map((page) => (
                        <li key={page}>
                            <button
                                onClick={() => onPageChange(page)}
                                className={
                                    page === current
                                        ? "pagination__button-active"
                                        : null
                                }
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                <li>
                    <button
                        className="arrow"
                        onClick={() => onPageChange(current + 1)}
                        disabled={current === pages}
                    >
                        <AiOutlineArrowRight size="16" />
                    </button>
                </li>
            </ul>
        </Container>
    );
};

export default Pagination;
