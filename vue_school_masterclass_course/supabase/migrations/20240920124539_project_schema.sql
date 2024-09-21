drop table if exists projects;
drop type if exists current_status;

create type current_status as enum ('in-progress', 'completed');

create table projects (
                          id bigint primary key generated always as identity not null,
                          created_at timestamptz default now() not null,
                          name text not null,
                          slug text unique not null,
                          status current_status default 'in-progress' not null,
                          collaborators text array default array[]::varchar[] not null
);

/*INSERT INTO "public"."projects" ("created_at", "name", "slug") VALUES ('2024-09-20 12:07:51.241109+00', 'erstes Projekt', 'project-one'), ('2024-09-20 12:09:18.307596+00', 'zweites Project', 'project-two');*/