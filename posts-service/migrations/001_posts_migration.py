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
        CREATE TABLE message (
            id SERIAL PRIMARY KEY NOT NULL,
            user_id INTEGER NOT NULL REFERENCES users(id),
            message varchar(256) NOT NULL,
            sent TIMESTAMP without time zone NOT NULL
                DEFAULT (current_timestamp AT TIME ZONE 'PST')

        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE message;
        """
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE message_thread (
            id SERIAL PRIMARY KEY NOT NULL,
            user_id INTEGER NOT NULL REFERENCES users(id),
            second_user_id INTEGER NOT NULL REFERENCES users(id),
            message_id INTEGER NOT NULL REFERENCES message(id),
            UNIQUE (user_id, second_user_id)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE message_thread;
        """
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE messaging_history (
            id SERIAL PRIMARY KEY NOT NULL,
            message_thread_id INTEGER NOT NULL REFERENCES message_thread(id),
            user_id INTEGER NOT NULL REFERENCES users(id)

        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE messaging_history;
        """
    ]
]
