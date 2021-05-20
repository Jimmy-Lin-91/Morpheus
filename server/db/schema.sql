CREATE TABLE IF NOT EXISTS DreamDB (
  id INTEGER PRIMARY KEY
  date INTEGER NOT NULL,
  dream_summary TEXT NOT NULL,
  rested_rating INTEGER NOT NULL,
  before_bed_words TEXT NOT NULL
)