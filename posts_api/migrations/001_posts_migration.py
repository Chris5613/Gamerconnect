steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE post (
            id SERIAL PRIMARY KEY NOT NULL,
            title varchar(50) NOT NULL,
            description varchar(256) NOT NULL,
            picture_URL text NULL,
            user_id int NOT NULL,
            game_id int NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users(id),
            FOREIGN Key (game_id) REFERENCES games(id)


        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE post;
        """
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE games (
            id SERIAL PRIMARY KEY NOT NULL,
            title varchar(20) NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE games;
        """
    ]
]
