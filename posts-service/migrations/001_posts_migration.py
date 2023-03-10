steps = [
    [
        # "Up" SQL statement
        """
            CREATE TABLE users (
                id serial primary key NOT NULL,
                username varchar(250) NOT NULL UNIQUE,
                hashed_password varchar(250) NOT NULL,
                email varchar(100) NOT NULL

            );
        """,
        # "Down" SQL statement
        """
        DROP TABLE users;
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
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE post (
            id SERIAL PRIMARY KEY NOT NULL,
            title varchar(50) NOT NULL,
            description varchar(256) NOT NULL,
            picture_url text NULL,
            user_id INTEGER NOT NULL REFERENCES users(id),
            game_id INTEGER NOT NULL REFERENCES games(id)

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
        CREATE TABLE likes (
            user_id bigint REFERENCES users(id) NOT NULL,
            post_id bigint REFERENCES post(id) NOT NULL,
            PRIMARY KEY (user_id, post_id)

        );
        CREATE INDEX ON likes (post_id);
        """,
        # "Down" SQL statement
        """
        DROP TABLE likes;
        """
    ]
]
