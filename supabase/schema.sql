-- Run this in the Supabase SQL editor (Project → SQL Editor → New query).

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  activity text not null, -- 'immobilier' | 'evenement-mariage' | 'autre'
  location text,
  event_date text,
  message text not null
);

alter table public.leads enable row level security;

-- The app inserts leads using the Supabase service role key from a Next.js
-- Server Action, which bypasses RLS entirely. No public policies are needed
-- for inserts to work. Row Level Security stays ON so nothing can read the
-- table from the browser with the anon key.
--
-- If you'd rather insert with the anon key instead of the service role key,
-- uncomment this policy (insert-only, still no read access from the client):
--
-- create policy "Public can submit leads"
--   on public.leads for insert
--   to anon
--   with check (true);
