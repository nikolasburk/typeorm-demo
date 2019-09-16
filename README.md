# TypeoRM examples

The [entities](./src/entities) are mapped to the following tables:

```sql
-- Table Definition: post ----------------------------------------------

CREATE TABLE typeorm.post (
    id integer DEFAULT nextval('typeorm.post_id_seq'::regclass) PRIMARY KEY,
    "createdAt" timestamp without time zone NOT NULL DEFAULT now(),
    "updatedAt" timestamp without time zone NOT NULL DEFAULT now(),
    title character varying NOT NULL,
    content character varying,
    published boolean NOT NULL DEFAULT true,
    "authorId" integer REFERENCES typeorm.user(id)
);

-- Indices: post -------------------------------------------------------

CREATE UNIQUE INDEX "PK_4285756101d2294063f64230884" ON typeorm.post(id int4_ops);

-- Table Definition: post ----------------------------------------------

CREATE TABLE typeorm.user (
    id integer DEFAULT nextval('typeorm.user_id_seq'::regclass) PRIMARY KEY,
    "createdAt" timestamp without time zone NOT NULL DEFAULT now(),
    "updatedAt" timestamp without time zone NOT NULL DEFAULT now(),
    name character varying NOT NULL,
    email character varying NOT NULL UNIQUE,
    birthdate date
);

-- Indices: post -------------------------------------------------------

CREATE UNIQUE INDEX "PK_d0173c36409c3cb9989ae69dbaa" ON typeorm.user(id int4_ops);
CREATE UNIQUE INDEX "UQ_907679498ead05515c535575d9d" ON typeorm.user(email text_ops);
```