import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="처음 시작하는 파이썬" numOfPage={300} />
            <Book name="처음 만난 AWS" numOfPage={350} />
            <Book name="처음 시작하는 리액트" numOfPage={400} />
        </div>
    );
}

export default Library;