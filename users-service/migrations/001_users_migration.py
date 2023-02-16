steps = [
    [
        # "Up" SQL statement
        """
            CREATE TABLE users (
                id serial primary key NOT NULL,
                username varchar(50) NOT NULL UNIQUE,
                user_password varchar(50) NOT NULL,
                email varchar(100) NOT NULL
            );
        """,
        # "Down" SQL statement
        """
        DROP TABLE users;
        """
    ]
]
